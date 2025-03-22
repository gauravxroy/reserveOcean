import { useState } from "react";

export const useTableReservation = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Table data
  const [tables, setTables] = useState([
    {
      id: "T1",
      capacity: 4,
      shape: "medium",
      position: [1, 1],
      available: true,
    },
    {
      id: "T2",
      capacity: 4,
      shape: "medium",
      position: [2, 3],
      available: false,
    },
    {
      id: "T3",
      capacity: 4,
      shape: "medium",
      position: [2, 1],
      available: false,
    },
    {
      id: "T4",
      capacity: 6,
      shape: "round",
      position: [1, 3],
      available: true,
    },
    {
      id: "T5",
      capacity: 2,
      shape: "small",
      position: [1, 5],
      available: true,
    },
    {
      id: "T6",
      capacity: 6,
      shape: "large",
      position: [3, 1],
      available: true,
    },
    {
      id: "T7",
      capacity: 4,
      shape: "medium",
      position: [2, 5],
      available: true,
    },
    {
      id: "T8",
      capacity: 2,
      shape: "small",
      position: [3, 5],
      available: false,
    },
    {
      id: "T9",
      capacity: 4,
      shape: "medium",
      position: [4, 5],
      available: true,
    },
    {
      id: "T10",
      capacity: 4,
      shape: "medium",
      position: [4, 3],
      available: true,
    },
    {
      id: "T11",
      capacity: 8,
      shape: "large",
      position: [4, 1],
      available: false,
    },
    {
      id: "T12",
      capacity: 6,
      shape: "large",
      position: [3, 3],
      available: true,
    },
    {
      id: "T13",
      capacity: 6,
      shape: "large",
      position: [5, 1],
      available: true,
    },
    {
      id: "T14",
      capacity: 4,
      shape: "medium",
      position: [5, 3],
      available: false,
    },
    {
      id: "T15",
      capacity: 2,
      shape: "small",
      position: [5, 5],
      available: true,
    },
    {
      id: "T16",
      capacity: 8,
      shape: "large",
      position: [6, 1],
      available: false,
    },
    {
      id: "T17",
      capacity: 6,
      shape: "large",
      position: [6, 3],
      available: true,
    },
    {
      id: "T18",
      capacity: 4,
      shape: "medium",
      position: [6, 5],
      available: false,
    },
    {
      id: "T19",
      capacity: 2,
      shape: "small",
      position: [7, 1],
      available: true,
    },
    {
      id: "T20",
      capacity: 4,
      shape: "medium",
      position: [7, 3],
      available: true,
    },
  ]);

  // Form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  // Handle table click
  const handleTableClick = (table) => {
    setSelectedTable(table);
    if (table.available) {
      setIsModalOpen(true);
    }
  };

  // Handle form change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle reservation submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the selected table's availability
    setTables((prev) =>
      prev.map((table) =>
        table.id === selectedTable.id ? { ...table, available: false } : table
      )
    );
    console.log(formData);
    // Close modal and reset form
    setIsModalOpen(false);
    setSelectedTable(null);
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
    });
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTable(null);
  };

  return {
    tables,
    selectedTable,
    isModalOpen,
    formData,
    bookedTables: tables.filter((table) => !table.available),
    handleTableClick,
    handleFormChange,
    handleSubmit,
    closeModal,
  };
};
