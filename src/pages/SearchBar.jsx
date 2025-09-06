import React from "react";

export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="relative">
      {/* Search Icon */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-900"
      >
        <path
          d="M21 21l-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Input */}
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search items..."
        className="h-9 w-56 sm:w-64 rounded-full border border-gray-800 bg-white pl-9 pr-8 text-sm text-gray-800 outline-none placeholder-gray-900 focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition"
      />

      {/* Clear Button */}
      {value.length > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      )}
    </div>
  );
}


