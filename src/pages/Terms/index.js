import React from "react";
import "../../styles/terms.scss";
import { termsData } from "../../mockup";
import Menu from "../../component/Menu";

const Terms = () => {
  const { pageTitle, description, subDescription, listTitle, termslist } =
    termsData;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="terms">
      <div className="terms-header">
        <h1>{pageTitle}</h1>
        <p>{description}</p>
        <p>{subDescription}</p>
      </div>
      <div className="gradient-bg" />
      <div className="terms-content">
      <Menu isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
        <h3>{listTitle}</h3>
        <div className="terms-list-container">
          <ul>
            {termslist.map((item, index) => {
              return (
                <li key={`terms-${index}`}>
                  <p>{item.title}</p>
                  {item.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Terms;
