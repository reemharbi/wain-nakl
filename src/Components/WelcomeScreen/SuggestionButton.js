import React, { Component } from "react";
import "./SuggestionButton.css";

export default class SuggestionButton extends Component {
    constructor(props) {
		super(props);
		this.state = {active: false};
	}

    handleClick = e => {
        this.setState({active: true});
        e.stopPropagation();
        console.log("handling Suggestion Click!");
      };

  render() {
    const animation = this.state.active ? 'btn' : ''
    return (
      <div>
        <button className={animation} onClick={this.handleClick.bind(this)}>اقترح</button>
      </div>
    );
  }
}
