import React, { useState, useEffect } from "react";
import SubLocation from "./SubLocation";
import './Godown.css';
import Noitems from "./Noitems";

const Godown = ({ godown }) => {
  const [open, setOpen] = useState(false);
  const [subLocation, setSubLocation] = useState([]);
  const [item, setItem] = useState([]);

  const getsubgodowndata = async () => {
    try {
      const id = godown.id;
      const res = await fetch(`http://localhost:1008/api/godown/getsubgodowns/${id}`);
      const data = await res.json();
      setSubLocation(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getsubgodowndata();
  }, []);

  return (
    <div className="godown">
      <div onClick={() => setOpen(!open)} className="header">
        <span className={`arrow ${open ? "open" : ""}`}>⯆</span> 📁 {godown.name}
      </div>

      <div className={`content ${open ? "open" : ""}`}>
        {open && (
          <>
            {subLocation.length > 0 ? (
              subLocation.map((sub, index) => (
                <SubLocation
                  key={index}
                  name={sub.name}
                  items={sub.id}
                />
              ))
            ) : (
              <Noitems />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Godown;
