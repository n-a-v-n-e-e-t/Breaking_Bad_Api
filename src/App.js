import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/UI/header';
import CharacterGrid from './Components/characters/character-grid';
import Search from './Components/UI/search';
function App() {
  const [items, setItems] = useState([]); // start as an empty array
  const [isLoading, setIsLoading] = useState(true); // start as an empty array
  const [query, setQuery] = useState(''); // start as an empty query
  const changequery=(q)=>{
    console.log(q);
    setQuery(q);
  }
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://breakingbadapi.com/api/characters?name=${query}`);
      
      setItems(result.data);
      setIsLoading(false);  
     // console.log(result.data);
    }

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search changequery={changequery}/>
      <CharacterGrid  isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
