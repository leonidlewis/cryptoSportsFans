import "../../styles/terms.scss";
import { termsData } from "../../mockup";
const Terms = () => {
    const {pageTitle, description, subDescription, listTitle, termslist} = termsData;
  return (
    <div className="terms">
      <div className="terms-header">
        <h1>{pageTitle}</h1>
        <p>{description}</p>
        <p>{subDescription}</p>
      </div>
      <div className="gradient-bg" />
      <div className="terms-content">
        <h3>{listTitle}</h3>
        <div className = "terms-list-container">
        <ul>
          {termslist.map((item, index) => {
            return (
              <>
                <li>
                  <p>{item.title}</p>
                  {item.content}
                </li>
              </>
            );
          })}
        </ul>
        </div>
      </div>
    </div>
  );
};
export default Terms;
