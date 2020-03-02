import React, { Component } from "react";
import resetCSS from "../reset.css";
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
            <ul>
              <li></li>
              <li></li>
              <li></li>
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