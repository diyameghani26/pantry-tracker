import React from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen mt-8 flex flex-col">
      {/* ✅ Hero Section (Desktop + Mobile) */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:w-screen  px-6  py-4  ">
        {/* Left Text */}
        <div className="max-w-sm mt-3  text-4xl text-center md:text-left md:mr-96 md:mt-24">
          <h1 className="font-[diya] font-bold text-3xl @min-xs:text-5xl md:text-7xl md:whitespace-nowrap ">
            Never run out <br /> of your essentials <br />
            again
          </h1>
          <p className="text-lg  italic mt-3 md:mt-4 md:text-xl">
            keep your pantry perfectly stocked. Get low stock alerts, track
            items, get expiry reminders, and say goodbye to last-minute grocery
            runs
          </p>
         <div className="flex flex-row md:flex-row items-center justify-center gap-2 mt-3 md:mt-6">
          <Link to="/AddItems">
 <button className="font-bold font-[diya] text-xl md:text-xl bg-[#c5b396] rounded-3xl px-6 py-2 md:px-17 md:py-3 md:whitespace-nowrap md:shadow-md 
transition-transform duration-300 transform hover:scale-105 active:scale-95">
  Get started
</button>
</Link>

<Link to="/About">
  <button className="font-bold font-[diya] text-xl md:text-xl bg-[#c5b396] rounded-3xl px-4 py-2 md:px-13 md:py-3 md:whitespace-nowrap md:shadow-md  transition-transform duration-300 transform hover:scale-105 active:scale-95">
    Learn more
  </button>
  </Link>
</div>
        </div>

        {/* Right Image */}
        <div className="mr-4 max-w-xs w-[200px]  md:w-[300px]   md:mt-24 transition-transform duration-300 transform hover:scale-105 active:scale-95">
          <img
            src="/mobile.jpg"
            alt="Pantry Preview"
            className="w-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
