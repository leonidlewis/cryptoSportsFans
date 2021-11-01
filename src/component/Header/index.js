import { NavLink } from "react-router-dom";
import { links } from "../../contants/Navigation";
import "../../styles/header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <NavLink to="/" exact>
          <h3>CryptoSporsFans</h3>
        </NavLink>
        <div className="nav-bar">
          <div className="Navigation">
            <ul>
              {links.map((link) => (
                <li key={link.to}>
                  <a href={link.to}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="wallet">
            <button>
              <p>Connect Wallet</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
