
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
import AddItems from "./pages/AddItems";
import About from "./pages/About";
import CategoryItems from "./pages/CategoryItems";
import { categories } from "./data.js";

const App = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("pantryItems")) || [];
    setItems(storedItems);
    setLoaded(true);
  }, []);

  // Save to localStorage (only after first load)
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("pantryItems", JSON.stringify(items));
    }
  }, [items, loaded]);

  const handleAddItem = (newItem) => {
    const itemWithId = { ...newItem, id: Date.now() };
    setItems((prev) => [...prev, itemWithId]);
  };

  const handleUpdateItem = (updatedItem) => {
    setItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const handleDeleteItem = (itemId) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };


  return (
    <div className="min-h-screen w-full text-black bg-gradient-to-b from-[#f5efe6] to-[#efe6d8]">
      <Navbar search={search} setSearch={setSearch} />
      <Toaster position="top-center" />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/categories"
          element={<Categories search={search} items={items} categories={categories} />}
        />
        <Route
          path="/additems"
          element={<AddItems onAdd={handleAddItem} categories={categories} />}
        />
        <Route
          path="/category/:categoryName"
          element={
            <CategoryItems
              items={items}
              onUpdateItem={handleUpdateItem}
              onDeleteItem={handleDeleteItem}
            />
          }
        />
        {/* ❌ ItemDetails ka route completely remove kar diya */}
      </Routes>
    </div>
  );
};

export default App;










