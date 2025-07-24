import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">hello</h1>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="hover:bg-gray-700 px-4 py-2 rounded">
          Dashboard
        </Link>
        <Link to="/orders" className="hover:bg-gray-700 px-4 py-2 rounded">
          Orders
        </Link>
        <Link to="/products" className="hover:bg-gray-700 px-4 py-2 rounded">
          Products
        </Link>
        <Link to="/categories" className="hover:bg-gray-700 px-4 py-2 rounded">
          Categories
        </Link>
        <Link to="/customers" className="hover:bg-gray-700 px-4 py-2 rounded">
          Customers
        </Link>
        <Link to="/pizzas" className="hover:bg-gray-700 px-4 py-2 rounded">
          Pizzas
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
