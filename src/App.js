import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './components/itemCard';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="item-container">
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
