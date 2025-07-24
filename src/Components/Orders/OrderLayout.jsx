import React from 'react'
import OrderFormLayout from './OrderForm/OrderFormLayout'
import OrderListLayout from './OrderList/OrderListLayout'
import SingleOrderLayout from './SingleOrder/SingleOrderLayout'
import { Outlet } from 'react-router-dom';

const OrderLayout = () => {
  return (
    <div>
    <Outlet />
        <OrderFormLayout/>
        <OrderListLayout/>
        <SingleOrderLayout/>
    </div>
  )
}

export default OrderLayout