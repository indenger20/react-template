import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { INavigation, IApplicationState } from '../../interfaces';
import './AsideNav.scss';
import logo from '../../assets/images/logo.svg';

import navigation from '../../_nav';

import { HomeIcon, BurgerIco } from '../icons';

const mapStateToProps = (state: IApplicationState) => {
  return {
    router: state.router,
  };
};

interface IAsideNavProps {
  router: any;
}

function AsideNav(props: IAsideNavProps) {
  const [isOpen, toggle] = useState(true);

  const getIcon = (name: string, className: string) => {
    switch (name) {
      case 'icon-home':
        return <HomeIcon className={className} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  });

  return (
    <div className="aside-nav">
      <div className="aside-nav__head">
        <img className="aside-nav__logo" src={logo} alt="" />
        <BurgerIco
          className={`aside-nav__burger`}
          onClick={() => toggle(!isOpen)}
        />
      </div>
      <ul className="aside-nav__list">
        {navigation.map((n: INavigation) => {
          const isActive = props.router.location.pathname.includes(n.url);
          return (
            <li
              className={`aside-nav__item ${
                isActive ? 'aside-nav__item--active' : ''
              }`}
              key={n.name}
            >
              <Link to={n.url}>
                {n.icon && getIcon(n.icon, 'aside-nav__ico')}
                {n.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default connect(
  mapStateToProps,
  null,
)(AsideNav);
