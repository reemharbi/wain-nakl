import React, { Component } from "react";
import Navbar from "../Nav/Nav";
import Suggestion from "./Suggestion";
import { BoxLoading } from "react-loadingg";
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MainComponent.css";

// show loading page while fetching information
const LoadingContainer = () => {
  return <BoxLoading />;
};
export class MainComponent extends Component {
  render() {
    //  
    // console.log("Main Component COORDS: ", this.props.resLat, this.props.resLon);
    // 

    // display suggestion's information and map
    return (
      <div>
        <div className="main-suggestion">
          <div>shows
            <Navbar />
          </div>
          <div className="suggestion-container">
            <Suggestion restaurants={this.props.restaurants} />
          </div>
        </div>
        <div className="map-container">
          {/* google map component */}
          <Map
            google={this.props.google}
            zoom={20}
            initialCenter={{
              lat: `${this.props.resLat}`,
              lng: `${this.props.resLon}`
            }}
            center={{
              lat: `${this.props.resLat}`,
              lng: `${this.props.resLon}`
            }}
          >
            <Marker
              google={this.props.google}
              position={{
                lat: `${this.props.resLat}`,
                lng: `${this.props.resLon}`
              }}
              icon={{
                url:
                  "https://i.postimg.cc/xdXCkVC4/marker-1-1s-128px.png",
                anchor: new this.props.google.maps.Point(32, 32),
                scaledSize: new this.props.google.maps.Size(80, 80)
              }}
            />
          </Map>
          <div className="another-suggestion">
            <Link
              to="/suggestion"
              className="another-suggestion-btn"
              onClick={this.props.apiCall}
            >
              اقتراح أخر
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// exporting loader page / api key as HOC 
export default GoogleApiWrapper({
  apiKey: "AIzaSyDhNIRrD0JHn5PNrN22tDnGuCwm4-jo8lk",
  LoadingContainer: LoadingContainer
})(MainComponent);
