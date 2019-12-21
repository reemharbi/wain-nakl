import React, { Component } from "react";
import Welcome from "./Components/WelcomeScreen/Welcome";
import Map from "./Components/Map/SuggestionPage";
import History from './Components/History/HistoryList';
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      history: [],
      restaurants: [],
      userLat: 0,
      userLon: 0,
      locRendered: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      redirect: false,
      redirectId: 0
    };
  }

  userCoordinates = navigator.geolocation.getCurrentPosition(p =>
    this.setState({ userLat: p.coords.latitude, userLon: p.coords.longitude })
  );

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://wainnakel.com/api/v1/GenerateFS.php?uid=${this.state.userLat},${this.state.userLon}&get_param=value`
    )
      .then(response => response.json())
      .then(resSuggestion => this.setState({ restaurants: resSuggestion }));
  }

  render() {
    console.log("Latitude:", this.state.userLat);
    console.log("Longitude:", this.state.userLon);
    console.log('History: ', this.state.history);
    
    const myMap = () => {
      return (
        <Map
          restaurants={this.state.restaurants}
          userLat={this.state.userLat}
          userLon={this.state.userLon}
        />
      );
    };

    const welcomePage = () => {
      return (
        <Welcome userLat={this.state.userLat} userLon={this.state.userLon} />
      );
    };

    const myHistory = () => {
      return (
        <History userHistory={this.state.history} />
      );
    };

    return (
      <HashRouter>
        <div className="App">
          <Route exact path="/" render={welcomePage} />
          <Route exact path="/suggestion" render={myMap} />
          <Route exact path="/history" render={myHistory} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
