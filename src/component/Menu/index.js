import { NavLink } from "react-router-dom";
import menuIcon from "../../assets/images/menu.png";
import closeIcon from "../../assets/images/close.png";
const Menu = ({isMenuOpen, handleMenu}) => {
  return (
    <>
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
              About
            </NavLink>
            <NavLink to="/roadmap" exact>
              Roadmap
            </NavLink>
            <NavLink to="/" exact>
              The Caboodles
            </NavLink>
            <NavLink to="/" exact>
              Team{" "}
            </NavLink>
            <NavLink to="/roadmap" exact>
              Roadmap
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
    </>
  );
};

export default Menu;
