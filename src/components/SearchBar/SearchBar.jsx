import React, { useState } from 'react';
import './searchbar.css'; 

import { data } from '../../data'; 

function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  
    const results = data.filter((product) => {
      if (product.title && inputValue) {
        const productName = product.title.toLowerCase();
        const searchTerm = inputValue.toLowerCase();
        return productName.includes(searchTerm);
      }
      return false;
    });
  
    console.log('Input Value:', inputValue);
    console.log('Search Results:', results);
  
    setSearchResults(results);
  };
  
  

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for cakes, cupcakes, cookies..."
        value={query}
        onChange={handleInputChange}
      />
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((product,index) => (
            <div key={index} className="search-result-item">
              <img src={product.imgUrl} alt={product.title} className='img' />
              <h1>{product.title}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
