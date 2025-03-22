import React from "react";
import TableComponent from "./TableComponent";

const TableGrid = ({ tables, selectedTable, onTableClick }) => {
  return (
    <div className="grid grid-cols-6 gap-12 p-6 bg-gray-50 rounded-lg mb-8">
      {tables.map((table) => (
        <TableComponent
          key={table.id}
          table={table}
          isSelected={selectedTable && selectedTable.id === table.id}
          onTableClick={onTableClick}
        />
      ))}
    </div>
  );
};

export default TableGrid;
