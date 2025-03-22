import React from "react";
import ReservationForm from "./ReservationForm";

const ReservationModal = ({
  isOpen,
  selectedTable,
  formData,
  onFormChange,
  onSubmit,
  onClose,
}) => {
  if (!isOpen || !selectedTable) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Reserve Table {selectedTable.id}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <ReservationForm
          formData={formData}
          selectedTable={selectedTable}
          onFormChange={onFormChange}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default ReservationModal;
