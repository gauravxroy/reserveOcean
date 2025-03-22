import React from "react";
import { FaPrint } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import {
  MdStickyNote2,
  MdNoteAlt,
  MdNotificationsActive,
  MdEdit,
  MdSearch,
} from "react-icons/md";
import { PiNotePencilBold } from "react-icons/pi";
const FeaturesSection = () => {
  return (
    <div className="w-full bg-gray-50 border-b border-gray-200 pl-0">
      {/* Features section - the thin second header */}
      <div className="flex justify-between items-center px-6 py-2">
        <div className="text-sm text-gray-500">
          {/* Left side content if needed */}
        </div>

        <div className="flex items-center">
          <button className="flex items-center px-3 py-1.5 text-sm rounded border bg-white text-gray-700 border-gray-300 hover:bg-gray-100 transition-colors mr-2">
            <MdStickyNote2 className="" size={20} />
          </button>

          <button className="flex items-center px-3 py-1.5 text-sm rounded border bg-white text-gray-700 border-gray-300 hover:bg-gray-100 transition-colors mr-2">
            <MdNoteAlt className="mr-1.5" size={20} />
            <span>Add Note</span>
          </button>
          <button className="flex items-center px-3 py-1.5 text-sm rounded border bg-white text-gray-700 border-gray-300 hover:bg-gray-100 transition-colors mr-2">
            <MdEdit className="mr-1.5" size={20} />
            <span>Edit Tables</span>
          </button>
          <button className="flex items-center px-3 py-1.5 text-sm rounded border bg-white text-gray-700 border-gray-300 hover:bg-gray-100 transition-colors mr-2">
            <MdSearch className="text-red-500" size={20} />
          </button>
          <button className="flex items-center px-3 py-1.5 text-sm rounded border bg-white text-gray-700 border-gray-300 hover:bg-gray-100 transition-colors mr-2">
            <FaPrint className="mr-1.5" size={16} />
            <span>Print</span>
          </button>
          <button className="flex  gap-1 items-center px-3 py-1.5 text-sm rounded border bg-white text-gray-700 border-gray-300 hover:bg-gray-100 transition-colors mr-2">
            <span>Shift</span>
            <FaAngleDown size={16} />
          </button>
          <div className="relative">
            {/* Button */}
            <button className="flex gap-1 items-center px-3 py-1.5 text-sm rounded border bg-white text-gray-700 border-gray-300 hover:bg-gray-100 transition-colors mr-2">
              <MdNotificationsActive size={20} />
            </button>

            {/* Red Notification Dot */}
            <span className="absolute top-[0.1rem] right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
