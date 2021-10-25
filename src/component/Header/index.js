import { NavLink } from "react-router-dom";
import { links } from "../../contants/Navigation";
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
          {/* <NavLink to="/roadmap" exact activeStyle={{ color: "#FB9F30" }}>
            Roadmap
          </NavLink>
          <NavLink to="/terms" exact activeStyle={{ color: "#FB9F30" }}>
            Terms
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
