import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";

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

  handleSelect = e => {
    this.setState({
      selectedBorough: e.target.value
    });
    console.log(this.state.selectedBorough);
    console.log("e.target.value", e.target.value);
    axios
      .get(
        `https://data.ny.gov/resource/7jkw-gj56.json?county=${e.target.value}`
      )
      .then(res => {
        console.log("response", res);
        this.setState({
          markets: res.data
        });
      });
  };

  getMarketDetail = () => {
    return this.state.markets.map(market => {
      return (
        <div>
          <li>
            Name:{market.market_name}
            Location: {market.location}
            Operation Season:{market.operation_season}
            Hours: {market.operation_hours}
            Website: {market.market_link}
            Accepts EBT:{market.snap_status}
            Phone Number:{market.phone}
          </li>
        </div>
      );
    });
  };

  render() {
    const { markets, boroughs, selectedBorough, county } = this.state;
    console.log(this.state);
    return (
      <div>
        <select value={selectedBorough} onChange={this.handleSelect}>
          {boroughs.map((borough, index) => (
            <option
              disabled={index === 0}
              selected={index === 0}
              value={borough.value}
            >
              {borough.name}
            </option>
          ))}
        </select>
        <div>{this.getMarketDetail()}</div>
      </div>
    );
  }
}

export default SelectBorough;
