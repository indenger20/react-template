import React from 'react';
import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Components/Layout/Layout';

import routes from './routes';
import { IApplicationState } from './interfaces';

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

function App() {
  const { user, isLoading } = useSelector((state: IApplicationState) => ({
    user: state.user,
    isLoading: state.document.isLoading,
  }));

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

  return (
    <div className="App">
      {routes.filter(r => r.name === 'Login').map((r, i) => renderRoute(r, i))}

      <PrivateRoute path="/" component={Layout} isAuth={true} />
      <ToastContainer />
    </div>
  );
}

export default App;
