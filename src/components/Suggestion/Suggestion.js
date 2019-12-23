import React, { Component } from "react";
import "./Suggestion.css";
import share from "../../apps/assets/images/upload.svg";
import like from "../../apps/assets/images/like.svg";
import photo from "../../apps/assets/images/photo.svg";
import map from "../../apps/assets/images/map.svg";

// display the restaurants details
export default class Suggestion extends Component {
  render() {
    return (
      <div>
        <div className="name">
          <h1 className="rest-name text-center">
            {this.props.restaurants.name}
          </h1>
        </div>
        <div className="rest-details text-center">
          <p className="rating rate">{this.props.restaurants.rating}</p>
          <p className="rating ten">/10</p>
          <p>|</p>
          <p className="category"> {this.props.restaurants.cat}</p>
        </div>
        <div className="flex-container">
          <a href={this.props.restaurants.link} target="_blank" rel="noopener noreferrer">
            <img src={map} style={{ height: "4rem" }} alt="map"></img>
          </a>
          <img
            src={photo}
            style={{ height: "4rem" }}
            alt="restaurant-images"
          ></img>
          <img src={like} style={{ height: "4rem" }} alt="like"></img>
          <img src={share} style={{ height: "4rem" }} alt="share"></img>
        </div>
      </div>
    );
  }
}
