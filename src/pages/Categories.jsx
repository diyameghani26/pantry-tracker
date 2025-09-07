


import React, { useState } from "react";
import { items, categories } from "../data";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const categories = ({ search }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Low Stock", "Expiring Soon"];

  // ✅ Helper Arrays
  const lowStockCategories = items
    .filter((item) => item.quantity < item.minQty)
    .map((item) => item.category);

  const today = new Date();
  const expiringCategories = items
    .filter((item) => {
      if (!item.expiryDate) return false;
      const expiry = new Date(item.expiryDate);
      const diffDays = (expiry - today) / (1000 * 60 * 60 * 24);
      return diffDays >= 0 && diffDays <= 7;
    })
    .map((item) => item.category);

  // ✅ Apply Filters + Search
  const getFilteredCategories = () => {
    let filtered = [...categories];

    if (selectedFilter === "Low Stock") {
      filtered = filtered.filter((cat) => lowStockCategories.includes(cat.name));
    }

    if (selectedFilter === "Expiring Soon") {
      filtered = filtered.filter((cat) => expiringCategories.includes(cat.name));
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
      {/* ✅ Header + Filter */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <h1 className="text-xl font-bold md:text-4xl md:p-3">My Pantry</h1>

        {/* ✅ Filter Dropdown */}
        <div className="relative w-48">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="appearance-none border rounded-full w-full pl-4 pr-10 py-2 bg-white shadow-sm cursor-pointer focus:outline-none"
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

      {/* ✅ Filtered Category List */}
      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {filteredCategories.map((cat) => {
            const isLowStock = lowStockCategories.includes(cat.name);
            const isExpiring = expiringCategories.includes(cat.name);

            return (
              <Link
                key={cat.id}
                to={`/category/${cat.name}`}
                className="relative border rounded-xl p-4 flex flex-col items-center shadow-md cursor-pointer transition md:h-40 md:w-96 bg-white hover:bg-[#e7d7ba] active:bg-[#e7d7ba]"
              >
                {/* ✅ Badge */}
                {(isLowStock || isExpiring) && (
                  <span
                    className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full text-white 
                      ${
                        isLowStock
                          ? "bg-red-500 animate-pulse"
                          : "bg-yellow-400 text-black font-semibold animate-bounce"
                      }`}
                  >
                    {isLowStock ? "Low Stock" : "Expiring Soon"}
                  </span>
                )}
                <span className="text-3xl md:text-5xl md:mt-3">{cat.icon}</span>
                <p className="text-lg font-semibold mt-2">{cat.name}</p>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-800 text-center">
          No categories match your search or filter.
        </p>
      )}
    </div>
  );
};

export default categories;






