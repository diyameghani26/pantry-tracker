// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import SearchBar from "./SearchBar";

// const CategoryItems = () => {
//   const { categoryName } = useParams();

//   const [items, setItems] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filteredItems, setFilteredItems] = useState([]);

//   // Load items from localStorage
//   useEffect(() => {
//     const savedItems = JSON.parse(localStorage.getItem("pantryItems")) || [];
//     setItems(savedItems);
//   }, []);

//   // Filter on search or category change
//   useEffect(() => {
//     let categoryFiltered = items.filter(
//       (item) => item.category.toLowerCase() === categoryName.toLowerCase()
//     );

//     if (search.trim() !== "") {
//       categoryFiltered = categoryFiltered.filter((item) =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     setFilteredItems(categoryFiltered);
//   }, [items, categoryName, search]);

//   return (
//     <div className="p-4 md:p-6 max-w-2xl mx-auto">
//       <h1 className="text-xl md:text-3xl font-bold mb-4 text-center capitalize">
//         {categoryName} Items
//       </h1>

//       <div className="flex justify-center mb-4">
//         <SearchBar
//           value={search}
//           onChange={setSearch}
//           onClear={() => setSearch("")}
//         />
//       </div>

//       {filteredItems.length > 0 ? (
//         <ul className="space-y-3">
//           {filteredItems.map((item) => (
//             <li
//               key={item.id}
//               className="border p-3 rounded-lg flex justify-between items-center shadow-sm hover:shadow-md transition"
//             >
//               <span className="text-gray-800 font-medium">{item.name}</span>
//               <span className="text-sm md:text-lg text-gray-600">
//                 Qty: {item.quantity} 
//               </span>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-center text-gray-500 mt-6">
//           {search ? "No items match your search 😢" : "No items in this category."}
//         </p>
//       )}
//     </div>
//   );
// };

// export default CategoryItems;

import React, { useState, useEffect } from "react";
import { data, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { items as pantryItems } from "../data.js"; // ✅ CHANGE 1 - import from data.js

const CategoryItems = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // ✅ CHANGE 2 - Load directly from data.js
  useEffect(() => {
    setItems(pantryItems);
  }, []);

  // Filter on search or category change
  useEffect(() => {
    let categoryFiltered = items.filter(
      (item) => item.category.toLowerCase() === categoryName.toLowerCase()
    );

    if (search.trim() !== "") {
      categoryFiltered = categoryFiltered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredItems(categoryFiltered);
  }, [items, categoryName, search]);

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl md:text-5xl font-bold mb-9 text-center capitalize">
        {categoryName} Items
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-10 relative w-full max-w-xs mx-auto">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-900 rounded-xl pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-[#c5b396]"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 hover:text-black"
          >
            <X size={19} />
          </button>
        )}
      </div>

      {filteredItems.length > 0 ? (
        <ul className="space-y-3">
          {filteredItems.map((item) => (
            <li
              key={item.id}
              className="border transition-transform duration-300 transform hover:scale-105 active:scale-95 bg-white p-3 rounded-lg flex justify-between items-center shadow-sm hover:shadow-md "
            >
              <span className="text-gray-800 font-medium">{item.name}</span>
              {/* ✅ CHANGE 3 - quantity + unit show */}
              <span className="text-sm md:text-lg text-gray-600">
                Qty: {item.quantity} {item.unit || ""}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          {search ? "No items match your search 😢" : "No items in this category."}
        </p>
      )}
    </div>
  );
};

export default CategoryItems;



