import React, { Component } from "react";
import Welcome from "./Components/WelcomeScreen/Welcome";
import Map from "./Components/Map/Map";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Nav/Nav";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: []
    };
  }

  componentDidMount(){

  }
  
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/suggestion" component={Map} />
        </div>
      </HashRouter>
    );
  }
}
export default App;
