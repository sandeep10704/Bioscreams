import React from "react";

const FormInput = ({ label, placeholder, textarea, ...props }) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-purple-200 w-full"
          {...props}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-purple-200 w-full"
          {...props}
        />
      )}
    </div>
  );
};

export default FormInput;
