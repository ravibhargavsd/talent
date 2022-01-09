import { Navigate, useRoutes } from 'react-router-dom';
import React from 'react'
// layouts
// import DashboardLayout from './layouts/dashboard';
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
// import Login from './pages/Login';
// import Register from './pages/Register';
// import DashboardApp from './pages/DashboardApp';
// import Products from './pages/Products';
// import Blog from './pages/Blog';
// import User from './pages/User';
// import NotFound from './pages/Page404';
import Page from './components/Page';
import Users from './components/users';

import { Stocks } from './components/Stocks/Stocks';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
      { path: 'Users', element: <Users />} ,
      { path: 'hellocv', element: <Page />} ,
      {path: '/', element: <Stocks />}
    ]);
}
