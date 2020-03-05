import React, { Component } from "react";
//import resetCSS from "../reset.css";
import splashCSS from "./splash.css";

class FeaturedAreas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-featured-full-container">
        <div className="splash-featured-inner-container">
          <div className="splash-featured-top-heading">
            <h1>Featured Areas</h1>
          </div>
          <div className="splash-featured-divider"></div>
          <div className="featured-cities-container">
            <ul className="featured-random-ul">
              <div className="featured-li-ele featured-li-ele-first">
                <li id="featured-first-img">
                  <img src="/static/images/newyork.jpeg"></img>
                  <div className="overlay">
                    <h3>New York Area</h3>
                    <p>stables</p>
                  </div>
                </li>
                <li>
                  <img src="/static/images/chicago.jpeg"></img>
                  <div className="overlay">
                    <h3>Chicago</h3>
                    <p>stables</p>
                  </div>
                </li>
                <li id="featured-last-img">
                  <img src="/static/images/losangeles.jpeg"></img>
                  <div className="overlay">
                    <h3>Los Angeles</h3>
                    <p>stables</p>
                  </div>
                </li>
              </div>
              <div className="featured-li-ele featured-li-ele-second">
                <li id="featured-first-img">
                  <img src="/static/images/sanfrancisco.jpeg"></img>
                  <div className="overlay">
                    <h3>San Francisco</h3>
                    <p>stables</p>
                  </div>
                </li>
                <li>
                  <img src="/static/images/miami.jpeg"></img>
                  <div className="overlay">
                    <h3>Miami</h3>
                    <p>stables</p>
                  </div>
                </li>
                <li id="featured-last-img">
                  <img src="/static/images/lasvegas.jpeg"></img>
                  <div className="overlay">
                    <h3>Las Vegas</h3>
                    <p>stables</p>
                  </div>
                </li>
              </div>
            </ul>
          </div>
          <div className="splash-featured-text-container">
            <div>
              <p>Atlanta</p>
              <p>Los Angelos</p>
            </div>
            <div>
              <p>Houston</p>
              <p>San Francisco</p>
            </div>
            <div>
              <p>New York</p>
              <p>Miami</p>
            </div>
            <div>
              <p>Chicago</p>
              <p>Las Vegas</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedAreas;
