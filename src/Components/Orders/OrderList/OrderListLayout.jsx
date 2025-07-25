import React from 'react'
import Table from '../../Common/Table'


const OrderListLayout = () => {
  const tableData = {
    columnWidths: {
      "Order No.": "80px",
      "Customer": "120px",
      "Items Name": "130px",
      "Quantity": "60px",
      "Price Per Item": "100px",
      "Total Price": "90px",
      "Date & Time": "80px",
      "Address": "120px",
      "Delivery Status": "120px",
      "Arrow": "20px", 
    },
    columns: [
      "Order No.",
      "Customer",
      "Items Name",
      "Quantity",
      "Price Per Item",
      "Total Price",
      "Date & Time",
      "Address",
      "Delivery Status",
    ],
    itemsRow: [
      {
        "id": "ORD-001",
        "Order No.": "#ORD-001",
        "Customer": "Erma D. Rumph",
        "items": [
          { name: "Margherita Pizza", qty: 1, price: "$16.00" },
          { name: "Cheeseburger", qty: 2, price: "$10.00" },
        ],
        "Total Price": "$36.00",
        "Date & Time": "15-02-2024, 04:27 pm",
        "Address": "44 Hide A Way, Orlando.",
        "Delivery Status": "Ready To Pick",
      },
      {
        "id": "ORD-002",
        "Order No.": "#ORD-002",
        "Customer": "Craig E. Morg",
        "items": [
          { name: "Caesar Salad", qty: 2, price: "$13.00" },
          { name: "Veggie Wrap", qty: 2, price: "$9.00" },
          { name: "BBQ Chicken Wings", qty: 3, price: "$18.00" },
        ],
        "Total Price": "$98.00",
        "Date & Time": "19-11-2024, 03:45 pm",
        "Address": "Denver Avenue, Edgemt, CA 92",
        "Delivery Status": "Out Of Delivery",
      },
      {
        "id": "ORD-003",
        "Order No.": "#ORD-003",
        "Customer": "Laura W. Gibb",
        "items": [{ name: "Caesar Salad", qty: 1, price: "$13.00" }],
        "Total Price": "$13.00",
        "Date & Time": "12-03-2026, 11:15 am",
        "Address": "Goldie Lane, Cincinnati, OH",
        "Delivery Status": "Delivered",
      },
    ],
  };
  return (

    <div><Table tableData={tableData}/>
    </div>

  )
}

export default OrderListLayout