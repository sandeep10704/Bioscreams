import React from 'react'
import OrderFormLayout from './OrderForm/OrderFormLayout'
import OrderListLayout from './OrderList/OrderListLayout'
import SingleOrderLayout from './SingleOrder/SingleOrderLayout'

const OrderLayout = () => {
  return (
    <div>
        <OrderFormLayout/>
        <OrderListLayout/>
        <SingleOrderLayout/>
    </div>
  )
}

export default OrderLayout