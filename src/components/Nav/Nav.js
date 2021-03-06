import React, { Component } from "react";
import burger from "../../apps/assets/images/bars-solid.svg";
import history from "../../apps/assets/images/history.svg";
import "./Nav.css";
import logo from "../../apps/assets/images/wain-nakl.png";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-container navbar navbar-fixed-top">
        <div className="item hstry">
          <Link to="/history" className="nav-title">
            <img style={{ height: "3rem" }} src={history} alt="history"></img>
          </Link>
        </div>
        <div className="nav-item text-center">
          <a className="nav-title" href="/wain-nakl">
            وين ناكل؟
          </a>

          <a className="nav-title" href="/wain-nakl">
            <img style={{ height: "4rem" }} src={logo} alt="logo"></img>
          </a>
        </div>
        <div className=" item brgr">
          <a
            className="nav-title"
            href="https://www.linkedin.com/in/reemalharbi/"
            target="_blank" rel="noopener noreferrer"
          >
            <img style={{ height: "3rem" }} src={burger} alt="burger"></img>
          </a>
        </div>
      </div>
    );
  }
}
