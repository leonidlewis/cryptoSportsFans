import { utilityList } from "../../../mockup";
import medalIcon from "../../../assets/images/medal.png";
import trophyIcon from "../../../assets/images/trophy.png";
import '../../../styles/utility.scss';

const Utility = () => {
  const { description, getting, championship } = utilityList;
  return (
    <div className="utility">
      <h1>UTILITY</h1>
      <p>{description}</p>
      <div className="utility-contents">
        <div>
          <div className="utility-content-header">
            <img src={medalIcon} alt="medal" />
            <h3>{getting.title}</h3>
          </div>
          <ul>
            {getting.list.map((item, index) => {
              return (
                <li key={`getting-${index}`}>
                  {item.content}
                  {item.details && <a href={item.details}>Details</a>}
                  {item.sublist && (
                    <ul>
                      {item.sublist.map((list, index) => (
                        <li key={`subgetting-${index}`}>{list.content}</li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="utility-content-header">
            <img src={trophyIcon} alt="trophy" />
            <h3>{championship.title}</h3>
          </div>
          <ol className="trophy-list">
            {championship.list.map((item, index) => {
              return (
                <li className="trophy-item" key={`championship-${index}`}>
                  <p>{item.title}</p>
                  {item.content}
                  {item.emphasis && <><span>{`${item.emphasis}`}</span><br/></>}
                  {item.content2}
                  {item.sublist && (
                    <ul>
                      {item.sublist.map((list, index) => (
                        <li key={`subchampion-${index}`}>{list.content}</li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Utility;
