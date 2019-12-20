import React, { Component } from "react";
import Welcome from "./Components/WelcomeScreen/Welcome";
import Map from "./Components/Map/Map";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import "./App.css";


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
    const MyMap = (props) => {
       return <Map restaurants={this.state.restaurants} />
     }

    return  (
      <HashRouter>
        <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/suggestion" render={MyMap} />
        </div>
      </HashRouter>
    );
  }
}
export default App;
