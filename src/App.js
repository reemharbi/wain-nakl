import React, { Component } from "react";
import Welcome from "./components/WelcomeScreen/Welcome";
import MainComponent from "./components/Suggestion/MainComponent";
import History from "./components/History/HistoryList";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
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

  // get user coordinates 
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setUserCoordination(position).then(res => this.apiCall());
    });
  }
  // waits for api response to store user coordinates in state
  setUserCoordination = async position =>
    await this.setState({
      userLat: position.coords.latitude,
      userLon: position.coords.longitude,
      userAcc: position.coords.accuracy
    });

    // use user coordinates to fetch restaurants' suggestions and details from api
  apiCall() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://wainnakel.com/api/v1/GenerateFS.php?uid=${this.state.userLat},${this.state.userLon}&get_param=value`
    )
      .then(response => response.json())
      .then(resSuggestion => {
        this.setState({
          restaurants: resSuggestion,
          resLat: resSuggestion.lat,
          resLon: resSuggestion.lon
        });
        console.log('APP ResSuggestion: ',resSuggestion);
        console.log('APP ResLon: ',this.state.resLon);
        console.log('APP ResLat: ',this.state.resLat);
      })
      .catch(err => console.log(err.message));
  }

  render() {
    console.log('APP UserLat: ',this.state.userLat);
    console.log('APP UserLon: ',this.state.userLon);
    console.log('APP User Accuracy: ',this.state.userAcc);

    const myMap = () => {
      return (
        <MainComponent
          restaurants={this.state.restaurants}
          resLat={this.state.resLat}
          resLon={this.state.resLon}
          apiCall={this.apiCall}
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
      // routes to render views 
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
