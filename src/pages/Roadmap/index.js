import React from "react";
import "../../styles/roadmap.scss";
import { roadMapData } from "../../mockup";

const Roadmap = () => {
  const { pageTitle, description, roadmap } = roadMapData;
  return (
    <div className="roadmap">
      <div className="roadmap-header">
        <h1>{pageTitle}</h1>
        <p>{description}</p>
      </div>
      <div className="gradient-bg" />
      <div className="roadmap-content">
        {roadmap.map((data, index) => {
          return (
            <div className="road-map-component">
              <div className="map-indicator">
                <img
                  src={data.url}
                  alt={`map-data-${index}`}
                  className="indicator-icon"
                />
              </div>
              <div className="content">
                <h3>{data.title}</h3>
                <ul>
                  {data.list.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Roadmap;
