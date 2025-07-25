import React from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

const SelectFiles = ({ highlightColor = "purple" }) => {
  const borderStyle = `border-2 border-dashed border-${highlightColor}-400`;

  return (
    <div
      className={`${borderStyle} bg-white flex flex-col items-center justify-center p-8 rounded-md w-full h-96 md:h-auto mx-auto`}
      style={{ maxWidth: "400px" }}
    >
      <CloudArrowUpIcon
        className={`w-16 h-16 text-${highlightColor}-300 mb-4`}
        aria-hidden="true"
      />
      <label
        htmlFor="file-upload"
        className={`cursor-pointer text-${highlightColor}-600 hover:underline font-semibold`}
      >
        Drop your images here, or click to browse
      </label>
      <span className="text-xs text-gray-400 mt-2 text-center max-w-xs">
        1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
      </span>
      <input type="file" multiple className="hidden" id="file-upload" />
    </div>
  );
};

export default SelectFiles;
