import React, { useState, useRef, useEffect } from 'react';
import { FiMenu, FiSearch } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { IoMdFlame } from "react-icons/io";

const Navbar = ({ toggleSidebar, projectName, logoImage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#663FFA] text-white px-4 py-4 flex items-center justify-between w-full z-50 shadow-md">
      <div className="flex items-center gap-20">
          <div className="flex items-center gap-2 font-bold text-lg">
          {/* <img src={logoImage} alt="Logo" className="w-8 h-8 rounded-full" /> */}
          <span>{projectName}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMenu
            className="text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
          <div className="relative">
            <FiSearch className="absolute top-2.5 left-2 text-white" />
            <input
              type="text"
              placeholder="Start typing..."
              className="pl-8 pr-4 py-1.5 rounded-md bg-[#663FFB] text-white placeholder-gray-300 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FaRegMoon className="text-xl cursor-pointer" />
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="hidden sm:block font-semibold">DORIS LIETZ</span>
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-50">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Account</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pricing</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Help</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Photos</li>
                <hr className="my-1" />
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Lock Screen</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sign Up</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
