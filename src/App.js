import React, { Component } from "react";
import Welcome from "./Components/WelcomeScreen/Welcome";
import Map from "./Components/Map/Map";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Map />
      </div>
    );
  }
}
