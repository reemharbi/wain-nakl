import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Navbar from "../Nav/Nav";
import Suggestion from "./Suggestion";
import { BoxLoading } from "react-loadingg";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 24.7900733,
      lng: 46.7012105
    },
    zoom: 20
  };
  render() {
    console.log('Restaurants Length: ',this.props.restaurants.length)
    return !this.props.restaurants === null ? (
      <BoxLoading className="loader" />
    ) : (
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <Suggestion restaurants={this.props.restaurants} />
        <div style={{ height: "80vh", width: "100%" }}>
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={24.7900733}
              lng={46.7012105}
              text="Reem's Office"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
