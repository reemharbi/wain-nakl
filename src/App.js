import React, { Component } from "react";
import Welcome from "./Components/WelcomeScreen/Welcome";
import MainComponent from "./Components/Suggestion/MainComponent";
import History from "./Components/History/HistoryList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.apiCall = this.apiCall.bind(this);
    this.state = {
      history: [],
      restaurants: [],
      userLat: null,
      userLon: null,
      resLat: null,
      resLon: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(p => {
      this.setUserCoordination(p).then(res => this.apiCall());
    });
  }

  setUserCoordination = async p =>
    await this.setState({
      userLat: p.coords.latitude,
      userLon: p.coords.longitude
    });

  apiCall() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://wainnakel.com/api/v1/GenerateFS.php?uid=${this.state.userLat},${this.state.userLon}&get_param=value`
    )
      .then(response => response.json())
      .then(resSuggestion => {
        this.setState({
          restaurants: resSuggestion,
          resLat: resSuggestion.Ulat,
          resLon: resSuggestion.Ulon
        });
        console.log(resSuggestion);
        console.log('ResLon: ',this.state.resLon);
        console.log('ResLat: ',this.state.resLat);
      })
      .catch(err => console.log(err.message));
  }

  render() {
    console.log(this.state.userLat);
    console.log(this.state.userLon);

    const myMap = () => {
      return (
        <MainComponent
          restaurants={this.state.restaurants}
          resLat={this.state.resLat}
          resLon={this.state.resLon}
        />
      );
    };

    const welcomePage = () => {
      return (
        <Welcome userLat={this.state.userLat} userLon={this.state.userLon} resLat={this.state.resLat} resLon={this.state.resLon} />
      );
    };

    const myHistory = () => {
      return <History userHistory={this.state.history} />;
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
