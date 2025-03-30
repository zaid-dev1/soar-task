import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
     
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-background bg-opacity-10 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      
      <div
        className={`
      flex-1 min-h-screen bg-background transition-all duration-300
      ${isSidebarOpen ? "ml-64" : "ml-0"} 
      md:ml-64
    `}
      >
        <Topbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
