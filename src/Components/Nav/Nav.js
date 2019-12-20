import React, { Component } from "react";
import burger from "../../Assets/Images/bars-solid.svg";
import history from "../../Assets/Images/history.svg";
import "./Nav.css";
import logo from "../../Assets/Images/wain-nakl.png";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-container navbar navbar-fixed-top">
        <div className="item hstry">
          <a className="nav-title" href="/">
            <img style={{ height: "3rem" }} src={history} alt='history'></img>
          </a>
        </div>
        <div className="nav-item text-center">
          <a className="nav-title" href="/">
            وين ناكل
          </a>
          <a className="nav-title" href="/">
            <img style={{ height: "4rem" }} src={logo} alt='logo'></img>
          </a>
        </div>
        <div className="item brgr">
          <a className="nav-title" href="/">
            <img style={{ height: "3rem" }} src={burger} alt='burger'></img>
          </a>
        </div>
      </div>
    );
  }
}
