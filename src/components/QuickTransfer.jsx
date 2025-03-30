import React from "react";
import { quickTransferData } from "../data/data";
import { IoPaperPlaneOutline } from "react-icons/io5";

const QuickTransfer = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-primary">Quick Transfer</h2>
      </div>

      <div className="bg-white rounded-2xl mt-6 p-4 min-h-[275px]">
        <div className="flex items-center justify-between gap-3">
          {/* Scrollable User List */}
          <div className="flex space-x-6 overflow-x-auto max-w-full scrollbar-hide">
            {quickTransferData.map((user, index) => (
              <div key={index} className="text-center flex-shrink-0 w-24">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full mx-auto mt-2"
                />
                <p
                  className="text-sm text-gray-900 mt-3"
                  style={{ fontWeight: user.fontWeight }}
                >
                  {user.name}
                </p>
                <p
                  className="text-xs text-[#718EBF]"
                  style={{ fontWeight: user.fontWeight }}
                >
                  {user.role}
                </p>
              </div>
            ))}
          </div>

        
          <div className="w-10 h-10  text-gray-500 flex items-center justify-center rounded-full shadow-md bg-white cursor-pointer shrink-0    hover:bg-primary hover:text-white transition-all duration-300">
            <span className="text-lg ">&gt;</span>
          </div>
        </div>

      
        <div className="flex flex-wrap items-center justify-between gap-4 mt-15 mb-7">
          <span className="text-sm text-[#718EBF] whitespace-nowrap">
            Write Amount
          </span>

          <div className="flex items-center bg-[#EDF1F7] rounded-full pl-3 pr-1 py-1 max-w-full">
            <input
              type="text"
              readOnly
              value="525.50"
              className="bg-transparent text-[#718EBF] text-sm text-center px-2 py-1 rounded-full focus:outline-none w-24 sm:w-28 md:w-32"
            />

            <button
              className="bg-black text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg  whitespace-nowrap
            hover:bg-primary hover:text-white transition-all duration-300
            "
            >
              <span>Send</span>
              <IoPaperPlaneOutline className="text-base" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};




export default QuickTransfer;





