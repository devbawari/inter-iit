import React, { useContext } from 'react';
import './Godown.css';
import { ItemContext } from './ItemContext.js'; // Import the context
import './Item.css';
const ItemList = ({ items }) => {
  const { setSelectedItem } = useContext(ItemContext); // Use context to get the setter function

  const itemclick = (item) => {
    localStorage.setItem('item', JSON.stringify(item)); // Optionally store in localStorage
    setSelectedItem(item); // Update the context with the clicked item
  };

  return (
    <>
      <ul className='iteml'>
        {items.map((item, index) => (
          <a key={index}>
            <li key={index} className="item" onClick={() => itemclick(item)}>
              📦 {item.name}
            </li>
          </a>
        ))}
      </ul>
    </>
  );
};

export default ItemList;

