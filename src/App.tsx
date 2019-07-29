import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GeneralActions } from './actions';

import Layout from './Components/Layout/Layout';

import routes from './routes';
import { IUserState, IApplicationState } from './interfaces';

const mapStateToProps = (state: IApplicationState) => {
  return {
    user: state.user,
    isLoading: state.document.isLoading,
  };
};

interface IAppProps {
  user: IUserState;
  isLoading: boolean;
}

const PrivateRoute = (props: any) => {
  const { component: Component, isAuth, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props: any) => {
        // Check localstorage
        const token = window.localStorage.getItem('token');
        return true || token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

function App(props: IAppProps) {
  const renderRoute = (route: any, idx: number) => {
    return (
      <Route
        key={idx}
        path={route.path}
        exact={route.exact}
        render={(props: any) => <route.component {...props} />}
      />
    );
  };

  const isLoading = props.isLoading;
  return (
    <div className="App">
      {routes.filter(r => r.name === 'Login').map((r, i) => renderRoute(r, i))}

      <PrivateRoute path="/" component={Layout} isAuth={true} />
      <ToastContainer />
    </div>
  );
}

export default connect(
  mapStateToProps,
  null,
)(App);
