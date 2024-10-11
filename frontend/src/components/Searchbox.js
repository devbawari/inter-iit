import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons
import { AiOutlineClose } from 'react-icons/ai'; // Importing close icon

import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
//   const [filteredGodowns, setFilteredGodowns] = useState(godowns);
const [godowns, setGodowns] = useState([]);
const [godown, setGodown] = useState(null);
const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);
console.log(value);
    if (value) {
      try {
        const res = await fetch(`http://localhost:1008/api/godown/searchgodown?name=${value}`);
        const data = await res.json();
        setGodowns(data); // Set the godown list based on search results
        console.log(data);
      } catch (error) {
        console.error('Error fetching godowns:', error);
      }
    } else {
      setGodowns([]); // Clear the list if search term is empty
    }
  };
const clearhandler = () => {  
    setSearchTerm('');
    setGodowns([]);
  };
  return (
 
    <div className="search-bar">
      <div className="input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search Godowns..."
          className="search-input"
        />
        {searchTerm && <AiOutlineClose className="clear-icon" onClick={clearhandler}/>}
      </div>
      <ul className="gl">
        {godowns.map((godown, index) => (
          <li key={index} >
            📦 {godown.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
