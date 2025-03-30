

import React from "react";
import { quickTransferData } from "../data/data";
import { IoPaperPlaneOutline } from "react-icons/io5";

const QuickTransfer = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-3">
        <h2 className="text-lg font-semibold text-primary">Quick Transfer</h2>
      </div>

    
      <div className="bg-white rounded-2xl mt-6 p-4 px-5 md:w-[93%]">
        <div className="flex items-center justify-between px-5 md:gap-0 sm:gap-2">
          <div className="flex space-x-8 overflow-x-auto max-w-full">
            {quickTransferData.map((user, index) => (
              <div key={index} className="text-center flex-shrink-0">
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

          <div className="md:w-10 md:h-10 sm:w-8 sm:h-8 bg-white flex items-center justify-center rounded-full shadow-lg cursor-pointer">
            <span className="text-lg text-gray-500 ">&gt;</span>
          </div>
        </div>

       
        <div className="flex items-center justify-between gap-2 mt-8 mb-7 md:px-4 md:py-3 sm:px-1 sm:py-1 rounded-2xl">
          <span className="text-sm text-[#718EBF] whitespace-nowrap">
            Write Amount
          </span>

          <div className="flex items-center bg-[#EDF1F7] rounded-full pl-2 pr-1 py-1 max-w-full overflow-hidden">
            <input
              type="text"
              readOnly
              value="525.50"
              className="bg-transparent text-[#718EBF] text-sm text-center px-2 py-1 rounded-full focus:outline-none w-20 sm:w-24"
            />

            <button className="bg-black text-white text-sm font-medium px-3 py-2 rounded-full flex items-center gap-1 shadow-md hover:shadow-lg transition whitespace-nowrap">
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





