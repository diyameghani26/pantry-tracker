import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const Navbar = ({ search, setSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);
  const navigate = useNavigate();

  // ✅ Enter key se categories page par le jao
  const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
      navigate("/categories");
      setMobileSearchOpen(false); // mobile search close ho jaye
    }
  };

  return (
    <nav className="w-full bg-white shadow-md px-3 py-2 flex justify-between items-center">
      {/* LEFT - LOGO */}
      <NavLink to="/" className="text-xl font-bold">
       <div className="flex items-center gap-2 transition-transform duration-300 transform hover:scale-105 active:scale-95 hover:bg-[#e7d7ba] rounded-xl p-2">
           <i className="ri-home-heart-line text-2xl"></i>
          <span className="text-xl mt-1 md:text-xl font-bold font-[diya]">My Pantry Tracker</span>
         </div>
      </NavLink>
     


      {/* center - Desktop Nav */}
      <div className="hidden md:flex items-center  text-xl gap-6   font-[diya] font-bold ">
       <NavLink
  className={(e) =>
    `transition-transform duration-300 transform hover:scale-105 active:scale-95 hover:bg-[#e7d7ba] rounded-xl p-2 ${e.isActive ? " font-bold" : ""}`
  }
  to="/"
>
  Home
</NavLink> 
        <NavLink 
        className={(e)=>   `transition-transform duration-300 transform hover:scale-105 active:scale-95 hover:bg-[#e7d7ba] rounded-xl p-2 ${e.isActive ? " font-bold" : ""}`}
        to="/about">About</NavLink>
        <NavLink 
        className={(e)=>   `transition-transform duration-300 transform hover:scale-105 active:scale-95 hover:bg-[#e7d7ba] rounded-xl p-2 ${e.isActive ? " font-bold" : ""}`}
        to="/categories">Categories</NavLink>
        <NavLink
        className={(e)=>   `transition-transform duration-300 transform hover:scale-105 active:scale-95 hover:bg-[#e7d7ba] rounded-xl p-2 ${e.isActive ? " font-bold" : ""}`}
        to="/additems">Add Items</NavLink>
      </div>

   {/* right - Desktop Search */}
      <div className="hidden md:flex items-center w-1/4 relative ">
        <Search className="w-5 h-5 absolute left-3 text-gray-500 " />
        <input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearchEnter}
          className="w-full border border-gray-300 rounded-xl pl-10  pr-3 py-2  "
        />
      </div> 
      {/* MOBILE ICONS */}
      <div className="flex items-center gap-4 md:hidden">
        {/* Mobile Search Toggle */}
        <Search
          className="w-6 h-6 cursor-pointer"
          onClick={() => setMobileSearchOpen(true)}
        />
        {/* Mobile Menu Toggle */}
        <Menu
          className="w-6 h-6 cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
        />
      </div>

      {/* ✅ MOBILE SEARCH SLIDE-IN */}
      {mobileSearchOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-white shadow-2xl p-4 flex flex-col gap-4 z-50 animate-slideDown">
          <div className="flex justify-between items-center transition-transform duration-300 transform hover:scale-105 active:scale-95 hover:bg-[#e7d7ba] rounded-xl p-2">
            <span className="font-bold text-lg">Search</span>
            <X
              className="w-6 h-6 cursor-pointer"
              onClick={() => setMobileSearchOpen(false)}
            />
          </div>
          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearchEnter}
            className="border border-gray-300 rounded-xl px-3 py-2 outline-none"
          />
        </div>
      )}

      {/* ✅ MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="absolute top-0 right-0 w-screen h-screen text-center text-xl font-bold bg-white shadow-2xl p-6 flex flex-col gap-6 z-50 animate-slideIn">
          <div className="flex justify-end">
            <X
              className="w-6 h-6 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>

          <div className="flex  font-[diya] flex-col items-center gap-4">
            <NavLink 
            className={(e)=>   `transition-transform duration-300 transform hover:scale-105 active:scale-95 hover:bg-[#e7d7ba] rounded-xl p-2 ${e.isActive ? " font-bold" : ""}`}
            to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink 
            className={(e)=>   `transition-transform duration-300 transform hover:scale-105 active:scale-95 hover:bg-[#e7d7ba] rounded-xl p-2 ${e.isActive ? " font-bold" : ""}`}
            to="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </NavLink>
            <NavLink 
            className={(e)=>   `transition-transform duration-300 transform hover:scale-105 active:scale-95 hover:bg-[#e7d7ba] rounded-xl p-2 ${e.isActive ? " font-bold" : ""}`}
            to="/categories" onClick={() => setMobileMenuOpen(false)}>
              Categories
            </NavLink>
            <NavLink
            className={(e)=>   `transition-transform duration-300 transform hover:scale-105 active:scale-95 hover:bg-[#e7d7ba] rounded-xl p-2 ${e.isActive ? " font-bold" : ""}`}
            to="/additems" onClick={() => setMobileMenuOpen(false)}>
              Add Items
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


