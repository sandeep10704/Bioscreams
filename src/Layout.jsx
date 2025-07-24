import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-6 mt-16"> {/* mt-16 leaves space if Navbar is fixed */}
          {/* You can remove mt-16 if Navbar is not fixed */}
          <p>hiii</p>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
