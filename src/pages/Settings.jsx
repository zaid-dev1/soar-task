import React, { useState } from "react";
import EditProfileForm from "../components/EditProfileForm";

const tabs = ["Edit Profile", "Preferences", "Security"];

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  return (
    <div className="p-2 md:p-8 min-h-screen md:px-5 sm:px-1">
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 max-w-6xl mx-auto">
      
        <div className="flex flex-wrap lg:gap-10 md:gap-4 sm:gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-2 font-medium text-sm border-b-2 transition-all duration-300 ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-[#718EBF] hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

    
        {activeTab === "Edit Profile" && <EditProfileForm />}
        {activeTab === "Preferences" && (
          <p className="text-sm text-gray-600 mt-4">Preferences Content</p>
        )}
        {activeTab === "Security" && (
          <p className="text-sm text-gray-600 mt-4">Security Content</p>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
