import React from 'react';
import Loadable from 'react-loadable';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./pages/Dashboard'),
  loading: Loading,
});

const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];

export default routes;
