import React, { Component } from "react";
import "./Suggestion.css";
import share from '../../Assets/Images/upload.svg'
import like from '../../Assets/Images/like.svg'
import photo from '../../Assets/Images/photo.svg'
import map from '../../Assets/Images/map.svg'
export default class Suggestion extends Component {
  render() {
    return (
      <div>
        <div className="name">
          <h1 className="rest-name text-center">AlMuzaini's House</h1>
        </div>
        <div className="flex-container">
        <img src={map} style={{height:'4rem'}}></img>
        <img src={photo} style={{height:'4rem'}}></img>
        <img src={like} style={{height:'4rem'}}></img>
        <img src={share} style={{height:'4rem'}}></img>
        </div>
      </div>
    );
  }
}
