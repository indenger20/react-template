import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { IRoute } from '../../interfaces';

import AsideHeader from '../AsideNav';
import Header from '../Header';

// routes config
import routes from '../../routes';

class Layout extends Component {
  renderRoute(route: any, idx: number) {
    return (
      <Route
        key={idx}
        path={route.path}
        exact={route.exact}
        render={(props: any) => <route.component {...props} />}
      />
    );
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main-content">
          <AsideHeader />
          <div className="app-body">
            <Header />
            <main className="main">
              <Switch>
                {routes
                  .filter(r => r.name !== 'Login')
                  .map((route: IRoute, idx: number) =>
                    this.renderRoute(route, idx),
                  )}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
