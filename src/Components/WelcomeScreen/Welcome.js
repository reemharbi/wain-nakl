import React, { Component } from "react";
import logo from "../../Assets/Images/wain-nakl.png";
import Map from "../Map/Map";
import "./Welcome.css";
import { Link } from "react-router-dom";

export default class Welcome extends Component {
  // constructor(){
  //   super();
  //   this.state = { active: false };
  // }

  //   handleSuggestionClick = e => {
  //       e.stopPropagation();
  //       this.setState({ active: true });
  //       console.log('Handle Suggestion Button Clicked!')
  //       return(
  //         <Map />
  //       )
  //  };

  render() {
    // const animation = this.state.active ? "animated" : "";
    return (
      <div className='main-main'>
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
            <Link to="/suggestion" className="btn animated fadeIn">
              اقترح
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
