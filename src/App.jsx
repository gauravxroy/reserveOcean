import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/SideBar";
import TableLayout from "./Components/TableLayout";
import { useState } from "react";
import { useTableReservation } from "./Components/useTableReservation";
import Features from "./Components/Features";

function App() {
  const { formData } = useTableReservation();
  const [selectedTable, setSelectedTable] = useState(null);
  const [tableStats] = useState({
    total: 12,
    available: 6,
    occupied: 4,
    reserved: 2,
  });

  // Handler functions to pass to components
  const handleTableSelect = (table) => {
    setSelectedTable(table);
  };

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      {/* Header spans full width at the top */}
      <Header />

      {/* Main content area below header */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar on the left */}
        <Sidebar
          selectedTable={selectedTable}
          tableStats={tableStats}
          formData={formData}
        />

        {/* Right side content area */}
        <div className="flex flex-col flex-1">
          {/* Features section appears right after the header, starts from sidebar width */}
          <Features />

          {/* Table layout below features */}
          <div className="flex-1 overflow-auto p-6 bg-gray-50">
            <TableLayout
              onTableClick={handleTableSelect}
              selectedTableId={selectedTable?.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
