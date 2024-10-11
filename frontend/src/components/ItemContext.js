import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

// Context Provider Component
export const ItemProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <ItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </ItemContext.Provider>
  );
};
