import React from "react";
import "../MarketMarker.css";

const MarketMarkerRed = ({ market, imageRed, onMarketClick, selected }) => (
  <img
    className={selected ? "market selected" : "market"}
    alt=""
    src={imageRed}
    
    onMouseDown={() => onMarketClick(market)}
  />
);

export default MarketMarkerRed;
