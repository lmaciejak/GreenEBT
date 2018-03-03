import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import appleImage from "../images/red-apple.png";
import MarketMarker from "./MarketMaker";

const defaultOptions = {
  defaultCenter: { lat: 40.7128, lng: -73.9 },
  defaultZoom: 12
};

class Map extends React.Component {
  state = {
    mapOptions: defaultOptions,
    markets: [],
    selectedMarketID: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    // Since this component does not depend on props, we only rerender when state changes
    // So we avoid unneeded renders when parent (App) component rerenders
    return this.state !== nextState;
  }

  componentDidMount() {
    axios
      .get(
        "https://data.ny.gov/resource/7jkw-gj56.json?county='Queens'  OR county='Kings' OR county='New York' OR county='Richmond' OR county='Bronx'"
      )
      .then(res => {
        console.log("res.data", res.data);
        this.setState({
          markets: res.data.filter(
            market => market.location && market.location_points.coordinates
          )
        });
      })
      .catch(err => {
        console.log("error fetching markets");
      });
  }

  onMapChange = options => {
    this.setState({
      mapOptions: options
    });
  };

  onMarketClick = market => {
    this.props.onMarketClick(market);
    this.setState({ selectedMarketID: market.unique_key });
  };

  render() {
    const { markets, mapOptions, selectedMarketID } = this.state;
    const { zoom } = mapOptions;

    const image =
      zoom >= 16 ? appleImage : zoom >= 14 ? appleImage : appleImage;


    console.log("this.state.markets", this.state.markets);
    // console.log('this.state.markets[0].location_points', this.state.markets[0].location_points.coordinates)

    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCQTUR2rqPrkIsOIBh7G_KjKE74P4kcKX0"
        }}
        onChange={this.onMapChange}
        {...defaultOptions}
        {...mapOptions}
      >
        {markets.map(market => (
          <MarketMarker
            market={market}
            image={image}
            selected={market.unique_key === selectedMarketID}
            onMarketClick={() => this.onMarketClick(market)}
            key={market.unique_key}
            lat={market.location_points.coordinates[1]}
            lng={market.location_points.coordinates[0]}
          />
        ))}
      </GoogleMapReact>
    );
  }
}

export default Map;
