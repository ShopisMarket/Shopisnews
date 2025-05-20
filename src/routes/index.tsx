import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProductsPage from '../pages/ProductsPage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'getting-started',
        element: <Navigate to="/about" replace />, // Placeholder
      },
      {
        path: 'user-accounts',
        element: <Navigate to="/about" replace />, // Placeholder
      },
      {
        path: 'payment-system',
        element: <Navigate to="/about" replace />, // Placeholder
      },
      {
        path: 'settings',
        element: <Navigate to="/about" replace />, // Placeholder
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;