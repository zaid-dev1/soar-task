import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // <div className="flex">
    //   <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    //   {isSidebarOpen && (
    //     <div
    //       className="fixed inset-0 bg-background bg-opacity-10 z-40 md:hidden"
    //       onClick={() => setIsSidebarOpen(false)}
    //     />
    //   )}
    //   <div
    //     className={`
    //   flex-1 min-h-screen bg-background transition-all duration-300
    //   ${isSidebarOpen ? "ml-64" : "ml-0"}
    //   md:ml-64
    // `} >

    //     <Topbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

    //     <main className="p-6">
    //       <Outlet />
    //     </main>
    //   </div>
    // </div>
    <div className="relative min-h-screen">
      {/* Sidebar always exists but slides in/out */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Overlay backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black z-40 md:hidden"
          style={{ opacity: 0.25 }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
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
