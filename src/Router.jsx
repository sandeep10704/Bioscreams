import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Pages/Dashboard';
import Orders from './Pages/Orders';
import Products from './Pages/Products';
import Categories from './Pages/Categories';
import Customers from './Pages/Customers';
import OrderListLayout from './Components/Orders/OrderList/OrderListLayout'
import OrderLayout from './Components/Orders/OrderLayout'
import SingleOrderLayout from './Components/Orders/SingleOrder/SingleOrderLayout';
import OrderFormLayout from './Components/Orders/OrderForm/OrderFormLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <Dashboard />,
      },
      {
        path: 'orders',
        element: <OrderLayout/>,
        children: [
          { index: true, element: <OrderListLayout/> },
          { path: ':id', element: <SingleOrderLayout/> },
          { path: 'form', element: <OrderFormLayout/> },
        ],
      },
      {
        path: 'products',
        element: <Products />,
        children: [
          { index: true, element: <ProductList /> },
          { path: 'add', element: <ProductAdd /> },
          { path: 'edit', element: <ProductEdit /> },
        ],
      },
      {
        path: 'categories',
        element: <Categories />,
        children: [
          { index: true, element: <CategoryList /> },
          { path: 'add', element: <CategoryAdd /> },
          { path: 'edit', element: <CategoryEdit /> },
        ],
      },
      {
        path: 'customers',
        element: <Customers />,
        children: [
          { index: true, element: <CustomerList /> },
          { path: 'profile', element: <CustomerProfile /> },
          { path: 'support', element: <CustomerSupport /> },
        ],
      },
    ],
  },
]);

export default router;
