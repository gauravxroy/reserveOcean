import React from "react";
import TableGrid from "./TableGrid.jsx";
import ReservationModal from "./ReservationaModal.jsx";
import { useTableReservation } from "./useTableReservation.jsx";

const TableLayout = () => {
  const {
    tables,
    selectedTable,
    isModalOpen,
    formData,
    handleTableClick,
    handleFormChange,
    handleSubmit,
    closeModal,
  } = useTableReservation();

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Table layout grid */}
      <TableGrid
        tables={tables}
        selectedTable={selectedTable}
        onTableClick={handleTableClick}
      />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        selectedTable={selectedTable}
        formData={formData}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
        onClose={closeModal}
      />
    </div>
  );
};

export default TableLayout;
