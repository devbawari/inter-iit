import React, { useState, useEffect ,useContext} from 'react';
import Godowm from './components/Godowm.js';
import Item from './components/Item.js';
import { ItemProvider } from './components/ItemContext.js';
import './App.css';
import Searchbox from './components/Searchbox.js';


const App = () => {


  return (
 <ItemProvider>

  
  <div className='outer'>
 <Searchbox />
    <div className="m">
      <Godowm />
    <Item />
    </div>
  </div>
  
    </ItemProvider>
  );
};

export default App;
