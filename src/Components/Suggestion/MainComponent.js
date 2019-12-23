import React, { Component } from "react";
import Navbar from "../Nav/Nav";
import Suggestion from "./Suggestion";
import { BoxLoading } from "react-loadingg";
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MainComponent.css";

const LoadingContainer = props => {
  return <BoxLoading />;
};
export class MainComponent extends Component {
  render() {
    const restaurant = [this.props.restaurants.name];
    return !restaurant.length === 0 ? (
      <BoxLoading />
    ) : (
      <div>
        <div className="main-suggestion">
          <div>
            <Navbar />
          </div>
          <div className="suggestion-container">
            <Suggestion restaurants={this.props.restaurants} />
          </div>
        </div>
        <div className="map-container">
          <Map
            google={this.props.google}
            zoom={20}
            initialCenter={{
              lat: `${this.props.userLat}`,
              lng: `${this.props.userLon}`
            }}
          >
            <Marker />
          </Map>
          <div className="another-suggestion">
            <Link to="/suggestion" className="another-suggestion-btn">
              اقتراح أخر
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDhNIRrD0JHn5PNrN22tDnGuCwm4-jo8lk",
  LoadingContainer: LoadingContainer
})(MainComponent);
