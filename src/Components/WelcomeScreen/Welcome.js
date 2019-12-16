import React, { Component } from "react";
import logo from "../../Assets/Images/wain-nakl.png";
import "./Welcome.css";
export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  handleSuggestionClick = e => {
    this.setState({ active: true });
    e.stopPropagation();
    console.log("handling Suggestion Click!");
  };

  render() {
    const animation = this.state.active ? "animated slideOutUp" : "";
    return (
      // <div className="main animated slideOutUp delay-5s">
      <div className={`main ${animation}`}>
        <div className="container">
          <img className="logo" src={logo} alt="logo"></img>
          <p className="title">وين ناكل؟</p>
        <button className='btn' onClick={this.handleSuggestionClick}>اقترح</button>
         </div>
      </div>
    );
  }
}
