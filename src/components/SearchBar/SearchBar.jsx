
import React, { useState } from 'react';
import './searchbar.css'

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input" 
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>

  );
}

export default SearchBar;
