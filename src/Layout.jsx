import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';


const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleSidebar={toggleSidebar} projectName={"Icy Tales"} logoImage={"#"}/>

      <div className="flex flex-1">
        <Sidebar isSidebarOpen={isSidebarOpen} />

        <main className="flex-grow flex flex-col mt-16 p-2">
          <div className="flex-grow">
            <p className="text-red-300">hiii</p>
            <Outlet />
          </div>

          <Footer projectName={"HeavenLyte"} rightsOwner={"Joshika"}/>
        </main>
      </div>
    </div>

    
  );
};

export default Layout;
