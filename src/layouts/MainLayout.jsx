import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    
    <div className="relative min-h-screen">
     
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

     
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black z-40 md:hidden"
          style={{ opacity: 0.25 }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
     
      <div
        className={`
      md:ml-64 transition-all duration-300 relative z-10
      bg-background min-h-screen
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
