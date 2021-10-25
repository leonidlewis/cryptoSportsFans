import { burningData } from "../../../mockup";
import '../../../styles/burning.scss';
const Burning = () => {
  const { description, subtitle, optionDetail, optionList } = burningData;
  return (
    <div className="burning">
      <p>{description}</p>
      <h3>{subtitle}</h3>
      <p>{optionDetail}</p>
      <div className="burning-lists">
        {optionList.map((list, index) => {
          return (
            <div className="burning-reason" key={`burning-list-${index}`}>
              <p className="burning-list-header">{list.title}</p>
              <ol>
                {list.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Burning;
