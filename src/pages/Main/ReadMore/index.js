import React from "react";
import { NavLink } from "react-router-dom";
import { readmore, nfts } from "../../../mockup";
import NftContainer from "../../../component/NftContainer";
import menuIcon from "../../../assets/images/menu.png";
import closeIcon from "../../../assets/images/close.png";
import "../../../styles/readmore.scss";
const ReadMore = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("clcik----", isMenuOpen);
  };
  return (
    <div className="read-more">
      {isMenuOpen ? (
        <>
          <img
            src={closeIcon}
            alt="menu icon"
            className="close-icon"
            onClick={handleMenu}
          />
          <div className="menu">
            <NavLink to="/" exact>
              Home
            </NavLink>
            <NavLink to="/" exact>
              Buy a CryptoSportsFan
            </NavLink>
            <NavLink to="/roadmap" exact>
              Roadmap
            </NavLink>
            <NavLink to="/" exact>
              Gallery
            </NavLink>
            <NavLink to="/" exact>
              Provenance
            </NavLink>
            <NavLink to="/" exact>
              Team{" "}
            </NavLink>
            <NavLink to="/" exact>
              Members Only
            </NavLink>
            <NavLink to="/" exact>
              Luxury Box
            </NavLink>
            <NavLink to="/terms" exact>
              {`Terms & Conditions`}
            </NavLink>
          </div>
        </>
      ) : (
        <img
          src={menuIcon}
          alt="menu icon"
          className="menu-icon"
          onClick={handleMenu}
        />
      )}
      <div className="read-more-description">
        <h1>{readmore.title}</h1>
        <p>{readmore.content}</p>
      </div>
      <div className="read-more-images">
        {nfts.map((item, index) => {
          return <NftContainer item={item} key={`${index}-nft`} />;
        })}
      </div>
    </div>
  );
};
export default ReadMore;
