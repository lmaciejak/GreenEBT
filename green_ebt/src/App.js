import { Link, Switch, Route } from "react-router-dom";
import About from "./components/About";
import SelectBorough from "./components/SelectBorough";
import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map.js";
// import MarketInfo from "./components/MarketInfo.js";
import MapAndBoro from "./components/MapAndBoro.js";
import Title from "./components/Title";

import Css from "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        
        <div className='burger'>
        <label id="menu-toggle"> ☰ </label>
        <input type="checkbox" id="menu-toggle" />
  
          <ul className='nav'>
          <li className='logo' >GreenEBT</li>
          <div className='two'>
          <li className='li'><Link id='link' to="/">Map</Link></li> 
          {"  "}
          <li className='li'><Link id='link' to="/about">About Us</Link></li>
          </div>
          </ul>
        </div>

    


        <Switch>
          <Route exact path="/" component={MapAndBoro} />
          <Route path="/about" component={About} />
        </Switch>
        <Title />
      </div>
    );
  }
}

export default App;
