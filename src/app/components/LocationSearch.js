'use client';

import { useState } from 'react';

const LocationSearch = ({ setLocation }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    // Call your API route to get place data
    const response = await fetch(`/api/search?query=${query}`);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const location = data.results[0];
      setLocation(location);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a place"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default LocationSearch;
