import React, { Component } from "react";
import Navbar from "../Nav/Nav";
import Suggestion from "./Suggestion";
import { BoxLoading } from "react-loadingg";
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./Map.css";

const LoadingContainer = props => {
  return <BoxLoading />;
};
export class SuggestionPage extends Component {
  state = {
    data: [],
    userLat: 0,
    userLon: 0,
    locRendered: false,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    redirect: false,
    redirectId: 0
}

getUserLocation = () => {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition)
  }
}

showPosition = position => {
  this.setState({
      userLat: position.coords.latitude,
      userLon: position.coords.longitude,
      locRendered: true
  })
}
  render() {
    const restaurant = [this.props.restaurants.name];
    console.log(this.props.restaurants);
    console.log("Restaurants Length: ", restaurant.length);

    return !restaurant.length === 0 ? (
      <BoxLoading />
    ) : (
      <div>
        <div className="main-suggestion">
          <div><Navbar /></div>
          <div className="suggestion-container">
            <Suggestion restaurants={this.props.restaurants} />
          </div>
        </div>
        <div className="map-container">
          <Map
            google={this.props.google}
            zoom={20}
            initialCenter={{ lat: 24.753717, lng: 46.611116 }}
          >
            <Marker
            // position={{ lat: 24.7900733, lng: 46.7012105 }}
            />
          </Map>
          <div className="another-suggestion">
            <Link to="/suggestion" className="another-suggestion-btn">
             اقترح أخر
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
})(SuggestionPage);
