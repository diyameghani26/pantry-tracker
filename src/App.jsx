



// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar.jsx";
// import Home from "./pages/Home.jsx";
// import Categories from "./pages/Categories.jsx";
// import AddItems from "./pages/AddItems";
// import About from "./pages/About";
// import CategoryItems from "./pages/CategoryItems";
// import ItemDetails from "./pages/ItemDetails.jsx"; // ✅ NEW PAGE for edit/delete
// import { categories } from "./data.js";

// const App = () => {
//   const [search, setSearch] = useState("");
//   const [items, setItems] = useState([]);

//   // ✅ Load items from localStorage on mount
//   useEffect(() => {
//     const storedItems = JSON.parse(localStorage.getItem("pantryItems")) || [];
//     setItems(storedItems);
//   }, []);

//   // ✅ Add item
//   const handleAddItem = (newItem) => {
//     const itemWithId = { ...newItem, id: Date.now() };
//     const updatedItems = [...items, itemWithId];
//     setItems(updatedItems);
//     localStorage.setItem("pantryItems", JSON.stringify(updatedItems));
//   };

//   // ✅ Update item
//   const handleUpdateItem = (updatedItem) => {
//     const updatedItems = items.map((item) =>
//       item.id === updatedItem.id ? updatedItem : item
//     );
//     setItems(updatedItems);
//     localStorage.setItem("pantryItems", JSON.stringify(updatedItems));
//   };

//   // ✅ Delete item
//   const handleDeleteItem = (id) => {
//     const updatedItems = items.filter((item) => item.id !== id);
//     setItems(updatedItems);
//     localStorage.setItem("pantryItems", JSON.stringify(updatedItems));
//   };

//   return (
//     <div className="min-h-screen w-full overflow-y-auto text-black bg-[#e7d7ba] overflow-hidden">
//       <Navbar search={search} setSearch={setSearch} />

//       <Routes>
//         <Route path="/" element={<Home search={search} />} />
//         <Route path="/about" element={<About />} />

//         {/* ✅ Categories page */}
//         <Route
//           path="/categories"
//           element={
//             <Categories search={search} items={items} categories={categories} />
//           }
//         />

//         {/* ✅ Add Items page */}
//         <Route
//           path="/additems"
//           element={<AddItems onAdd={handleAddItem} categories={categories} />}
//         />

//         {/* ✅ Category Items page */}
//         <Route path="/category/:categoryName" element={<CategoryItems items={items} />} />

//         {/* ✅ Single Item Detail Page */}
//         <Route
//           path="/item/:itemId"
//           element={
//             <ItemDetails
//               items={items}
//               onUpdate={handleUpdateItem}
//               onDelete={handleDeleteItem}
//             />
//           }
//         />
//       </Routes>
//     </div>
//   );
// };

// export default App;
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

// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// import Navbar from "./Components/Navbar.jsx";
// import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Categories from "./pages/Categories.jsx";
// import AddItems from "./pages/AddItems.jsx";
// import CategoryItems from "./pages/CategoryItems.jsx";
// // ❌ ItemDetails ka import hata diya

// const App = () => {
//   const [items, setItems] = useState([]);
//   const [search, setSearch] = useState("");

//   const handleAddItem = (newItem) => {
//     setItems([...items, { ...newItem, id: Date.now() }]);
//   };

//   const handleUpdateItem = (updatedItem) => {
//     setItems((prevItems) =>
//       prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
//     );
//   };

//   const handleDeleteItem = (id) => {
//     setItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

  return (
    <div className="min-h-screen w-full text-black bg-[#e7d7ba]">
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










