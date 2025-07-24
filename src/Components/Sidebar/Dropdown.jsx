import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Dropdown = ({ title, icon: Icon, items, isOpen, toggleOpen, isSidebarOpen }) => {
  return (
    <div>
      <button
        onClick={toggleOpen}
        className="flex items-center gap-3 w-full rounded-md px-2.5 py-2 text-base font-medium text-gray-500 hover:bg-gray-100"
      >
        <span
          className="p-2 rounded-full text-gray-400"
          title={!isSidebarOpen ? title : ''}
        >
          <Icon className="w-5 h-5" />
        </span>

        {isSidebarOpen && <span>{title}</span>}

        {isSidebarOpen && (
          <ChevronDownIcon
            className={`w-4 h-4 ml-auto transition-transform ${
              isOpen ? 'rotate-180' : ''
            } text-gray-400`}
          />
        )}
      </button>

      {isSidebarOpen && isOpen && (
        <div className="ml-8 mt-1 flex flex-col gap-1">
          {items.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2.5 py-1.5 text-base rounded-md transition ${
                  isActive
                    ? 'bg-purple-100 text-purple-700 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
