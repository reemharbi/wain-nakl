import React, { Component } from "react";
import Welcome from "./Components/WelcomeScreen/Welcome";
import Map from "./Components/Map/SuggestionPage";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
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
   this.setState( 
     {userLat: p.coords.latitude, 
    userLon: p.coords.longitude
   })
  );
 
  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://wainnakel.com/api/v1/GenerateFS.php?uid=${this.state.userLat},${this.state.userLon}&get_param=value`
    )
      .then(response => response.json())
      .then(resSuggestion => this.setState({ restaurants: resSuggestion }));
  }


  getUserLocation = async () => {
    await navigator.geolocation.getCurrentPosition(this.showPosition);
  };

  showPosition = position => {
    this.setState(
      {
        userLat: position.coords.latitude,
        userLon: position.coords.longitude,
        locRendered: true
      },
      newState => console.log("hi", newState)
    );
  };

  render() {
    console.log("Latitude:", this.state.userLat);
    console.log("Longitude:", this.state.userLon);
    const MyMap = () => {
      return (
        <Map
          restaurants={this.state.restaurants}
          getUserLocation={this.getUserLocation}
        />
      );
    };
    const WelcomePage = () => {
      return <Welcome getUserLocation={this.getUserLocation} />;
    };
    return (
      <HashRouter>
        <div className="App">
          <Route exact path="/" render={WelcomePage} />
          <Route exact path="/suggestion" render={MyMap} />
        </div>
      </HashRouter>
    );
  }
}
export default App;
