import React, { useState,useEffect } from "react";
import './Godown.css';
import Godown from './Godownl.js';

const GodownList = () => {
  const[godown,setGodown]=useState([]); 
  const getgodowndata=async()=>{
    try {
      const res = await fetch('http://localhost:1008/api/godown/getgodown');
      const data = await res.json();
      setGodown(data.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(()=>{
    getgodowndata();
  },[]);
  return (
    <div className="godown-list">
      {godown.map((godown, index) => (
        <Godown key={index} godown={godown}/>
      ))}
    </div>
  );
};

export default GodownList;
