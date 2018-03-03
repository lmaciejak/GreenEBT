import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Switch, Route } from 'react-router-dom';
import About from "./components/About";
import Map from "./components/Map";
import SelectBorough from "./components/SelectBorough";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Map</Link>
          <Link to="/about">About Us</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={SelectBorough} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
