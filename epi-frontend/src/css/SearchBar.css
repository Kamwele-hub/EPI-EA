import React, { useState } from 'react';

const countries = [
  "Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", 
  "South Sudan", "Ethiopia"
];

const SearchBar = () => {
  const [countryFilter, setCountryFilter] = useState('');

  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.toLowerCase().startsWith(countryFilter.toLowerCase())
  );

  return (
    <div className="search-bar p-2">
      <input 
        type="text" 
        placeholder="Filter by country" 
        value={countryFilter} 
        onChange={handleCountryFilterChange} 
        list="countries"
        className="p-2 border border-gray-300 rounded-md"
      />
      <datalist id="countries">
        {filteredCountries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </datalist>
    </div>
  );
};

export default SearchBar;
