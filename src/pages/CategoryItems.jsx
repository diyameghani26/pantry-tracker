

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "remixicon/fonts/remixicon.css";

const CategoryItems = ({ items = [], onUpdateItem, onDeleteItem }) => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [updatedItem, setUpdatedItem] = useState({});

  useEffect(() => {
    if (!Array.isArray(items)) return;

    const categoryFiltered = items.filter(
      (item) =>
        item.category.toLowerCase() === categoryName.toLowerCase()
    );

    const finalFiltered = search.trim()
      ? categoryFiltered.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      : categoryFiltered;

    setFilteredItems(finalFiltered);
  }, [items, categoryName, search]);

  const handleSave = () => {
    onUpdateItem(updatedItem);
    toast.success("Item updated successfully!");
    setEditMode(null);
  };

  const handleDelete = (id) => {
    onDeleteItem(id);
    toast.error("Item deleted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7fdf9] to-green-50 px-4 py-6">

      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-6">
        <h1 className="text-2xl sm:text-4xl font-bold capitalize text-green-700">
          {categoryName} Items
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage and track your pantry items
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-6 relative">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white shadow-md rounded-full pl-10 pr-10 py-3 text-sm outline-none focus:ring-2 focus:ring-green-400 transition"
        />
        <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
          >
            ✕
          </button>
        )}
      </div>

      {/* Items */}
      <div className="max-w-2xl mx-auto space-y-4">
        {filteredItems.length > 0 &&
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
            >
              {editMode === item.id ? (
                <div className="space-y-3">

                  <input
                    type="text"
                    value={updatedItem.name}
                    onChange={(e) =>
                      setUpdatedItem({ ...updatedItem, name: e.target.value })
                    }
                    className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                  />

                  <input
                    type="number"
                    value={updatedItem.quantity}
                    onChange={(e) =>
                      setUpdatedItem({
                        ...updatedItem,
                        quantity: Number(e.target.value),
                      })
                    }
                    className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                  />

                  <input
                    type="text"
                    value={updatedItem.unit || ""}
                    onChange={(e) =>
                      setUpdatedItem({ ...updatedItem, unit: e.target.value })
                    }
                    className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                  />

                  <input
                    type="date"
                    value={updatedItem.expiryDate || ""}
                    onChange={(e) =>
                      setUpdatedItem({
                        ...updatedItem,
                        expiryDate: e.target.value,
                      })
                    }
                    className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                  />

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      onClick={handleSave}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditMode(null)}
                      className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center">

                  {/* Left */}
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-gray-800">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity} {item.unit}
                    </p>

                    {item.expiryDate && (
                      <p className="text-xs text-gray-400">
                        Expiry: {item.expiryDate}
                      </p>
                    )}
                  </div>

                  {/* Right Icons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditMode(item.id);
                        setUpdatedItem(item);
                      }}
                      className="p-2 rounded-lg hover:bg-green-100 hover:text-green-600 transition"
                    >
                      <i className="ri-pencil-fill"></i>
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 rounded-lg hover:bg-red-100 hover:text-red-600 transition"
                    >
                      <i className="ri-delete-bin-6-fill"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

        {/* 🔥 ADD ITEM CARD */}
        <div
          onClick={() => navigate("/additems")}
          className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-green-400 hover:bg-green-50 transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl mb-2">
            <i className="ri-add-line"></i>
          </div>

          <p className="text-sm text-gray-600 font-medium">
            Add New Item
          </p>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center text-gray-500 mt-6">
            <p>
              {search
                ? "No items match your search 😢"
                : "No items in this category yet"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryItems;









