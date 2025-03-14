import React, { useState } from "react";
import App from "./App.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="search-sort flex items-center gap-2 bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="relative flex-1">
        <input
          type="text"
          className={`search w-full p-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
            isFocused ? "border-blue-500 shadow-md" : "border-gray-300"
          }`}
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        )}
      </div>
      <button className="sort bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
