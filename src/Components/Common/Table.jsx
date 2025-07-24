import React from "react";

const Table = () => {
  const tableData = {
    columns: [
      "Order No.",
      "Customer",
      "Items Name",
      "Quantity",
      "Price Per Item",
      "Total Price",
      // "Payment Method",
      "Order Date & Time",
      "Address",
      "Delivery Status",
    ],
    itemsRow: [
      {
        id: "ORD-001",
        "Order No.": "#ORD-001",
        Customer: "Erma D. Rumph",
        items: [
          { name: "Margherita Pizza", qty: 1, price: "$16.00" },
          { name: "Cheeseburger", qty: 2, price: "$10.00" },
        ],
        "Total Price": "$36.00",
        // "Payment Method": "Online UPI",
        "Order Date & Time": "15-02-2024, 04:27 pm",
        Address: "44 Hide A Way, Orlando.",
        "Delivery Status": "Ready To Pick",
      },
      {
        id: "ORD-002",
        "Order No.": "#ORD-002",
        Customer: "Craig E. Morg",
        items: [
          { name: "Caesar Salad", qty: 2, price: "$13.00" },
          { name: "Veggie Wrap", qty: 2, price: "$9.00" },
          { name: "BBQ Chicken Wings", qty: 3, price: "$18.00" },
        ],
        "Total Price": "$98.00",
        // "Payment Method": "COD",
        "Order Date & Time": "19-11-2024, 03:45 pm",
        Address: "Denver Avenue, Edgemt, CA 92",
        "Delivery Status": "Out Of Delivery",
      },
      {
        id: "ORD-003",
        "Order No.": "#ORD-003",
        Customer: "Laura W. Gibb",
        items: [{ name: "Caesar Salad", qty: 1, price: "$13.00" }],
        "Total Price": "$13.00",
        // "Payment Method": "Online UPI",
        "Order Date & Time": "12-03-2026, 11:15 am",
        Address: "Goldie Lane, Cincinnati, OH",
        "Delivery Status": "Delivered",
      },
    ],
  };

  const getStatusStyle = (status) => {
    const base =
      "text-xs font-medium px-2 py-1 rounded-md inline-block text-center";
    const styles = {
      "Ready To Pick": "text-yellow-600 bg-yellow-100 border border-yellow-600",
      "Out Of Delivery":
        "text-purple-700 bg-purple-100 border border-purple-700",
      Delivered: "bg-green-600 text-white",
      Cancel: "bg-red-500 text-white",
      Progress: "text-blue-600 bg-blue-100 border border-blue-600",
    };
    return `${base} ${styles[status] || "bg-gray-300 text-white"}`;
  };

  const handleRedirect = (id) => {
    window.location.href = `/details/${id}`;
  };

  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-6">Orders Summary</h2>

      {/* Table Header */}
      <div className="grid grid-cols-[repeat(10,minmax(120px,1fr))_40px] bg-gray-100 text-sm text-gray-600 font-semibold rounded-t-md p-4 gap-4">
        {tableData.columns.map((col, idx) => (
          <div key={idx} className="truncate">
            {col}
          </div>
        ))}
        <div></div>
      </div>

      {/* Table Rows */}
      {tableData.itemsRow.map((row) => (
        <div
          key={row.id}
          className="grid grid-cols-[repeat(10,minmax(110px,1fr))_40px] bg-white p-4 rounded-lg shadow-sm my-2 text-sm gap-4"
        >
          <div>{row["Order No."]}</div>
          <div className="text-blue-600 font-medium cursor-pointer">
            {row.Customer}
          </div>

          {/* Items Name */}
          <div className="flex flex-col gap-1">
            {row.items.map((item, idx) => (
              <div key={idx} className="truncate">
                {idx + 1}. {item.name}
              </div>
            ))}
          </div>

          {/* Quantities */}
          <div className="flex flex-col gap-1">
            {row.items.map((item, idx) => (
              <div key={idx}>{item.qty}</div>
            ))}
          </div>

          {/* Price Per Item */}
          <div className="flex flex-col gap-1">
            {row.items.map((item, idx) => (
              <div key={idx}>{item.price}</div>
            ))}
          </div>

          <div>{row["Total Price"]}</div>
          {/* <div>{row["Payment Method"]}</div> */}
          <div className="break-words">{row["Order Date & Time"]}</div>
          <div className="break-words">{row.Address}</div>

          {/* Status Pill */}
          <div>
            <span className={getStatusStyle(row["Delivery Status"])}>
              {row["Delivery Status"]}
            </span>
          </div>

          {/* ➜ Redirect */}
          <div
            onClick={() => handleRedirect(row.id)}
            className="cursor-pointer flex items-center justify-center text-lg text-gray-500 hover:text-black"
            title="View Details"
          >
            ➜
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
