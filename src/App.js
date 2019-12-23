import React, { Component } from "react";
import Welcome from "./Components/WelcomeScreen/Welcome";
import MainComponent from "./Components/Suggestion/MainComponent";
import History from './Components/History/HistoryList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      history: [],
      restaurants: [],
      userLat: null,
      userLon: null,
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
     
    const myMap = () => {
      return (
        <MainComponent
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
      <Router>
        <div className="App">
          <Route exact path="/" render={welcomePage} />
          <Route exact path="/suggestion" render={myMap} />
          <Route exact path="/history" render={myHistory} />
        </div>
      </Router>
    );
  }
}

export default App;
