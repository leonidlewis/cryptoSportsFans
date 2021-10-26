import "../../styles/roadmap.scss";
const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmap-header">
        <h1>Roadmap</h1>
        <p>
          We have planned this out for a long time, and as described above, we
          have a lot of fun “utility,” gaming and rewards to offer. But the fun
          doesn’t stop there - other ideas are still in the game plan, and will
          be revealed overtime. For now, a sneak peak at what we’re working on
          in the short term can be found below.
        </p>
      </div>
      <div className="gradient-bg" />
      <div className="roadmap-content">
        <div className="road-map-component">
          <div className="map-indicator">
            <div className="percent">
              <p>14%</p>
            </div>
            <div className="line"/>
          </div>
          <div className="content">
            <h3>Pre- Launch - December 1, 2021:</h3>
            <ul>
              <li>
                Reveal more art and sample CryptoSportsFans through this site,
                Discord and social media.
              </li>
              <li>
                Limited pre-sale of random CryptoSportsFans and free drops to
                influencers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Roadmap;
