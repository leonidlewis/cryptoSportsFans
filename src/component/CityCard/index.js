import React from "react";
const CityCard = ({ card }) => {
  return (
    <>
      <div className="city-card" style={{ backgroundColor: card.color }}>
        <h3>{card.label}</h3>
        <p>{card.content}</p>
      </div>
    </>
  );
};
export default CityCard;