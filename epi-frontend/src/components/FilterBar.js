import React, { useState } from 'react';

const categories = [
  "Air Quality", "Water and Sanitation", "Biodiversity and Habitat", 
  // Add more categories as needed
];

const FilterBar = () => {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="filter-bar p-2">
      <select onChange={handleCategoryChange} value={category} className="p-2 border border-gray-300 rounded-md">
        <option value="">Filter by category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat.toLowerCase().replace(/ /g, '-')}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
