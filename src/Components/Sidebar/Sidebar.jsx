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
const colorsMap = {
  purple: { text: '#6b21a8', bg: '#faf5ff', iconBg: '#6b21a8', iconText: '#fff' },
  blue: { text: '#2563eb', bg: '#eff6ff', iconBg: '#2563eb', iconText: '#fff' },
  red: { text: '#b91c1c', bg: '#fee2e2', iconBg: '#b91c1c', iconText: '#fff' },
  green: { text: '#15803d', bg: '#dcfce7', iconBg: '#15803d', iconText: '#fff' },
};
const Sidebar = ({ isSidebarOpen, highlightColor = 'blue' }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const activeColors = colorsMap[highlightColor] || colorsMap.purple;

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
        { name: 'Listing', path: '/products/sample1' },
        { name: 'Add/Edit Product', path: '/products/sample2' },
      ],
    },
    {
      id: 'categories',
      type: 'dropdown',
      name: 'Categories',
      icon: Squares2X2Icon,
      items: [
        { name: 'Listing', path: '/categories/sample1' },
        { name: 'Add/Edit Category', path: '/categories/sample2' },
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
    <div
      className={`
        ${isSidebarOpen ? 'w-56 block' : 'w-16 hidden md:block'}
        bg-white h-screen px-2 py-4 flex flex-col border-r transition-all duration-300 overflow-hidden
      `}
    >
      <nav className="flex flex-col gap-2 mt-2">
        {navConfig.map((item) => {
          if (item.type === 'link') {
            return (
              <NavLink
                key={item.id}
                to={item.path}
                end
                className="flex items-center gap-3 rounded-md px-2.5 py-2 text-base transition font-medium"
              >
                {({ isActive }) => {
                  const iconStyle = isActive
                    ? { backgroundColor: activeColors.iconBg, color: activeColors.iconText }
                    : { color: '#9ca3af' };
                  const textStyle = isActive
                    ? {
                        color: activeColors.text,
                        fontWeight: '600',
                        backgroundColor: activeColors.bg,
                        borderRadius: '0.375rem',
                        padding: '0.375rem 0.625rem',
                        flexGrow: 1,
                      }
                    : { color: '#6b7280', flexGrow: 1 };

                  return (
                    <>
                      <div
                        className="p-2 rounded-full transition"
                        style={iconStyle}
                        title={!isSidebarOpen ? item.name : ''}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      {isSidebarOpen && <span style={textStyle}>{item.name}</span>}
                      {isSidebarOpen && item.badge && (
                        <span className="ml-auto bg-green-500 text-xs font-bold text-white px-2 py-0.5 rounded-full flex items-center">
                          {item.badge}
                        </span>
                      )}
                    </>
                  );
                }}
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
                isSidebarOpen={isSidebarOpen}
                activeColors={activeColors}
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
