import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";

const CategoryItems = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // Load items from localStorage
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("pantryItems")) || [];
    setItems(savedItems);
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
      <h1 className="text-xl md:text-3xl font-bold mb-4 text-center capitalize">
        {categoryName} Items
      </h1>

      <div className="flex justify-center mb-4">
        <SearchBar
          value={search}
          onChange={setSearch}
          onClear={() => setSearch("")}
        />
      </div>

      {filteredItems.length > 0 ? (
        <ul className="space-y-3">
          {filteredItems.map((item) => (
            <li
              key={item.id}
              className="border p-3 rounded-lg flex justify-between items-center shadow-sm hover:shadow-md transition"
            >
              <span className="text-gray-800 font-medium">{item.name}</span>
              <span className="text-sm md:text-lg text-gray-600">
                Qty: {item.quantity}  {item.unit || ""}
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

