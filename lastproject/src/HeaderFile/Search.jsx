import React from "react";
import search from "../assets/seach.png";
export const Search = () => {
  return (
    <div className="filter-container">
      {/* Tab Menu */}
      <div className="tab-menu">
        <a href="">All</a>
        <a href="">New</a>
        <a href="">Used</a>
      </div>
      {/* Search Bar */}
      <input type="text" className="search-bar" placeholder="Search" />
      {/* Dropdowns */}
      <select className="dropdown">
        <option>Model</option>
      </select>
      <select className="dropdown">
        <option>Model</option>
        <option>Model</option>
        <option>Brand</option>
      </select>
      {/* Location */}
      <div className="location">
        <span>📍 Location</span>
      </div>
      {/* Price Range */}
      <div className="price-range">
        <label>Price Range</label>
        <input type="range" min="0" max="3000000" />
      </div>
      {/* Search Button */}
      <button className="search-btn">Search</button>
    </div>
  );
};
