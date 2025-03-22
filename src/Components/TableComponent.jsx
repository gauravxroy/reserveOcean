import React from "react";

const TableComponent = ({ table, onTableClick }) => {
  // Determine table size and shape based on capacity
  const getTableStyle = (capacity) => {
    // 4 seats tables are now always round
    if (capacity === 4) {
      return {
        className: "w-24 h-24 rounded-full",
        gridSpan: 1,
      };
    }

    // Other tables based on capacity
    switch (capacity) {
      case 2:
        return {
          className: "w-16 h-16 rounded-md",
          gridSpan: 1,
        };
      case 6:
        return {
          className: "w-32 h-24 rounded-md",
          gridSpan: 2,
        };
      case 8:
        return {
          className: "w-40 h-24 rounded-md",
          gridSpan: 3,
        };
      default:
        return {
          className: "w-24 h-24 rounded-md",
          gridSpan: 1,
        };
    }
  };

  // Get table styling based on capacity
  const tableStyle = getTableStyle(table.capacity);
  const sizeClass = tableStyle.className;
  const gridSpan = tableStyle.gridSpan;

  // Status styling
  const bgColor = table.available ? "bg-[#F79421]" : "bg-[#EE2D31]";

  // Render different seat indicators based on capacity
  const renderSeatIndicators = (capacity) => {
    if (capacity === 4) {
      // Round table with 4 seat
      return (
        <>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gray-300 rounded"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gray-300 rounded"></div>
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-gray-300 rounded"></div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-gray-300 rounded"></div>
        </>
      );
    } else if (capacity === 2) {
      // Small table with 2 seats
      return (
        <>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gray-300 rounded"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gray-300 rounded"></div>
        </>
      );
    } else if (capacity === 6) {
      // Medium rectangular table with 6 seats
      return (
        <>
          <div className="absolute -top-4 left-1/4 transform -translate-x-1/2 w-4 h-2 bg-gray-300 rounded"></div>
          <div className="absolute -top-4 left-3/4 transform -translate-x-1/2 w-4 h-2 bg-gray-300 rounded"></div>
          <div className="absolute -bottom-4 left-1/4 transform -translate-x-1/2 w-4 h-2 bg-gray-300 rounded"></div>
          <div className="absolute -bottom-4 left-3/4 transform -translate-x-1/2 w-4 h-2 bg-gray-300 rounded"></div>
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-gray-300 rounded"></div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-gray-300 rounded"></div>
        </>
      );
    } else if (capacity === 8) {
      // Large rectangular table with 8 seats
      return (
        <>
          <div className="absolute -top-4 left-1/6 transform -translate-x-1/2 w-4 h-2  bg-gray-300 rounded"></div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gray-300 rounded"></div>
          <div className="absolute -top-4 left-5/6 transform -translate-x-1/2 w-4 h-2 bg-gray-300 rounded"></div>
          <div className="absolute -bottom-4 left-1/6 transform -translate-x-1/2 w-4 h-2 bg-gray-300 rounded"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gray-300 rounded"></div>
          <div className="absolute -bottom-4 left-5/6 transform -translate-x-1/2 w-4 h-2 bg-gray-300 rounded"></div>
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-gray-300 rounded"></div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-gray-300 rounded"></div>
        </>
      );
    } else {
      // Default seat indicators for other table sizes
      return (
        <>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-300 rounded"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-300 rounded"></div>
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gray-300 rounded"></div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gray-300 rounded"></div>
        </>
      );
    }
  };

  return (
    <div
      className={`${sizeClass} relative  ${bgColor}  flex items-center justify-center text-center font-medium text-white cursor-pointer m-6`}
      style={{
        gridRow: table.position[0],
        gridColumn: `span ${gridSpan} / span ${gridSpan}`,
        gridColumnStart: table.position[1],
      }}
      onClick={() => onTableClick(table)}
    >
      <div>
        {table.id}
        <div className="text-xs mt-1">{table.capacity} seats</div>
      </div>

      {/* Seat indicators  */}
      {renderSeatIndicators(table.capacity)}
    </div>
  );
};

export default TableComponent;
