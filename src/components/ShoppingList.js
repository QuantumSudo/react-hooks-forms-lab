import React from "react";
import Filter from "./Filter";

function ShoppingList({ items, search, onSearchChange }) {
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) // Filter items based on search term
  );

  return (
    <div>
      <Filter search={search} onSearchChange={onSearchChange} /> {/* Pass props for controlled search */}
      <div className="Items">
        {filteredItems.map((item) => (
          <div key={item.id}>{item.name}</div> // Display filtered items
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;
