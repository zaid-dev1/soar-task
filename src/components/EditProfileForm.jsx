import React, { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import initialUserData from "../data/userData.json"; 

const LOCAL_KEY = "user";

const EditProfileForm = () => {
  const [user, setUser] = useState({});

 
  useEffect(() => {
    const savedUser = localStorage.getItem(LOCAL_KEY);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
     
      localStorage.setItem(LOCAL_KEY, JSON.stringify(initialUserData));
      setUser(initialUserData);
    }
  }, []);


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
  const handleSave = () => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(user));
    alert("User data saved!");
  };

  return (
    <div className="mt-6 px-6 w-full">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-15">
      
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24">
            <img
              src={user.image || "/profile.jpg"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-black flex items-center justify-center cursor-pointer">
              <FiEdit2 className="text-white text-sm" />
            </div>
          </div>
        </div>

 
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {[
            { label: "Your Name", name: "name" },
            { label: "User Name", name: "username" },
            { label: "Email", name: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Date of Birth", name: "dob" },
            { label: "Present Address", name: "presentAddress" },
            { label: "Permanent Address", name: "permanentAddress" },
            { label: "City", name: "city" },
            { label: "Postal Code", name: "postalCode" },
            { label: "Country", name: "country" },
          ].map(({ label, name, type = "text" }) => (
            <div key={name}>
              <label className="text-sm text-black font-normal block mb-2">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={user[name] || ""}
                onChange={handleChange}
                className="w-full text-sm text-[#718EBF] px-4 py-2 rounded-xl border border-[#DFEAF2] focus:outline-none focus:ring-2 focus:ring-[#343C6A]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center md:justify-end">
        <button
          className="bg-black text-white text-sm w-full md:w-auto md:px-15 px-6 py-2 rounded-xl hover:bg-gray-900"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfileForm;
