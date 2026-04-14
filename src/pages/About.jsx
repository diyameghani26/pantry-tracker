


import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screenbg-gradient-to-b from-[#f5efe6] to-[#efe6d8]   px-4 py-10">

      {/* Container */}
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Hero Section */}
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-6 lg:space-y-10">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#4f3002]">
            About Pantry Tracker 
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            A smart and simple way to manage your kitchen items, track expiry dates, and reduce food waste effortlessly.
          </p>
        </div>

        {/* Card Section */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="text-3xl mb-3 text-green-600">
              🧺
            </div>
            <h2 className="text-xl font-semibold mb-2">Easy Management</h2>
            <p className="text-gray-500 text-sm">
              Add, update and organize pantry items with a clean and intuitive interface.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="text-3xl mb-3 text-green-600">
              ⏳
            </div>
            <h2 className="text-xl font-semibold mb-2">Track Expiry</h2>
            <p className="text-gray-500 text-sm">
              Keep track of expiry dates and avoid wasting food with smart tracking.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="text-3xl mb-3 text-green-600">
              📱
            </div>
            <h2 className="text-xl font-semibold mb-2">Responsive Design</h2>
            <p className="text-gray-500 text-sm">
              Works smoothly across mobile, tablet and desktop for a seamless experience.
            </p>
          </div>

        </div>

        {/* About You Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center gap-6">

          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-3xl text-green-600">
            D
          </div>

          {/* Content */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Created by Diya ✨
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Passionate frontend developer building modern and user-friendly web applications. 
              This project is designed to solve real-life problems with a clean UI and smooth experience.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <button
           onClick={() => navigate("/additems")}
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 shadow-md hover:shadow-lg transition-all duration-300">
            Start Managing Your Pantry 🚀
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
