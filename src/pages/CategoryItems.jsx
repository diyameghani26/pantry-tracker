
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { X } from "lucide-react";

// const CategoryItems = ({ items }) => {  // ✅ items prop from App.jsx
//   const { categoryName } = useParams();
//   const [search, setSearch] = useState("");
//   const [filteredItems, setFilteredItems] = useState([]);

//   // Filter items by category and search
//   useEffect(() => {
//     const categoryFiltered = items.filter(
//       (item) => item.category.toLowerCase() === categoryName.toLowerCase()
//     );

//     const finalFiltered = search.trim()
//       ? categoryFiltered.filter((item) =>
//           item.name.toLowerCase().includes(search.toLowerCase())
//         )
//       : categoryFiltered;

//     setFilteredItems(finalFiltered);
//   }, [items, categoryName, search]);

//   return (
//     <div className="p-4 md:p-6 max-w-2xl mx-auto">
//       <h1 className="text-2xl md:text-5xl font-bold mb-9 text-center capitalize">
//         {categoryName} Items
//       </h1>

//       {/* Search Bar */}
//       <div className="flex justify-center mb-10 relative w-full max-w-xs mx-auto">
//         <input
//           type="text"
//           placeholder="Search items..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full border border-gray-900 rounded-xl pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-[#c5b396]"
//         />
//         {search && (
//           <button
//             onClick={() => setSearch("")}
//             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 hover:text-black"
//           >
//             <X size={19} />
//           </button>
//         )}
//       </div>

//       {filteredItems.length > 0 ? (
//         <ul className="space-y-3">
//           {filteredItems.map((item) => (
//             <li
//               key={item.id}
//               className="border transition-transform duration-300 transform hover:scale-105 active:scale-95 bg-white p-3 rounded-lg flex justify-between items-center shadow-sm hover:shadow-md"
//             >
//               <span className="text-gray-800 font-medium">{item.name}</span>
//               <span className="text-sm md:text-lg text-gray-600">
//                 Qty: {item.quantity} {item.unit || ""}
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



// src/pages/CategoryItems.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { X } from "lucide-react";

const CategoryItems = ({ items }) => {
  const { categoryName } = useParams();
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // ✅ Filter items by category + search
  useEffect(() => {
    const categoryFiltered = items.filter(
      (item) => item.category.toLowerCase() === categoryName.toLowerCase()
    );

    const finalFiltered = search.trim()
      ? categoryFiltered.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      : categoryFiltered;

    setFilteredItems(finalFiltered);
  }, [items, categoryName, search]);

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl md:text-5xl font-bold mb-9 text-center capitalize">
        {categoryName} Items
      </h1>

      {/* 🔎 Search Bar */}
      <div className="flex justify-center mb-10 relative w-full max-w-xs mx-auto">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-900 rounded-xl pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-[#c5b396] transition"
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

      {/* 📋 Item List */}
      {filteredItems.length > 0 ? (
        <ul className="space-y-3">
          {filteredItems.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`}>
              <li className="border transition-transform duration-200 transform hover:scale-105 active:scale-95 bg-white mb-3 p-3 rounded-lg flex justify-between items-center shadow-sm hover:shadow-md cursor-pointer">
                <span className="text-gray-800 font-medium">{item.name}</span>
                <span className="text-sm md:text-lg text-gray-600">
                  Qty: {item.quantity} {item.unit || ""}
                </span>
              </li>
            </Link>
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

