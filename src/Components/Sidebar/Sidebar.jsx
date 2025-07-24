import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  ShoppingBagIcon,
  CubeIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

import Dropdown from './Dropdown';

const Sidebar = ({isSidebarOpen}) => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const toggleDropdown = (id) => {
    setOpenDropdowns(prev => ({ ...prev, [id]: !prev[id] }));
  };
  // if(!isSidebarOpen) return null;
  const navConfig = [
    {
      id: 'dashboard',
      type: 'link',
      name: 'Dashboard',
      path: '/',
      icon: HomeIcon,
      badge: '9+',
    },
    {
      id: 'orders',
      type: 'link',
      name: 'Orders',
      path: '/orders',
      icon: ShoppingBagIcon,
    },
    {
      id: 'products',
      type: 'dropdown',
      name: 'Products',
      icon: CubeIcon,
      items: [
        { name: 'Sample Option 1', path: '/products/sample1' },
        { name: 'Sample Option 2', path: '/products/sample2' },
      ],
    },
    {
      id: 'categories',
      type: 'dropdown',
      name: 'Categories',
      icon: Squares2X2Icon,
      items: [
        { name: 'Sample Option A', path: '/categories/sample1' },
        { name: 'Sample Option B', path: '/categories/sample2' },
      ],
    },
    {
      id: 'customers',
      type: 'link',
      name: 'Customers',
      path: '/customers',
      icon: UserGroupIcon,
    },
  ];

  return (
    <div className="w-56 bg-white h-screen px-4 py-4 flex flex-col border-r">
      <nav className="flex flex-col gap-2 mt-2">

        {navConfig.map((item) => {
          if (item.type === 'link') {
            return (
              <NavLink
                key={item.id}
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-md px-2.5 py-2 text-base transition font-medium
                  ${isActive ? 'text-purple-700 bg-purple-50 font-semibold' : 'hover:bg-gray-100 text-gray-500'}`
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`p-2 rounded-full transition
                      ${isActive ? 'bg-purple-600 text-white' : 'text-gray-400'}`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="ml-auto bg-green-500 text-xs font-bold text-white px-2 py-0.5 rounded-full flex items-center">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          } else if (item.type === 'dropdown') {
            return (
              <Dropdown
                key={item.id}
                title={item.name}
                icon={item.icon}
                items={item.items}
                isOpen={!!openDropdowns[item.id]}
                toggleOpen={() => toggleDropdown(item.id)}
                activePaths={item.items.map(subItem => subItem.path)}
              />
            );
          }

          return null; 
        })}

      </nav>
    </div>
  );
};

export default Sidebar;
