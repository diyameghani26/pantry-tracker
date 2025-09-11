import React, { useState } from "react";
import { categories } from "../data.js"; // ✅ hard-coded categories with image paths
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Categories = ({ search, items }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "Low Stock", "Expiring Soon"];

  // Low stock helper
  const lowStockCategories = items
    .filter((item) => item.quantity < (item.minQty || 1))
    .map((item) => item.category.toLowerCase());

  // Expiring soon helper
  const today = new Date();
  const expiringCategories = items
    .filter((item) => {
      if (!item.expiryDate) return false;
      const expiry = new Date(item.expiryDate);
      const diffDays = (expiry - today) / (1000 * 60 * 60 * 24);
      return diffDays >= 0 && diffDays <= 7;
    })
    .map((item) => item.category.toLowerCase());

  // Filter + Search logic
  const getFilteredCategories = () => {
    let filtered = [...categories];

    if (selectedFilter === "Low Stock") {
      filtered = filtered.filter((cat) =>
        lowStockCategories.includes(cat.name.toLowerCase())
      );
    }

    if (selectedFilter === "Expiring Soon") {
      filtered = filtered.filter((cat) =>
        expiringCategories.includes(cat.name.toLowerCase())
      );
    }

    if (search.trim() !== "") {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredCategories = getFilteredCategories();

  return (
    <div className="p-4 md:p-8">
      {/* Header + Filter */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-xl md:text-4xl font-bold">My Pantry</h1>

        <div className="relative w-48">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="appearance-none border rounded-full w-full pl-4 pr-10 py-2 bg-white shadow-md cursor-pointer hover:scale-105 focus:outline-none"
          >
            {filters.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
        </div>
      </div>

      {/* Filtered Category Grid */}
      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredCategories.map((cat) => {
            const catNameLower = cat.name.toLowerCase();
            const isLowStock = lowStockCategories.includes(catNameLower);
            const isExpiring = expiringCategories.includes(catNameLower);

            return (
              <Link
                key={cat.id}
                to={`/category/${cat.name}`}
                className="relative rounded-xl p-4 flex flex-col items-center justify-center shadow-md cursor-pointer transition hover:shadow-lg hover:scale-105 bg-white active:bg-[#d5be93]"
              >
                {/* Badge */}
                {(isLowStock || isExpiring) && (
                  <span
                    className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full text-white 
                      ${isLowStock ? "bg-red-500 animate-pulse" : "bg-yellow-400 text-black font-semibold animate-bounce"}`}
                  >
                    {isLowStock ? "Low Stock" : "Expiring Soon"}
                  </span>
                )}

                {/* Image */}
                <img
                  src={cat.icon} // 🟢 public folder path
                  alt={cat.name}
                  className="w-40 h-20 md:h-40 md:w-96 rounded object-cover mb-1 "
                />

                {/* Name */}
                <p className="text-sm md:text-lg font-semibold text-center">{cat.name}</p>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-800 text-center mt-4">
          No categories match your search or filter.
        </p>
      )}
    </div>
  );
};

export default Categories;









