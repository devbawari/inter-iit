import React, { useContext, useState } from 'react';
import './Item.css';
import { ItemContext } from './ItemContext'; // Import the context

const Item = () => {
  const { selectedItem } = useContext(ItemContext); // Use context to get the selected item
  const [loading, setLoading] = useState(true); // Manage loading state for the image

  if (!selectedItem) {
    return (
      <div className="mainbox">
        <div className="item-card">
          <div className="item-details">
            <h2>Select an item to view details</h2>
          </div>
        </div>
      </div>
    );
  }

  const { name, quantity, price, category, status, brand, image_url } = selectedItem;
  

  return (
    <div className="mainbox">
      <div className="item-card">
        <div className="item-image">
          {/* Show loader while the image is loading */}
          {loading && (
            <div className="loader">
              <p>Loading image...</p>
            </div>
          )}
          {/* Once the image has loaded, set loading to false */}
          <img
            src={image_url}
            alt={name}
            onLoad={() => setLoading(false)}
            style={{ display: loading ? 'none' : 'block' }} // Hide the image until loaded
          />
        </div>
        <div className="item-details">
          <h2>{name}</h2>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Price:</strong> ${price}</p>
          <p><strong>Category:</strong> {category}</p>
          <p>
            <strong>Status:</strong>{' '}
            {status === 'in_stock' ? (
              <span style={{ color: 'green' }}>In Stock</span>
            ) : (
              <span style={{ color: 'red' }}>Out of Stock</span>
            )}
          </p>
          <p><strong>Brand:</strong> {brand}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
