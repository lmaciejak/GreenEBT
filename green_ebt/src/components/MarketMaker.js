import React from "react";
import "../MarketMarker.css";

const MarketMarker = ({ market, image, onMarketClick, selected }) => (
  <img
    className={selected ? "market selected" : "market"}
    alt=""
    src={image}
    
    onMouseDown={() => onMarketClick(market)}
  />
);

export default MarketMarker;
