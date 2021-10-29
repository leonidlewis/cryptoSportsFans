import React from 'react';
import leftLogo from "../../../assets/images/leftlogo.png";
import rightlogo from "../../../assets/images/rightlogo.png";
import "../../../styles/maincontent.scss";
const MainContent = () => {
  
  return (
    <div className="main-content">
     
      <img src={leftLogo} className="left-logo" alt="left logo" />
      <div>
        <h3>CryptoSportsFans</h3>
        <button>available on opensea</button>
      </div>
      <img src={rightlogo} className="right-logo" alt="right logo" />
    </div>
  );
};

export default MainContent;
