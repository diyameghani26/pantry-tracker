
import React, { useState } from "react";

const AddItems = ({ onAdd, categories }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("kg");
  const [category, setCategory] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName || !quantity || !category || !expiryDate) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    const newItem = {
      name: itemName.trim(),
      quantity: parseFloat(quantity),
      unit,
      category: category.toLowerCase(),
      expiryDate,
    };

    // ✅ Update parent App.jsx state
    if (onAdd) onAdd(newItem);

    // ✅ Also update localStorage
    const existingItems = JSON.parse(localStorage.getItem("pantryItems")) || [];
    const updatedItems = [...existingItems, { ...newItem, id: Date.now() }];
    localStorage.setItem("pantryItems", JSON.stringify(updatedItems));

    setSuccessMsg("✅ Item added successfully!");
    setItemName("");
    setQuantity("");
    setUnit("kg");
    setCategory("");
    setExpiryDate("");

    setTimeout(() => setSuccessMsg(""), 2000);
  };

  return (
    <div className="flex justify-center items-center mt-18 sm:mt-10 px-4">
      <div className="bg-white shadow-lg rounded-xl p-5 sm:p-8 w-full max-w-lg md:h-[420px] md:mt-15 relative">
        <h1 className="text-xl sm:text-3xl font-bold text-center mb-2">Add New Item</h1>
        <p className="text-gray-600 text-center mb-5 text-sm sm:text-base">
          Fill details to add item to pantry
        </p>

        {/* Success Toast */}
        {successMsg && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 px-3 py-2 rounded-lg shadow-md text-xs sm:text-sm animate-fadeIn">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Item Name</label>
            <input
              type="text"
              placeholder="e.g. Rice, Sugar"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
          </div>

          {/* Quantity + Unit + Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Quantity + Unit */}
            <div>
              <label className="block text-sm font-medium mb-1">Quantity</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-2/3 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                />
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="w-1/3 border rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                >
                  <option value="kg">kg</option>
                  <option value="g">g</option>
                  <option value="L">L</option>
                  <option value="ml">ml</option>
                  <option value="pcs">pcs</option>
                  <option value="packet">pac</option>
                </select>
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
              >
                <option value="">Select</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name.toLowerCase()}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Expiry Date</label>
            <input
              type="date"
              value={expiryDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-between mt-4">
            <button
              type="button"
              onClick={() => {
                setItemName("");
                setQuantity("");
                setUnit("kg");
                setCategory("");
                setExpiryDate("");
              }}
              className="px-4 py-2 md:mt-3 rounded-md bg-gray-200 hover:bg-gray-300 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 md:mt-3 rounded-md bg-green-600 text-white hover:bg-green-700 text-sm"
            >
              Save Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
