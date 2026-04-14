


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItems = ({ onAdd, categories }) => {
  const navigate = useNavigate();

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

    if (onAdd) onAdd(newItem);

    const existingItems =
      JSON.parse(localStorage.getItem("pantryItems")) || [];

    const updatedItems = [
      ...existingItems,
      { ...newItem, id: Date.now() },
    ];

    localStorage.setItem("pantryItems", JSON.stringify(updatedItems));

    setSuccessMsg("Item added successfully!");

    setItemName("");
    setQuantity("");
    setUnit("kg");
    setCategory("");
    setExpiryDate("");

    setTimeout(() => setSuccessMsg(""), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#e8d8c3] to-green-50 flex">

      {/* LEFT SIDE (Desktop Only) */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center p-12">
        <div className="absolute w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-md ">
          <h1 className="text-4xl sm:text-6xl font-bold text-green-700 mb-4">
            Manage Your Pantry 🥦
          </h1>
          <p className="text-gray-600 text-lg sm:text-3xl">
            Add items, track expiry dates and keep your kitchen organized in a smart and efficient way.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-4 py-10 ">

        <div className="w-full h-10/12 -mt-30   max-w-md lg:max-w-lg rounded-2xl px-6 py-4 relative top-0 ">

          {/* Toast */}
          {successMsg && (
            <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 px-4 py-2 rounded-full shadow-md text-sm animate-slideDown z-50">
              ✅ {successMsg}
            </div>
          )}

          {/* Header */}
          <div className="text-center mb-10 mt-4 lg:mb-5">
            <h1 className="text-3xl lg:text-3xl sm:text-3xl font-bold text-green-700">
              Add New Item
            </h1>
            <p className="text-gray-500 lg:text-xl text-xl mt-3 lg:mt-5">
              Fill details to add item to pantry
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-7">

            {/* Item Name */}
            <input
              type="text"
              placeholder="Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="w-full border border-gray-500 rounded-xl px-4 py-6 text-sm focus:ring-2 focus:ring-green-400 outline-none"
            />

            {/* Quantity + Unit */}
            <div className="flex gap-3">
              <input
                type="number"
                min="0"
                step="0.1"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-2/3 border border-gray-500 rounded-xl px-4  p py-6 text-sm focus:ring-2 focus:ring-green-400 outline-none"
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-1/3 border border-gray-500 rounded-xl px-3 py-6 text-sm focus:ring-2 focus:ring-green-400 outline-none"
              >
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="L">L</option>
                <option value="ml">ml</option>
                <option value="pcs">pcs</option>
                <option value="packet">pac</option>
              </select>
            </div>

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-500 rounded-xl px-4 py-6 text-sm focus:ring-2 focus:ring-green-400 outline-none"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name.toLowerCase()}>
                  {cat.name}
                </option>
              ))}
            </select>

            {/* Expiry */}
            <input
              type="date"
              value={expiryDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full border border-gray-500 rounded-xl px-4 py-6 text-sm focus:ring-2 focus:ring-green-400 outline-none text-black"
            />

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-8">
              <button
                 onClick={() => navigate("/")}
                type="submit"
                className="w-full py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg transition-all duration-300 text-sm"
              >
                Save Item
              </button>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="w-full py-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;

