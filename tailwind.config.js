/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 ye line add karna zaruri hai
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",  // iPhone 12/13
        sm: "640px",  // Default Tailwind
        md: "768px",  // Tablet
        lg: "1024px", // Laptop
        xl: "1280px", // Large screens
        xxl: "1440px" // Extra large monitors
      },
    },
  },
  plugins: [],
};


