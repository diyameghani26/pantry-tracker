// import React, { useState } from "react";
// import { categories } from "../data.js";
// import { Link } from "react-router-dom";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";

// const Categories = ({ search, items }) => {
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const filters = ["All", "Low Stock", "Expiring Soon"];

//   // ✅ Normalize items
//   const normalizedItems = items.map((item) => ({
//     ...item,
//     category: item.category?.toLowerCase() || "",
//   }));

//   const today = new Date();

//   // ✅ Category condition checkers
//   const isLowStockCategory = (catNameLower) =>
//     normalizedItems.some(
//       (item) =>
//         item.category === catNameLower && item.quantity < (item.minQty || 1)
//     );

//   const isExpiringCategory = (catNameLower) =>
//     normalizedItems.some((item) => {
//       if (item.category !== catNameLower || !item.expiryDate) return false;
//       const expiry = new Date(item.expiryDate);
//       const diffDays = (expiry - today) / (1000 * 60 * 60 * 24);
//       return diffDays >= 0 && diffDays <= 7;
//     });

//   // ✅ Filtering logic
//   const getFilteredCategories = () => {
//     let filtered = [...categories];

//     // 🔍 Apply search FIRST (strict match)
//     if (search.trim()) {
//       filtered = filtered.filter((cat) =>
//         cat.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     // 🎯 Apply filter AFTER search
//     if (selectedFilter === "Low Stock") {
//       filtered = filtered.filter((cat) =>
//         isLowStockCategory(cat.name.toLowerCase())
//       );
//     } else if (selectedFilter === "Expiring Soon") {
//       filtered = filtered.filter((cat) =>
//         isExpiringCategory(cat.name.toLowerCase())
//       );
//     }

//     return filtered;
//   };

//   const filteredCategories = getFilteredCategories();

//   return (
//     <div className="p-4 md:p-8">
//       {/* Header + Filter */}
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
//         <h1 className="text-xl md:text-4xl font-bold">My Pantry</h1>

//         <div className="relative w-48">
//           <select
//             value={selectedFilter}
//             onChange={(e) => setSelectedFilter(e.target.value)}
//             className="appearance-none border rounded-full w-full pl-4 pr-10 py-4 bg-white shadow-md cursor-pointer hover:scale-105 focus:outline-none"
//           >
//             {filters.map((f) => (
//               <option key={f} value={f}>
//                 {f}
//               </option>
//             ))}
//           </select>
//           <ChevronDownIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
//         </div>
//       </div>

//       {/* Category Grid */}
//       {filteredCategories.length > 0 ? (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {filteredCategories.map((cat) => {
//             const catNameLower = cat.name.toLowerCase();

//             const itemsInCategory = normalizedItems.filter(
//               (item) => item.category === catNameLower
//             );
//             const itemCount = itemsInCategory.length;
//             const isLowStock = isLowStockCategory(catNameLower);
//             const isExpiring = isExpiringCategory(catNameLower);

//             return (
//               <Link
//                 key={cat.id}
//                 to={`/category/${cat.name}`}
//                 className={`relative rounded-xl p-2 md:p-4 flex flex-col items-center justify-center shadow-md cursor-pointer transition hover:shadow-lg hover:scale-105 bg-white`}
//               >
//                 {/* Badge */}
//                 {(isLowStock || isExpiring) && (
//                   <span
//                     className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full
//                       ${
//                         isLowStock
//                           ? "bg-yellow-400 text-black font-bold animate-pulse"
//                           : "bg-red-500 text-white font-semibold animate-bounce"
//                       }`}
//                   >
//                     {isLowStock ? "Low Stock" : "Expiring Soon"}
//                   </span>
//                 )}

//                 {/* Image */}
//                 <img
//                   src={cat.icon}
//                   alt={cat.name}
//                   className="w-40 h-20 md:h-40 md:w-96 rounded object-cover"
//                 />

//                 {/* Name + Item Count */}
//                 <p className="w-full flex justify-between items-center md:text-2xl font-semibold mt-1">
//                   <span>{cat.name}</span>
//                   <span className="text-black text-lg">({itemCount})</span>
//                 </p>
//               </Link>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="text-gray-800 text-center mt-4">
//           No categories match your search or filter.
//         </p>
//       )}
//     </div>
//   );
// };

// export default Categories;

import React, { useState } from "react";
import { categories } from "../data.js";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Categories = ({ search, items }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "Low Stock", "Expiring Soon"];

  // ✅ Normalize items for consistent comparisons
  const normalizedItems = items.map((item) => ({
    ...item,
    category: item.category?.toLowerCase() || "",
  }));

  const today = new Date();

  // ✅ Helper functions
  const isLowStockCategory = (catNameLower) =>
    normalizedItems.some(
      (item) =>
        item.category === catNameLower && item.quantity < (item.minQty || 1)
    );

  const isExpiringCategory = (catNameLower) =>
    normalizedItems.some((item) => {
      if (item.category !== catNameLower || !item.expiryDate) return false;
      const expiry = new Date(item.expiryDate);
      const diffDays = (expiry - today) / (1000 * 60 * 60 * 24);
      return diffDays >= 0 && diffDays <= 7;
    });

  // ✅ Main filtering logic
const getFilteredCategories = () => {
  let filtered = [...categories];

  // 🔍 Search by category name ONLY
  if (search.trim()) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter((cat) =>
      cat.name.toLowerCase().includes(searchLower)
    );
  }

  // 🎯 Apply filter AFTER search
  if (selectedFilter === "Low Stock") {
    filtered = filtered.filter((cat) =>
      isLowStockCategory(cat.name.toLowerCase())
    );
  } else if (selectedFilter === "Expiring Soon") {
    filtered = filtered.filter((cat) =>
      isExpiringCategory(cat.name.toLowerCase())
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
            className="appearance-none border rounded-full w-full pl-4 pr-10 py-4 bg-white shadow-md cursor-pointer hover:scale-105 focus:outline-none"
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

      {/* Category Grid */}
      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredCategories.map((cat) => {
            const catNameLower = cat.name.toLowerCase();

            const itemsInCategory = normalizedItems.filter(
              (item) => item.category === catNameLower
            );
            const itemCount = itemsInCategory.length;
            const isLowStock = isLowStockCategory(catNameLower);
            const isExpiring = isExpiringCategory(catNameLower);

            return (
              <Link
                key={cat.id}
                to={`/category/${cat.name}`}
                className={`relative rounded-xl p-2 md:p-4 flex flex-col items-center justify-center shadow-md cursor-pointer transition hover:shadow-lg hover:scale-105 bg-white`}
              >
                {/* Badge */}
                {(isLowStock || isExpiring) && (
                  <span
                    className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full
                      ${
                        isLowStock
                          ? "bg-yellow-400 text-black font-bold animate-pulse"
                          : "bg-red-500 text-white font-semibold animate-bounce"
                      }`}
                  >
                    {isLowStock ? "Low Stock" : "Expiring Soon"}
                  </span>
                )}

                {/* Image */}
                <img
                  src={cat.icon}
                  alt={cat.name}
                  className="w-40 h-20 md:h-40 md:w-96 rounded object-cover"
                />

                {/* Name + Item Count */}
                <p className="w-full flex justify-between items-center md:text-2xl font-semibold mt-1">
                  <span>{cat.name}</span>
                  <span className="text-black text-lg">({itemCount})</span>
                </p>
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
















