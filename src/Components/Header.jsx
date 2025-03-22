import React, { useState, useRef, useEffect } from "react";
import avatar from "../assets/Sidebar(icons)/avatar.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  // Get current date
  const currentDate = new Date();
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-10">
      {/* Date Section */}

      <div className="flex items-center gap-3">
        <span className="text-gray-600 font-medium">{formattedDate}</span>
        <SlCalender size={24} />
      </div>

      {/* Restaurant Name */}
      <div className="flex justify-center items-center gap-4">
        <div className="text-md font-medium text-gray-700 tracking-wider">
          OXBO KITCHEN AT HILTON LONDON
        </div>

        {/* User Profile and Help Button */}
        <div className="flex items-center gap-4 relative">
          {/* User Profile */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            ref={dropdownRef}
          >
            <img
              src={avatar}
              alt="User profile"
              className="w-8 h-8 rounded-full object-cover border border-gray-200"
            />
            <span
              className="mr-2 flex hover:text-gray-700"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Alex Rodger <RiArrowDropDownLine size={24} />
            </span>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute mt-[180px]  w-40 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Help Button */}
          <button className="bg-red-600 text-white px-4 py-1 rounded font-medium text-sm hover:bg-red-700">
            Help
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
