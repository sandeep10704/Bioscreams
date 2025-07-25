import React from "react";

const Table = ({tableData}) => {
  

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

  const allColumns = [...tableData.columns, "Arrow"];
  const gridTemplateCols = allColumns
    .map((col) => tableData.columnWidths[col])
    .join(" ");

  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-6">Orders Summary</h2>

      <div className="max-w-[1200px] w-full">
       
        <div
          className="bg-gray-100 text-sm text-gray-600 font-semibold rounded-t-md p-4 gap-4 grid"
          style={{ gridTemplateColumns: gridTemplateCols }}
        >
          {tableData.columns.map((col, idx) => (
            <div key={idx} className="truncate">
              {col}
            </div>
          ))}
          <div></div>
        </div>

  
        {tableData.itemsRow.map((row) => (
          <div
            key={row.id}
            className="bg-white p-4 rounded-lg shadow-sm my-2 text-sm gap-4 grid"
            style={{ gridTemplateColumns: gridTemplateCols }}
          >
            {tableData.columns.map((col, idx) => {
              if (col === "Items Name") {
                return (
                  <div key={idx} className="flex flex-col gap-1">
                    {row.items.map((item, i) => (
                      <div key={i} className="truncate">
                        {i + 1}. {item.name}
                      </div>
                    ))}
                  </div>
                );
              } else if (col === "Quantity") {
                return (
                  <div key={idx} className="flex flex-col gap-1">
                    {row.items.map((item, i) => (
                      <div key={i}>{item.qty}</div>
                    ))}
                  </div>
                );
              } else if (col === "Price Per Item") {
                return (
                  <div key={idx} className="flex flex-col gap-1">
                    {row.items.map((item, i) => (
                      <div key={i}>{item.price}</div>
                    ))}
                  </div>
                );
              } else if (col === "Customer") {
                return (
                  <div
                    key={idx}
                    className="text-blue-600 font-medium cursor-pointer"
                  >
                    {row[col]}
                  </div>
                );
              } else if (col === "Delivery Status") {
                return (
                  <div key={idx}>
                    <span className={getStatusStyle(row[col])}>
                      {row[col]}
                    </span>
                  </div>
                );
              } else {
                return (
                  <div key={idx} className="break-words">
                    {row[col] || row["Order Date & Time"]}
                  </div>
                );
              }
            })}

           
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
    </div>
  );
};

export default Table;
