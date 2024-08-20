import React from 'react';
import './ItemCard.css';

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <div className="item-image" style={{ backgroundImage: `url(${item.image})` }}>
        <div className="item-overlay">
          <h3>{item.name}</h3>
        </div>
      </div>
      <div className="item-details">
        <p>{item.description}</p>
        <button className="know-more-btn" onClick={() => window.location.href = `/item/${item.id}`}>
          Know More
        </button>
      </div>
    </div>
  );
};

export default ItemCard;