import React from "react";

const ReservationForm = ({
  formData,
  selectedTable,
  onFormChange,
  onSubmit,
  onClose,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onFormChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onFormChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={onFormChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={onFormChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Number of Guests
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={onFormChange}
            className="w-full p-2 border rounded"
          >
            {[...Array(selectedTable.capacity)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Reserve
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
