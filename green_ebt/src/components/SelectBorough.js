import React from "react";
// import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import '../App.css'
import Select, {Option, OptGroup} from 'rc-select';
import marketImg from "../images/market.jpg"


class SelectBorough extends React.Component {
  constructor() {
    super();
    this.state = {
      boroughs: [
        {
          name: "Select borough",
          value: ""
        },
        {
          name: "Bronx",
          value: "Bronx"
        },
        {
          name: "Brooklyn",
          value: "Kings"
        },
        {
          name: "Queens",
          value: "Queens"
        },
        {
          name: "Manhattan",
          value: "New York"
        },
        {
          name: "Staten Island",
          value: "Richmond"
        }
      ],
      selectedBorough: "",
      markets: []
    };
  }

  getMarketDetail = () => {
    return this.props.markets.map(market => {
      return (

        <div className='gridbox'>
          <li className='borderbottom'>
          <img className="cornImage"src="http://res.freestockphotos.biz/pictures/17/17207-illustration-of-an-ear-of-corn-pv.png"/>
            <p className="marketTitle"> {market.market_name} </p>
            <p>Location: {market.location} </p>
            <p>Operation Season: {market.operation_season} </p>
            <p>Hours: {market.operation_hours} </p>
            <p><a href={market.market_link} className="link">Website</a></p>
          <p>Accepts EBT: {market.snap_status === "Y" ? "Yes" : "No"} </p>
            <p>Phone Number: {market.phone} </p>
            <hr className='borderbottom' />
          </li>
        </div>
      );
    });
  };

  render() {
    
    return (
      <div>
        <div className='borough'>
        <div className='staticTitle'>
        <h2>Welcome to GreenEBT</h2>
        <img className="imgMarket" src={marketImg} />
        <p>Please Select a Borough</p>
        <div class="select-style">
        <select value={this.props.selectedBorough} onChange={this.props.handleSelect}>
          {this.state.boroughs.map((borough, index) => (
            <option
              disabled={index === 0}
              selected={index === 0}
              value={borough.value}

            >
              {borough.name}
            </option>
          ))}
        </select>
        </div>

        <h2>Welcome to GreenEBT</h2>
        <p>Please Select a Borough</p>

        <br /> 
        <div className="marketDescription">{this.getMarketDetail()}</div>
      </div>
    );
  }
}

export default SelectBorough;
