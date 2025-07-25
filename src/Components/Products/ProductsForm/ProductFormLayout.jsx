import React from "react";
import ProductForm from "./Components/ProductForm";

const ProductFormLayout = () => {
  return (
    <div className="min-h-screen p-6 flex flex-col justify-center">
      <ProductForm highlightColor="purple" />
      <div className="flex justify-end gap-4 mt-8 max-w-5xl ">
        <button className="bg-gray-50 border border-gray-300 hover:bg-gray-100 py-2 px-5 rounded-md text-gray-700 shadow-sm">
          Cancel
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-5 rounded-md shadow-md">
          Save Change
        </button>
      </div>
    </div>
  );
};

export default ProductFormLayout;
