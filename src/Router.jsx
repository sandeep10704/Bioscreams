import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import CategoriesLayout from './Components/Categories/CategoriesLayout';
import OrderListLayout from './Components/Orders/OrderList/OrderListLayout'
import OrderLayout from './Components/Orders/OrderLayout'
import SingleOrderLayout from './Components/Orders/SingleOrder/SingleOrderLayout';
import OrderFormLayout from './Components/Orders/OrderForm/OrderFormLayout';
import CategoriesListLayout from './Components/Categories/CategoriesList/CategoriesListLayout';
import SingleCategoryLayout from './Components/Categories/SingleCategory/SingleCategoryLayout';
import CategoriesFormLayout from './Components/Categories/CategoriesForm/CategoriesFormLayout';
import CustomerFormLayout from "./Components/Customers/CustomerForm/CustomerFormLayout"
import SingleCustomerLayout from "./Components/Customers/SingleCustomer/SingelCustomerLayout"
import CustomerListLayout from './Components/Customers/CustomerList/CustomerListLayout';
import CustomerLayout from "./Components/Customers/CustomerLayout"
import DashboardLayout from './Components/Dashboard/DashboardLayout';
import ProductLayout from './Components/Products/ProductLayout'
import ProductFormLayout from './Components/Products/ProductsForm/ProductFormLayout';
import ProductListLayout from './Components/Products/ProductList/ProductListLayout';
import SingleProductLayout from './Components/Products/SingleProduct/SingleProductLayout';
import Login from "./Pages/Login"
import Images from "./Assets/Img/images"
import Signup from "./Pages/Signup"

const router = createBrowserRouter([
  {
    path:'/login', element:<Login loginImage={Images.SignUpImage} buttonColor="bg-[#3BB77E] hover:bg-[#2E8D63]" />
  },
  {
    path:'/Signup', element:<Signup signupImage={Images.SignUpImage} buttonColor="bg-[#3BB77E] hover:bg-[#2E8D63]" />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <DashboardLayout />,
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
        element: <ProductLayout />,
        children: [
          { index: true, element: <ProductListLayout /> },
          { path: 'form', element: <ProductFormLayout/> },
          { path: ':id', element: <SingleProductLayout /> },
        ],
      },
      {
        path: 'categories',
        element: <CategoriesLayout />,
        children: [
          { index: true, element: <CategoriesListLayout /> },
          { path: ':id', element: <SingleCategoryLayout /> },
          { path: 'form', element: <CategoriesFormLayout />},
        ],
      },
      {
        path: 'customers',
        element: <CustomerLayout />,
        children: [
          { index: true, element: <CustomerListLayout /> },
          { path: ':id', element: <SingleCustomerLayout /> },
          { path: 'form', element: <CustomerFormLayout /> },
        ],
      },
      
    ],
  },
]);

export default router;
