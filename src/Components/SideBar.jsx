import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa6";
import logo from "../assets/Sidebar(icons)/reserveOcean.svg";
import floorPlan from "../assets/Sidebar(icons)/floorplan.svg";
import grid from "../assets/Sidebar(icons)/grid.svg";
import guestlist from "../assets/Sidebar(icons)/guestlist.svg";
import request from "../assets/Sidebar(icons)/request.svg";

const TabSidebar = ({ tableStats, formData }) => {
  // Track which tab is active
  const [activeTab, setActiveTab] = useState(null);

  console.log(formData);

  // Toggle active tab
  const toggleTab = (tabName) => {
    if (activeTab === tabName) {
      setActiveTab(null);
    } else {
      setActiveTab(tabName);
    }
  };

  return (
    <div className="flex h-full">
      {/* Tab Icons Column */}
      <div className="w-20 bg-white h-screen flex flex-col items-center py-6 border-r-[1px] border-[#fff] ">
        <div className="mb-8" title="ReserveOcean">
          <img src={logo} className="w-8 h-8" alt="" />
        </div>

        <div
          className={`p-3 rounded-lg mb-4 cursor-pointer ${
            activeTab === "info"
              ? "bg-[#f0a045a9] text-white"
              : "text-gray-300 hover:bg-[#e7ad6a85]"
          }`}
          onClick={() => toggleTab("info")}
          title="floor Map"
        >
          <img src={floorPlan} alt="Table Information" className="w-8 h-8" />
        </div>

        <div
          className={`p-3 rounded-lg mb-4 cursor-pointer ${
            activeTab === "filter"
              ? "bg-[#ee9229bf] text-white"
              : "text-gray-300 hover:bg-[#ee9229a2]"
          }`}
          onClick={() => toggleTab("grid")}
          title="Grid"
        >
          <img src={grid} alt="grid" className="w-8 h-8" />
        </div>

        <div
          className={`p-3 rounded-lg mb-4 cursor-pointer ${
            activeTab === "stats"
              ? "bg-[#ee9229bf] text-white"
              : "text-gray-300 hover:bg-[#ee9229a2]"
          }`}
          onClick={() => toggleTab("clients")}
          title="Clients"
        >
          <img src={guestlist} alt="clients" className="w-8 h-8" />
        </div>

        <div
          className={`p-3 rounded-lg mb-4 cursor-pointer ${
            activeTab === "settings"
              ? "bg-[#ee9229bf] text-white"
              : "text-gray-300 hover:bg-[#ee9229a2]"
          }`}
          onClick={() => toggleTab("requests")}
          title="Requests"
        >
          <img src={request} alt="feedback" className="w-8 h-8" />
        </div>
      </div>

      {/* Expandable Panel */}
      {activeTab && (
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          {activeTab === "info" && (
            <div>
              <div>
                <h2 className="flex items-center cursor-pointer gap-2 font-semibold text-md ml-3 mt-2 mb-3">
                  OXBO KITCHEN <RiArrowDropDownLine size={30} />
                </h2>
              </div>
              <div className="">
                <ul className="border border-gray-300 rounded divide-y divide-gray-300">
                  {[
                    {
                      time: "18:00",
                      table: "T9",
                      name: "Jason Mathew",
                      isBooked: false,
                    },
                    {
                      time: "18:30",
                      table: "T4",
                      name: "Ketty perry",
                      isBooked: false,
                    },
                    {
                      time: "19:30",
                      table: "T11",
                      name: "Jasmine rosee",
                      isBooked: false,
                    },
                    {
                      time: "15:00",
                      table: "T1",
                      name: "Stuart Little",
                      isBookedis: true,
                    },
                    {
                      time: "16:30",
                      table: "T3",
                      name: "Stuart Little",
                      isBooked: true,
                    },
                    {
                      time: "17:00",
                      table: "T6",
                      name: "Stuart Little",
                      isBooked: true,
                    },
                    {
                      time: "20:00",
                      table: "PD",
                      name: "Stuart Little",
                      isBooked: true,
                    },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center text-sm text-white px-4 py-3 ${
                        item.isBooked ? "bg-red-500" : "bg-violet-600"
                      }`}
                    >
                      <FaClipboardList className="w-5 h-5 mr-2" />
                      <span className="text-left">
                        {item.time} {item.table}
                      </span>
                      <span className="ml-auto text-right">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-2 border-b-2 mt-[50px] rounded ">
                <div className="flex items-center justify-between mb-2 mt-2 ml-2 ">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#F79421] rounded-full"></div>
                    <span className="text-sm">Available</span>
                  </div>
                  <span className="text-sm mr-2 font-semibold">
                    0{tableStats.available}
                  </span>
                </div>
                <div className="flex border-t-2 items-center justify-between mb-2 ml-2 ">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#554295]  rounded-full"></div>
                    <span className="text-sm ">Reserved</span>
                  </div>
                  <span className="text-sm mr-2 font-semibold">
                    0{tableStats.reserved}
                  </span>
                </div>
                <div className="flex border-t-2 items-center justify-between ml-2  mb-2 ">
                  <div className="flex items-center gap-2 ">
                    <div className="w-4 h-4 bg-[#EE2D31]  rounded-full"></div>
                    <span className="text-sm">Occupied</span>
                  </div>
                  <span className="text-sm mr-2 font-semibold">
                    0{tableStats.occupied}
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "grid" && (
            <div>
              <h2 className="font-semibold text-lg mb-4">Grid</h2>
            </div>
          )}

          {activeTab === "clients" && (
            <div>
              <h2 className="font-semibold text-lg mb-4">Clients</h2>
            </div>
          )}

          {activeTab === "requests" && (
            <div>
              <h2 className="font-semibold text-lg mb-4">Requests</h2>
              <div className="space-y-3"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TabSidebar;
