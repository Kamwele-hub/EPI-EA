import React from 'react';

const CountryList = () => {
  const countries = ["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi"];
  return (
    <ul>
      {countries.map(country => (
        <li key={country}>{country}</li>
      ))}
    </ul>
  );
};

export default CountryList;
