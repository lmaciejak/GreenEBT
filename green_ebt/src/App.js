import { Link, Switch, Route } from "react-router-dom";
import About from "./components/About";
import SelectBorough from "./components/SelectBorough";
import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map.js";
// import MarketInfo from "./components/MarketInfo.js";
import MapAndBoro from "./components/MapAndBoro.js";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Map</Link> {"  "}
          <Link to="/about">About Us</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={MapAndBoro} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
