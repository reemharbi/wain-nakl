import React from "react";
import logo from "../../apps/assets/images/wain-nakl.png";
import "./Welcome.css";
import { Link } from "react-router-dom";

// landing view 
const Welcome = () => {
  return (
    <div className="main-main">
      <div className="main">
        <div className="container">
          <div className="logo-container">
            <img
              className="logo animated bounceInUp"
              src={logo}
              alt="logo"
            ></img>
          </div>
          <p className="title animated pulse">وين ناكل؟</p>
         {/* this loads the suggestion view */}
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
