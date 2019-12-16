import React, { Component } from "react";
import "./SuggestionButton.css";

export default class SuggestionButton extends Component {
    handleClick = e => {
        e.stopPropagation();
        console.log("handling Suggestion Click!");
      };

  render() {
    return (
      <div>
        <button className="btn" onClick={this.handleClick}>اقترح</button>
      </div>
    );
  }
}
