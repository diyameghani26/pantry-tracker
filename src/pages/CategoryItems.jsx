
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
// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { X } from "lucide-react";

// const CategoryItems = ({ items }) => {
//   const { categoryName } = useParams();
//   const [search, setSearch] = useState("");
//   const [filteredItems, setFilteredItems] = useState([]);

//   // ✅ Filter items by category + search
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

//       {/* 🔎 Search Bar */}
//       <div className="flex justify-center mb-10 relative w-full max-w-xs mx-auto">
//         <input
//           type="text"
//           placeholder="Search items..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full border border-gray-900 rounded-xl pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-[#c5b396] transition"
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

//       {/* 📋 Item List */}
//       {filteredItems.length > 0 ? (
//         <ul className="space-y-3">
//           {filteredItems.map((item) => (
//             <Link key={item.id} to={`/item/${item.id}`}>
//               <li className="border transition-transform duration-200 transform hover:scale-105 active:scale-95 bg-white mb-3 p-3 rounded-lg flex justify-between items-center shadow-sm hover:shadow-md cursor-pointer">
//                 <span className="text-gray-800 font-medium">{item.name}</span>
//                 <span className="text-sm md:text-lg text-gray-600">
//                   Qty: {item.quantity} {item.unit || ""}
//                 </span>
//               </li>
//             </Link>
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
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import 'remixicon/fonts/remixicon.css';

const CategoryItems = ({ items = [], onUpdateItem, onDeleteItem }) => {
  const { categoryName } = useParams();
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [editMode, setEditMode] = useState(null); // ✅ track which item is in edit mode
  const [updatedItem, setUpdatedItem] = useState({});

  useEffect(() => {
    if (!Array.isArray(items)) return;
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
        className="w-full shadow-md bg-white rounded-xl pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-[#c5b396] transition"
      />
      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 hover:text-black"
        >
          ✕
        </button>
      )}
    </div>

    {/* Items List */}
    {filteredItems.length > 0 ? (
      <ul className="space-y-4">
        {filteredItems.map((item) => (
          <li
            key={item.id}
            className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {editMode === item.id ? (
              <div className="space-y-3">
                {/* Edit Mode Fields */}
                <input
                  type="text"
                  value={updatedItem.name}
                  onChange={(e) =>
                    setUpdatedItem({ ...updatedItem, name: e.target.value })
                  }
                  className="w-full border p-2 rounded-lg"
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
                  className="w-full border p-2 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Unit (kg, g, pcs)"
                  value={updatedItem.unit || ""}
                  onChange={(e) =>
                    setUpdatedItem({ ...updatedItem, unit: e.target.value })
                  }
                  className="w-full border p-2 rounded-lg"
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
                  className="w-full border p-2 rounded-lg"
                />

                {/* Save / Cancel */}
                <div className="flex gap-39 justify-end">
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(null)}
                    className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                {/* Left Section: Item Name & Quantity */}
                <div className="space-y-1">
                  <p className="text-2xl font-bold">{item.name}</p>
                  <p className="inline-block text-lg   px-2 py-1 rounded-md">
                    Qty: {item.quantity} {item.unit || ""}
                  </p>
                  {item.expiryDate && (
                    <p className="text-lg text-gray-500">
                      Expiry: {item.expiryDate}
                    </p>
                  )}
                </div>

                {/* Right Section: Buttons */}
                <div className="flex flex-row  gap-2 mt-3 sm:mt-0 mb-0 justify-end">
                  <button
                    onClick={() => {
                      setEditMode(item.id);
                      setUpdatedItem(item);
                    }}
                    className="  hover:text-white px-3 py-1.5 rounded-lg text-sm hover:bg-green-600 transition"
                  >
                    <i class="ri-pencil-fill"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className=" hover:text-white px-3 py-1.5 rounded-lg text-sm hover:bg-red-600 transition"
                  >
                    <i class="ri-delete-bin-6-fill"></i>
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-center text-gray-500 mt-6">
        {search
          ? "No items match your search 😢"
          : "No items in this category yet."}
      </p>
    )}
  </div>
);
};

export default CategoryItems;





