import React, { Component } from "react";
import resetCSS from "../reset.css";
import splashCSS from "./splash.css";

class PopularCarousel extends Component {
  constructor(props) {
    super(props)
  }

  translateX(event) {
    const container = document.getElementById("carousel-container");
    if (event.target.className === "fa fa-angle-right") {
      // container.style.transform = 'translateX(-100%)';
      container.scrollLeft = 1010
    } else {
      // container.style.transform = 'translateX(0%)';
      container.scrollLeft = -1010
    }
  }

  // handleScroll() {
  //   var sdegree = 0;
  //   sdegree++;
  //   var srotate = "translateX(" + sdegree + "%)";
  //   const ul = document.getElementById("carousel-ul");
  //   ul.style.transform = srotate;

  // }

  render() {
    return (
      <div className="splash-popular-full-container">
        <div className="splash-popular-inner-container">
          <div className="splash-popular-top-heading">
            <h1>Popular stables</h1>
            <a href="#">View all</a>
          </div>
          <div className="splash-popular-divider"></div>
          <div id="carousel-container" className="carousel-container" >
            <ul id="carousel-ul">
              <li id="first-li">
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li>
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li>
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li>
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li id="first-li">
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's2</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li>
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's2</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li>
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's2</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li>
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's2</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="splash-carousel-arrow-container">
            <div className="splash-carousel-right-arrow" onClick={this.translateX}><i class="fa fa-angle-right"></i></div>
          </div>
          <div className="splash-carousel-arrow-container2">
            <div className="splash-carousel-right-arrow2" onClick={this.translateX}><i class="fa fa-angle-left"></i></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularCarousel;