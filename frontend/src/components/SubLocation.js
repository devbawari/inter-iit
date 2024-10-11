import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import './Godown.css';
import Noitems from "./Noitems";

const SubLocation = ({ name, items }) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [show, setShow] = useState(false);

  const getItemData = async () => {
    try {
      const id = items;
      const res = await fetch(`http://localhost:1008/api/items/getitembygodown/${id}`);
      const data = await res.json();

      if (!data.data || data.data.length === 0) {
        console.log("No items found");
        setShow(true);  // No items found, show the message
      } else {
        setItem(data.data);  // Set the fetched items
        setShow(false);      // Items found, so don't show "No items found"
      }
    } catch (err) {
      console.error(err);
      setShow(true);  // In case of an error, assume no items are found
    }
  };

  useEffect(() => {
    if (open) {
      getItemData();  // Fetch data only when the sub-location is opened
    }
  }, [open]);

  return (
    <div className="sub-location">
      <div onClick={() => setOpen(!open)} className="header">
        <span className={`arrow ${open ? "open" : ""}`}>⯆</span> 📂 {name}
      </div>
      <div className={`content ${open ? "open" : ""}`}>
        {open && (
          <>
            {item.length > 0 ? (
              <ItemList items={item} />  
            ) : (
              show && <Noitems />  
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SubLocation;
