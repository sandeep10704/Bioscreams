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
      <Navbar toggleSidebar={toggleSidebar} projectName={"Icy Tales"} logoImage={"#"} />

      <div className="flex min-h-screen">
        {/* Sidebar (sticky to left) */}
        <div className="sticky top-0 h-screen">
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </div>

        {/* Main content */}
        <main className="flex-grow flex flex-col mt-16 p-2 max-w-[360px] lg:max-w-[1200px] mx-auto">
          <div className="flex-grow">
            <Outlet />
          </div>

          <Footer projectName={"HeavenLyte"} rightsOwner={"Joshika"} />
        </main>
      </div>

    </div>



  );
};

export default Layout;
