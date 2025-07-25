import React from "react";
import FormInput from "./FormInput";
import SelectFiles from "./SelectFiles";
const ProductForm = ({ highlightColor = "purple" }) => {
  return (
    <div className="flex flex-col md:flex-row gap-34 bg-white shadow-md rounded-md p-12 max-w-5xl mx-auto">
      <div className="w-full md:w-1/2 flex flex-col">
        <label className="font-semibold mb-3 text-gray-800 text-lg">
          Add Categories Photo
        </label>
        <SelectFiles highlightColor={highlightColor} />
      </div>
      <div className="w-full md:w-1/2 flex flex-col space-y-6">
        <h2 className={`text-xl font-bold text-${highlightColor}-700`}>
          General Information
        </h2>
        <FormInput label="Categories Name" placeholder="Enter Name" />
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Status</label>
          <select
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-purple-200"
            defaultValue=""
          >
            <option disabled value="">
              This is a placeholder set in the config
            </option>
            <option value="admin">
             Admin
            </option>
             <option value="other">
             Other
            </option>
             <option value="cater">
              Select cater
            </option>
             <option value="seller">
              Seller
            </option>
          </select>
        </div>
        <FormInput label="Stock" placeholder="Quantity" />
        <FormInput
          label="Typical Ingredients"
          placeholder="Use Ingredients"
          textarea
        />
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">Price Range</label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="5"
              max="200"
              className="flex-1"
              aria-label="Price range slider"
            />
            <span className="text-sm whitespace-nowrap">$5 to $200</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Status</label>
          <select
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-purple-200"
            defaultValue=""
          >
            <option disabled value="">
              This is a placeholder set in the config
            </option>
             <option value="Active">
              Active
            </option>
             <option value="In-active">
              In-active
            </option>
             <option value="Select Status">
              Select Status
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
