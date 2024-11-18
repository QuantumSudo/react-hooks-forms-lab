import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)} // Update search term
      />
    </div>
  );
}

export default Filter;
