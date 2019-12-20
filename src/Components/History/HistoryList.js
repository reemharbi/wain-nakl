import React, { Component } from "react";
import Navbar from "../Nav/Nav";
import { BoxLoading } from "react-loadingg";

class HistoryList extends Component {
  render() {
    return this.props.userHistory ? (
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <BoxLoading />
      </div>
    ) : (
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="history-container text-center">
          <h1>Something to list....</h1>
        </div>
      </div>
    );
  }
}

export default HistoryList;
