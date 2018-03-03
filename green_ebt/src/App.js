import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Map from "./components/Map";
import MarketInfo from "./components/MarketInfo";

class App extends Component {
  state = {
    selectedMarket: null
  };

  onMarketClick = market => {
    this.setState({ selectedMarket: market });
  };

  render() {
    return (
      <div className="App">
        <div id="map-container">
          <Map onMarketClick={this.onMarketClick} />
        </div>
      </div>
    );
  }
}

export default App;
