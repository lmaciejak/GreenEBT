import React, { Component } from "react";

import appleImageM from "../images/green_apple_medium.png";
import appleImageredM from "../images/red_apple_medium.png";

const Legend = () => {
  return (
    <div id="legend">
      <h3>Legend</h3>
      <div className="EBT">
        <img src={appleImageM} /> <h4>Accepts EBT/SNAP</h4>
      </div>
      <div className="NoEBT">
        <img src={appleImageredM} /> <h4>Does Not Accept EBT/SNAP</h4>
      </div>
    </div>
  );
};

export default Legend;
