import React, { useEffect, useRef, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { toast } from "react-toastify";
import initialUserData from "../data/userData.json";

const API_URL = import.meta.env.VITE_API_URL;
const LOCAL_KEY = "user";

const EditProfileForm = () => {
  const [user, setUser] = useState({});
  const [originalUser, setOriginalUser] = useState({});
  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const fileInputRef = useRef(null);
const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        const userData = {
          name: `${data.firstName} ${data.lastName}`,
          username: data.username,
          email: data.email,
          password: data.password || "password123",
          dob: data.birthDate || "",
          presentAddress: data.address.address || "",
          permanentAddress: data.address.city || "",
          city: data.address.city || "",
          postalCode: data.address.postalCode?.toString() || "",
          country: data.address.state || "",
          image: data.image || "/profile.jpg",
        };
        setUser(userData);
        setOriginalUser(userData);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(userData));
      })
      .catch(() => {
        const savedUser = localStorage.getItem(LOCAL_KEY);
        if (savedUser) {
          const parsed = JSON.parse(savedUser);
          setUser(parsed);
          setOriginalUser(parsed);
        } else {
          setUser(initialUserData);
          setOriginalUser(initialUserData);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
if (isLoading) {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
}
  const handleChange = (e) => {
    const updated = { ...user, [e.target.name]: e.target.value };
    setUser(updated);
    setErrors({ ...errors, [e.target.name]: "" });
    setHasChanges(JSON.stringify(updated) !== JSON.stringify(originalUser));
  };

  const validate = () => {
    const requiredFields = [
      "name",
      "username",
      "email",
      "password",
      "dob",
      "presentAddress",
      "permanentAddress",
      "city",
      "postalCode",
      "country",
    ];

    let tempErrors = {};
    requiredFields.forEach((field) => {
      if (!user[field] || user[field].trim() === "") {
        tempErrors[field] = "This field is required.";
      }
    });

    if (user.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      tempErrors.email = "Invalid email format.";
    }

    if (user.password && user.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    setIsSaving(true);

    const [firstName, ...rest] = user.name.split(" ");
    const lastName = rest.join(" ");

    const updatedData = {
      firstName,
      lastName,
      username: user.username,
      email: user.email,
      password: user.password,
      birthDate: user.dob,
      address: {
        address: user.presentAddress,
        city: user.city,
        postalCode: user.postalCode,
        state: user.country,
      },
    };

    fetch(API_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("User updated successfully!");
        setOriginalUser(user);
        setHasChanges(false);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(user));
      })
      .catch(() => {
        toast.error("Failed to update user via API.");
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedUser = { ...user, image: imageUrl };
      setUser(updatedUser);
      setHasChanges(true);
    }
  };

  return (
    <div className="mt-6 px-6 w-full">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-15">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24">
            <img
              src={user.image || "/profile.jpg"}
              alt="Profile"
              onClick={handleImageClick}
              className="w-24 h-24 rounded-full object-cover cursor-pointer"
            />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
            <div
              onClick={handleImageClick}
              className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-black flex items-center justify-center cursor-pointer"
            >
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
                className={`w-full text-sm text-[#718EBF] px-4 py-2 rounded-xl border ${
                  errors[name] ? "border-red-500" : "border-[#DFEAF2]"
                } focus:outline-none focus:ring-2 ${
                  errors[name] ? "focus:ring-red-500" : "focus:ring-[#343C6A]"
                }`}
              />
              {errors[name] && (
                <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center md:justify-end">
        <button
          disabled={!hasChanges || isSaving}
          onClick={handleSave}
          className={`text-sm w-full md:w-auto md:px-15 px-6 py-2 rounded-xl transition-all duration-300 ${
            !hasChanges || isSaving
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-primary"
          } text-white`}
        >
          {isSaving ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default EditProfileForm;


