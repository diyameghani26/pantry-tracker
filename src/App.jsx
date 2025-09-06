import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // ✅ "components" folder name small
import Home from "./pages/Home";
import Categories from "./pages/categories"; // ✅ file ka naam bhi capital rakho
import AddItems from "./pages/AddItems";
import About from "./pages/About";
import CategoryItems from "./pages/CategoryItems";

const App = () => {
  const [search, setSearch] = useState(""); // ✅ Global search state

  return (
    <div className="w-screen h-screen overflow-y-auto text-black bg-[#e7d7ba]">
      {/* ✅ Navbar me search state pass ho rahi hai */}
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories search={search} />} />
        <Route path="/additems" element={<AddItems />} />
        {/* ✅ Category-wise items show karne ke liye dynamic route */}
        <Route path="/category/:categoryName" element={<CategoryItems />} />
      </Routes>
    </div>
  );
};

export default App;




