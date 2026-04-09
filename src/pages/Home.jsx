import React from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f5efe6] to-[#efe6d8] flex flex-col">

      {/* ================= HERO SECTION ================= */}
      <div className="  flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full px-6 md:px-10 lg:px-16 py-5 md:py-20 gap-10">

        {/* LEFT TEXT */}
        <div className="flex-1 max-w-xl text-start md:text-left">
 
          <h1 className="font-[diya] font-semibold text-3xl sm:text-5xl md:text-6xl text-[#2d2d2d] leading-tight">
            Never run out  of your essentials  again
          </h1>

          <p className="text-[#6b6b6b] mt-4 text-base md:text-lg leading-relaxed">
            Keep your pantry perfectly stocked. Get low stock alerts, track
            items, get expiry reminders, and say goodbye to last-minute grocery runs.
          </p>

          {/* BUTTONS */}
          <div className="flex items-start md:justify-start gap-4 mt-6">

            <Link to="/AddItems">
              <button className="font-semibold text-white bg-[#8b7355] rounded-full px-5 md:px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                Get Started
              </button>
            </Link>

            <Link to="/About">
              <button className="font-semibold text-[#5a4a3a] border border-[#d6c6b2] rounded-full px-6 py-3 hover:bg-[#f0e6d8] transition-all duration-300">
                Learn More
              </button>
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1  flex justify-center md:justify-end">
          <div className="  bg-[#f7f2ea]  w-[340px] sm:w-[380px] md:w-[450px] lg:w-[520px] h-[320px] md:h-[370px] lg:h-[490px] p-3 rounded-3xl">
            <img
              src="/pantry.png"
              alt="Pantry Preview"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>

      {/* ================= FEATURES SECTION ================= */}
      <div className=" pb-4 max-w-7xl mx-auto w-full px-2 md:px-4  lg:px-16 mt-1 md:mt-5  grid grid-cols-1 md:grid-cols-2 gap-10 ">

        {/* LEFT BIG CARD */}
        <div className="bg-[#f3ece3] rounded-3xl p-8 md:p-15 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2d2d2d]">
            Visualize your inventory with ease
          </h2>

          <p className="text-[#6b6b6b] mt-3 text-base md:text-lg">
            Track expiration dates and stock levels with a clean and simple layout.
          </p>

         <div className="flex gap-2 md:gap-5 mt-6 -ml-2">
  <img 
    src="/dryfruits.jpg" 
    className="w-1/3 aspect-square object-cover rounded-xl" 
  />
  <img 
    src="/pulses.jpg" 
    className="w-1/3 aspect-square object-cover rounded-xl" 
  />
  <img 
    src="/spices.jpg" 
    className="w-1/3 aspect-square object-cover rounded-xl" 
  />
</div>
        </div>

        {/* RIGHT SMALL CARDS */}
        <div className="flex flex-col gap-8 ">

          <div className="bg-[#e8d8c3] rounded-3xl p-6 md:p-8 shadow-sm">
    <i className="ri-alarm-line text-3xl font-light"></i>
            <h3 className="text-xl md:text-2xl font-semibold text-[#2d2d2d]">
              Expiry Notifications
            </h3>
            <p className="text-base text-[#6b6b6b] mt-2">
             
              Get alerts before your items expire.
            </p>
          </div>

          <div className="bg-[#dfe5db] rounded-3xl p-6 md:p-8 shadow-sm">
            <i class="ri-file-list-3-line text-3xl"></i>
            <h3 className="text-xl md:text-2xl font-semibold text-[#2d2d2d]">
              Auto Lists
            </h3>
            <p className="text-base text-[#6b6b6b] mt-2">
              Automatically create shopping lists.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;
