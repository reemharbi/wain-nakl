import React, { Component } from "react";
import logo from "../../Assets/Images/wain-nakl.png";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = getUserLocation => {
  return (
    <div className="main-main">
      <div className={`main`}>
        <div className="container">
          <div className="logo-container">
            <img
              className="logo animated bounceInUp"
              src={logo}
              alt="logo"
            ></img>
          </div>
          <p className="title animated pulse">وين ناكل؟</p>
          <Link
            to="/suggestion"
            className="btn animated fadeIn"
          >
            اقترح
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
