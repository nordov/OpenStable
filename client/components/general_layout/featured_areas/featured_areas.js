import React, { Component } from "react";
//import resetCSS from "../reset.css";
import featuredAreasCSS from "./featured_areas.css";
import { Link } from 'react-router-dom';

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
                  <Link className="overlay" to="/bayarea" to="/bayarea">
                    <h3>Marin Headlands</h3>
                    <p>stables</p>
                  </Link>
                </li>
                <li>
                  <img src="/static/images/chicago.jpeg"></img>
                  <Link className="overlay" to="/bayarea">
                    <h3>Golden Gate Park</h3>
                    <p>stables</p>
                  </Link>
                </li>
                <li id="featured-last-img">
                  <img src="/static/images/losangeles.jpeg"></img>
                  <Link className="overlay" to="/bayarea">
                    <h3>Richmond / San Pablo</h3>
                    <p>stables</p>
                  </Link>
                </li>
              </div>
              <div className="featured-li-ele featured-li-ele-second">
                <li id="featured-first-img">
                  <img src="/static/images/sanfrancisco.jpeg"></img>
                  <Link className="overlay" to="/bayarea">
                    <h3>Oakland Hills / Tilden</h3>
                    <p>stables</p>
                  </Link>
                </li>
                <li>
                  <img src="/static/images/miami.jpeg"></img>
                  <Link className="overlay" to="/bayarea">
                    <h3>Alemeda / Hayward</h3>
                    <p>stables</p>
                  </Link>
                </li>
                <li id="featured-last-img">
                  <img src="/static/images/lasvegas.jpeg"></img>
                  <Link className="overlay" to="/bayarea">
                    <h3>South San Francisco</h3>
                    <p>stables</p>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="splash-featured-text-container">
            <div>
              <Link to="/bayarea"><p>Marin Headlands</p></Link>
              <Link to="/bayarea"><p>Mill Valley / San Rafael</p></Link>
            </div>
            <div>
              <Link to="/bayarea"><p>Richmond / San Pablo</p></Link>
              <Link to="/bayarea"><p>Oakland Hills / Tilden</p></Link>
            </div>
            <div>
              <Link to="/bayarea"><p>Alemeda / Hayward</p></Link>
              <Link to="/bayarea"><p>South San Francisco</p></Link>
            </div>
            <div>
              <Link to="/bayarea"><p>Daly City / Merced</p></Link>
              <Link to="/bayarea"><p>Golden Gate Park</p></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedAreas;
