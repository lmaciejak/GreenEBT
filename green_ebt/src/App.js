import { Link, Switch, Route } from "react-router-dom";
import axios from 'axios';
import About from "./components/About";
import SelectBorough from "./components/SelectBorough";
import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map.js";
// import MarketInfo from "./components/MarketInfo.js";
import MapAndBoro from "./components/MapAndBoro.js";
import Title from "./components/Title";

<<<<<<< HEAD
import Copyright from './components/Copyright';
import Css from "./App.css"
=======
>>>>>>> 273848345756c224a32f1daaa2fe18e6d747603b

class App extends Component {

  constructor() {
    super();
    this.state = {
      mapOptions: {
        defaultCenter: { lat: 40.7128, lng: -73.9 },
        defaultZoom: 11
      },
      markets: [],
      selectedBorough: ""
    }
  }

  handleSelect = (e) => {
    const { selectedBorough, mapOptions } = this.state

    const targetVal = e.target.value

    console.log("TARGET", targetVal)

    if (targetVal === 'Richmond'){ 
      this.setState({
        selectedBorough: targetVal, 
        mapOptions: {center: { lat: 40.57953, lng: -74.15020 },
        zoom: 12
      }});
    }
      else if (targetVal === 'Queens'){ 
        this.setState({
          selectedBorough: targetVal, 
          mapOptions: {  center: { lat: 40.68149, lng: -73.83652 },
          zoom: 11.6
        }});
      } 
      else if (targetVal === 'New York'){ 
        this.setState({
          selectedBorough: targetVal, 
          mapOptions: {    center: { lat: 40.77306, lng: -73.97125 },
          zoom: 12
        }});
      } 
      else if (targetVal === 'Bronx'){ 
        this.setState({
          selectedBorough: targetVal, 
          mapOptions:  { center: { lat: 40.84985, lng: -73.86641 },
          zoom: 5
        }});
      } 
      else if (targetVal === 'Kings'){ 
        this.setState({
          selectedBorough: targetVal, 
          mapOptions:  { center: {lat: 40.6482, lng: -73.9442 },
            zoom: 12
        }});
      } 

    console.log("targetVal", targetVal);
    console.log('hello')
    axios
      .get(
        `https://data.ny.gov/resource/7jkw-gj56.json?county=${e.target.value}&$order=market_name ASC`
      )
      .then(res => {
        console.log("response", res);
        this.setState({
          markets: res.data
        });
      });
  };


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
          <Route exact path="/" render={() => {
            return( <MapAndBoro mapOptions={this.state.mapOptions} 
                                handleSelect={this.handleSelect} 
                                markets={this.state.markets}
                                selectedBorough={this.state.selectedBorough} /> )
          }} />
          <Route path="/about" component={About} />
        </Switch>
        <Title />
        <Copyright />
      </div>
    );
  }
}

export default App;
