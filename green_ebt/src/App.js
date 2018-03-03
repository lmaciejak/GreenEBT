import React, { Component } from 'react';
// import logo from './logo.svg';
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
    return <div className="App">
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
      </div>;
  }
}

export default App;
