import React from "react";

const BookedTablesList = ({ bookedTables }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Booked Tables</h2>
      {bookedTables.length > 0 ? (
        <div className="space-y-2">
          {bookedTables.map((table) => (
            <div
              key={table.id}
              className="p-3 bg-gray-100 rounded flex justify-between items-center"
            >
              <div>
                <span className="font-medium">Table {table.id}</span> (
                {table.capacity} seats)
              </div>
              <div className="px-2 py-1 bg-[#F79421] text-white text-xs rounded">
                Booked
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No tables booked yet.</p>
      )}
    </div>
  );
};

export default BookedTablesList;
