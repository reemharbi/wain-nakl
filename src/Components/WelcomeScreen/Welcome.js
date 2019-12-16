import React from "react";
import logo from "../../Assets/Images/wain-nakl.png";
import "./Welcome.css";
import Suggestion from "./SuggestionButton";

export default function Welcome() {
  
  return (
    // <div className="main animated slideOutUp delay-5s">
    <div className="main">
      <div className="container">
        <img className="logo" src={logo} alt="logo"></img>
        <p className="title">وين ناكل؟</p>
        <Suggestion />
      </div>
    </div>
  );
}
