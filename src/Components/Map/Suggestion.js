import React, { Component } from "react";
import "./Suggestion.css";
import share from "../../Assets/Images/upload.svg";
import like from "../../Assets/Images/like.svg";
import photo from "../../Assets/Images/photo.svg";
import map from "../../Assets/Images/map.svg";
export default class Suggestion extends Component {
  render() {
    console.log("Suggestion Restaurants: ", this.props.restaurants);
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
          <a href={this.props.restaurants.link} target="_blank">
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
