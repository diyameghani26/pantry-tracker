// import React from "react";

// const About = () => {
//   return (
//     <div className=" bg-[#e7d7ba] flex flex-col items-center justify-center p-3 md:p-2">
//       <div className="max-w-2xl  bg-white rounded-2xl shadow-lg p-5 md:p-6 text-center mt-2">
//         <h1 className="text-2xl md:text-4xl font-bold mb-2 text-[#5a4634] whitespace-nowrap">
//            About My Pantry Tracker
//         </h1>

//         <p className=" italic text-gray-700 text-sm md:text-lg leading-relaxed mb-4">
//           Managing kitchen items can be stressful — kabhi sugar khatam ho jaye,
//           kabhi maggie packet missing ho, ya expiry date nikal jaye. Pantry
//           Tracker aapko help karta hai apne ghar ka ration track karne me —
//           <span className="font-semibold">
//             {" "}category wise, quantity wise, aur expiry date wise
//           </span>.
//         </p>

//         <h2 className="text-sm md:text-xl font-semibold mb-2 text-[#5a4634]">💡 What You Can Do Is:</h2>
//         <ul className="text-gray-700 space-y-2 text-left md:text-lg md:mb-4 mb-2">
//           <li>➤ Add your items with quantity & expiry date</li>
//           <li>➤ Track which items are running low</li>
//           <li>➤ Get alerts for items expiring soon</li>
//           <li>➤ Quickly search anything from your pantry</li>
//         </ul>

//         <p className="text-gray-700 text-base md:text-lg mb-4">
//           Pantry Tracker banaya gaya hai taaki aapka kitchen hamesha stocked
//           rahe aur aapka time bache. Simple design, easy-to-use features aur
//           mobile-friendly experience — sab ek jagah.
//         </p>

//         <p className="italic text-gray-600">
//           Hi! I’m <span className="font-semibold">Diya 👋</span>, a developer who
//           built this website for people like me who always forget what’s left in the
//           kitchen 😅. I hope this helps you stay organized and save time while
//           grocery shopping.
//         </p>

      

// <div className="overflow-x-auto whitespace-nowrap bg-yellow-100 rounded-lg shadow-md mt-4 py-2">
//   <p className="inline-block px-4 text-gray-800 font-semibold animate-pulse">
//     🚀 Coming Soon: Notifications & Shopping List Export Feature
//   </p>
// </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div className="bg-[#e7d7ba] flex flex-col items-center justify-center px-3 py-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center md:mt-7 mt-12">
        <h1 className="text-xl sm:text-3xl font-bold mb-3 text-[#5a4634]">
          About My Pantry Tracker
        </h1>

        <p className="italic text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
          Managing kitchen items can be stressful — kabhi sugar khatam ho jaye,
          kabhi maggie packet missing ho, ya expiry date nikal jaye. Pantry
          Tracker aapko help karta hai apne ghar ka ration track karne me —{" "}
          <span className="font-semibold">
            category wise, quantity wise, aur expiry date wise
          </span>.
        </p>

        <h2 className="text-base sm:text-xl font-semibold mb-3 text-[#5a4634]">
          💡 What You Can Do Is:
        </h2>
        <ul className="text-gray-700 space-y-2 text-left text-sm sm:text-base mb-4">
          <li>➤ Add your items with quantity & expiry date</li>
          <li>➤ Track which items are running low</li>
          <li>➤ Get alerts for items expiring soon</li>
          <li>➤ Quickly search anything from your pantry</li>
        </ul>

        <p className="text-gray-700 text-sm sm:text-base mb-4">
          Pantry Tracker banaya gaya hai taaki aapka kitchen hamesha stocked
          rahe aur aapka time bache. Simple design, easy-to-use features aur
          mobile-friendly experience — sab ek jagah.
        </p>

        <p className="italic text-gray-600 text-sm sm:text-base">
          Hi! I’m <span className="font-semibold">Diya 👋</span>, a developer who
          built this website for people like me who always forget what’s left in
          the kitchen 😅. I hope this helps you stay organized and save time
          while grocery shopping.
        </p>

      <div className="whitespace-nowrap bg-yellow-100 rounded-lg shadow-md mt-3 py-1 px-1 overflow-hidden">
  <p className="inline-block text-gray-800 font-semibold animate-pulse text-sm sm:text-base">
    🚀 Coming Soon: Notifications & Shopping List Feature
  </p>
</div>
      </div>
    </div>
  );
};

export default About;
