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
    fetch("https://cors-anywhere.herokuapp.com/https://wainnakel.com/api/v1/GenerateFS.php?uid=24.7900733,46.7012105&get_param=value")
    .then(response => response.json())
    .then(resSuggestion => this.setState({restaurants: resSuggestion}))
  }

  
  render() {
    const MyMap = () => {
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
