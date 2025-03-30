import {
  FaHome,
  FaMoneyBillWave,
  FaUser,
  FaChartBar,
  FaCreditCard,
  FaHandHoldingUsd,
  FaTools,
  FaGift,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  { icon: <FaHome size={20} />, label: "Dashboard", path: "/" },
  // { icon: <FaMoneyBillWave size={20} />, label: "Transactions", path: "/transactions" },
  // { icon: <FaUser size={20} />, label: "Accounts", path: "/accounts" },
  // { icon: <FaChartBar size={20} />, label: "Investments", path: "/investments" },
  // { icon: <FaCreditCard size={20} />, label: "Credit Cards", path: "/cards" },
  // { icon: <FaHandHoldingUsd size={20} />, label: "Loans", path: "/loans" },
  // { icon: <FaTools size={20} />, label: "Services", path: "/services" },
  // { icon: <FaGift size={20} />, label: "My Privileges", path: "/privileges" },
  { icon: <FaCog size={20} />, label: "Setting", path: "/settings" },
];

import { IoClose } from "react-icons/io5";
const Sidebar = ({ isOpen, onClose }) => {
  return (
   
    <div
      className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-md z-50 transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <div className="flex items-center justify-between py-6 px-4 md:justify-center md:gap-3">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8 mb-2" />
          <h1 className="text-2xl font-extrabold text-primary">Soar Task</h1>
        </div>

        <button onClick={onClose} className="md:hidden text-gray-500 text-xl">
          <IoClose />
        </button>
      </div>

      <div className="flex flex-col w-full gap-1 mt-4 px-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={onClose} 
            className={({ isActive }) =>
              `flex items-center gap-5 px-4 py-3 pl-4 w-full rounded-lg text-md transition-all ${
                isActive
                  ? "bg-background text-[#232323] font-semibold"
                  : "text-gray-500 hover:bg-background hover:text-[#232323]"
              }`
            }
          >
            <div className="flex items-center justify-center text-base">
              {item.icon}
            </div>
            <span className="leading-none">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
