import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const ItemCard = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="front" onClick={handleClick}>
        <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto' }} />
      </div>

      <div className="back" onClick={handleClick}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <button onClick={() => window.location.href = `/item/${item.id}`}>Know More</button>
      </div>
    </ReactCardFlip>
  );
};

export default ItemCard;
