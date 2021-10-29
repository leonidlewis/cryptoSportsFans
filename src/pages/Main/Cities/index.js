import "../../../styles/cities.scss";
import CityCard from '../../../component/CityCard';
import { citiesContent } from "../../../mockup";
const Cities = () => {
  return (
    <div className="cities">
      <p>{citiesContent.description}</p>
      <h3>1st Generation - 6 Citites</h3>
      <p>{`The first generation of CryptoSportsFans will be based on these six cities & teams:`}</p>
      <div className="cities-cards">
        {citiesContent.cards.map((card, index) =>
          <CityCard card={card} key={`${index}-city-card`}/>
        )}
      </div>
    </div>
  );
};
export default Cities;
