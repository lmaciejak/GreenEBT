import { Link, Switch, Route } from 'react-router-dom';
import About from "./components/About";
import SelectBorough from "./components/SelectBorough";
import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import MarketInfo from "./components/MarketInfo.js";

class App extends Component {
  state = {
    selectedMarket: null
  };

  onMarketClick = market => {
    this.setState({ selectedMarket: market });
  };

  render() {
    const { selectedMarket } = this.state;
    console.log("selected: ", selectedMarket);
    return (
      <div className="App">
        <nav>
          <Link to="/">Map</Link>
          <Link to="/about">About Us</Link>
        </nav>
       <Switch>
          <Route exact path="/" component={SelectBorough} />
          <Route path="/about" component={About} />
        </Switch>

      <div id="map-container">
          <Map onMarketClick={this.onMarketClick} />
        </div>
        <div id="market-info">
          {selectedMarket ? (
            MarketInfo(selectedMarket)
          ) : (
            <strong> Choose a farmers' market </strong>
          )}
        </div>
      </div>
);
  }
}

export default App;
