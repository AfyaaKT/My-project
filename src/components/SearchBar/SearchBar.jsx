import React, { useState } from 'react';
import './searchbar.css'; 
import { data } from '../../data'; 
import { Link } from 'react-router-dom';

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

    setSearchResults(results);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for cakes and more"
        value={query}
        onChange={handleInputChange}
      />
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((product, index) => (
            <Link to={`/product-details/${product.id}`} key={index} className="search-result-item">
              <img src={product.imgUrl} alt={product.title} className='img' />
              <h1>{product.title}</h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
