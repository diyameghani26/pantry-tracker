// import { NavLink } from "react-router-dom"
// import React from "react"

// const home = () => {
//     return (

//     <div className='w-screen h-screen flex justify-center items-center bg-[#e7d7ba]'>

//   {/* Wrapper with flex-row on medium screens */}
//   <div className='flex flex-col md:flex-row items-center gap-10 mb-10'>

//     {/* Left Text */}
//     <div className='w-[300px] md:w-[400px]  mr-80 '>
//       <h1 className='font-[diya] font-bold text-3xl md:text-7xl  text-left  md:whitespace-nowrap'>
//         Never run out <br /> of your essentials <br /> again
//       </h1> <br />
//      <p className='text-2xl italic '>keep your pantry perfectly stocked . Get low stock alerts, tract items , get expiry reminders, and say goodbye to last-minute grocery runs</p> <br />
//      <button className='h-15 font-bold font-[diya] text-xl bg-[#c5b396] rounded-3xl px-13 py-3 m-2'>Get started </button>
//           <button className='h-15 font-bold font-[diya] text-xl bg-[#c5b396] rounded-3xl px-7 py-3'>learn more </button>
//     </div>

//     {/* Right Image */}
//     <div className='w-[300px] md:w-[300px]'>
//       <img src="/mobile.jpg" alt="" className='w-full object-cover rounded-2xl shadow-lg' />
//     </div>

//   </div>
// </div>

//   )
// }

// export default home

// bg-[#B09F84]

import React from "react";
import "remixicon/fonts/remixicon.css";

const Home = () => {
  return (
    <div className="w-screen bg-[#e7d7ba] flex flex-col">
      {/* ✅ Hero Section (Desktop + Mobile) */}
      <div className="flex flex-col md:flex-row items-center justify-center md:w-screen  px-6  py-4  ">
        {/* Left Text */}
        <div className="max-w-sm mt-3 text-center md:text-left md:mr-96 md:mt-24">
          <h1 className="font-[diya] font-bold text-3xl @min-xs:text-5xl md:text-7xl md:whitespace-nowrap ">
            Never run out <br /> of your essentials <br />
            again
          </h1>
          <p className="text-sm  italic mt-3 md:mt-4 md:text-xl">
            keep your pantry perfectly stocked. Get low stock alerts, track
            items, get expiry reminders, and say goodbye to last-minute grocery
            runs
          </p>
         <div className="flex flex-row md:flex-row items-center justify-center gap-2 mt-3 md:mt-6">
  <button className="font-bold font-[diya] text-sm md:text-xl bg-[#c5b396] rounded-3xl px-6 py-2 md:px-17 md:py-3 md:whitespace-nowrap md:shadow-md">
    Get started
  </button>
  <button className="font-bold font-[diya] text-sm md:text-xl bg-[#c5b396] rounded-3xl px-4 py-2 md:px-13 md:py-3 md:whitespace-nowrap md:shadow-md">
    Learn more
  </button>
</div>
        </div>

        {/* Right Image */}
        <div className="mr-4 max-w-[180px] md:max-w-[300px] mt-3  md:mt-24 ">
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
