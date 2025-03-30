

import { FaSearch, FaBell, FaCog, FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Topbar = ({ onMenuClick }) => {
   const location = useLocation();

   
   const routeTitleMap = {
     "/": "Overview",
     "/settings": "Settings",
   };

   const pageTitle = routeTitleMap[location.pathname] || "Page";
  return (
    <>
      <div className="w-full bg-white  px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-10">
            <button
              className="md:hidden text-xl text-primary"
              onClick={onMenuClick}
            >
              <FaBars />
            </button>

            <h1 className="text-2xl font-semibold text-primary mx-auto md:mx-0">
              {pageTitle}
            </h1>
          </div>

          <div className="md:hidden">
            <img
              src="/pf.png"
              alt="User"
              className="w-13 h-13 rounded-full object-cover border-2 border-white shadow-sm"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 w-full md:w-auto ">
          <div className="relative ">
            <input
              type="text"
              placeholder="Search for something"
              className="pl-10 pr-4 py-2 bg-background text-sm text-gray-700 placeholder-[#8BA3CB] rounded-full outline-none focus:ring-2 focus:ring-[#8BA3CB]"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-500 text-md" />
          </div>

          <div className="w-9 h-9 flex items-center justify-center bg-background rounded-full cursor-pointer hover:ring-2 ring-[#8BA3CB]">
            <FaCog className="text-[#718EBF]" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center bg-background rounded-full cursor-pointer hover:ring-2 ring-[#8BA3CB]">
            <FaBell className="text-[#718EBF]" />
          </div>

          <img
            src="/pf.png"
            alt="User"
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm cursor-pointer"
          />
        </div>
      </div>
    
      <div className="md:hidden px-4 pt-2 pb-3 bg-white flex justify-center">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search for something"
            className="pl-10 pr-4 py-2 w-full bg-[#F5F7FA] text-sm text-gray-700 placeholder-[#8BA3CB] rounded-full border border-[#E3E8EF] outline-none focus:ring-2 focus:ring-[#8BA3CB]"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-500 text-md" />
        </div>
      </div>

     
    </>
  );
};

export default Topbar;
