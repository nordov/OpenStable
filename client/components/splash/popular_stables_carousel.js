import React, { Component } from "react";
import resetCSS from "../reset.css";
import splashCSS from "./splash.css";

class PopularCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftArrowDisplay: 'none',
      rightArrowDisplay: 'shown'
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  translateX(event) {
    const container = document.getElementById("carousel-container");
    if (event.target.className === "splash-carousel-right-arrow" || event.target.id === "right>") {
      // container.style.transform = 'translateX(-100%)';
      if (container.scrollLeft === 0) {
        container.scrollLeft = 350;
        setTimeout(() => {
          container.scrollLeft = 1010;
        }, 180);
      } else {
        container.scrollLeft = 1010;
      }
      
    } else if (event.target.className === "fa-angle-left" || "splash-carousel-right-arrow2") {
      // container.style.transform = 'translateX(0%)';
      if (container.scrollLeft === 1010 || window.innerWidth > 1618 && container.scrollLeft === 760) {
        container.scrollLeft = -350;
        setTimeout(() => {
          container.scrollLeft = -1010;
        }, 180);
      } else {
        container.scrollLeft = -1010;
      }
    }
  }

  updateDimensions() {
    const container = document.getElementById("carousel-container");
    const rightArrow = document.getElementById("right-arr")
    const leftArrow = document.getElementById("left-arr")
    
    if (window.innerWidth > 765 && window.innerWidth < 1618) {
      if (container.scrollLeft >= 1010) {
        rightArrow.style.display = 'none'
      } else {
        rightArrow.style.display = 'flex';
        rightArrow.style.justifyContent = 'center';
      }

      if (container.scrollLeft === 0) {
        leftArrow.style.display = 'none'
      } else {
        leftArrow.style.display = 'flex';
        leftArrow.style.justifyContent = 'center';
      }
    } else if (window.innerWidth > 1618) {
      if (this.state.rightArrowDisplay === 'none') {
        rightArrow.style.display = 'none'
      } else {
        rightArrow.style.display = 'flex';
        rightArrow.style.justifyContent = 'center';
      }

      if (container.scrollLeft === 0) {
        leftArrow.style.display = 'none'
      } else {
        leftArrow.style.display = 'flex';
        leftArrow.style.justifyContent = 'center';
      }
    } else {
      rightArrow.style.display = 'none'
      leftArrow.style.display = 'none'
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }


  handleScroll() {
    const container = document.getElementById("carousel-container");
    const rightArrow = document.getElementById("right-arr")
    const leftArrow = document.getElementById("left-arr")
    if (window.innerWidth > 765 && window.innerWidth < 1618) {
      if (container.scrollLeft >= 1010) {
        rightArrow.style.display = 'none'
        this.setState({ rightArrowDisplay: 'none' })
      } else {
        rightArrow.style.display = 'flex';
        rightArrow.style.justifyContent = 'center';
        this.setState({ rightArrowDisplay: 'shown' })
      }

      if (container.scrollLeft === 0) {
        leftArrow.style.display = 'none'
        this.setState({ leftArrowDisplay: 'none' })
      } else {
        leftArrow.style.display = 'flex';
        leftArrow.style.justifyContent = 'center';
        this.setState({ leftArrowDisplay: 'shown' })
      }
    } else if (window.innerWidth > 1618) {
      if (container.scrollLeft >= 760) {
        rightArrow.style.display = 'none'
        this.setState({ rightArrowDisplay: 'none' })
      } else {
        rightArrow.style.display = 'flex';
        rightArrow.style.justifyContent = 'center';
        this.setState({ rightArrowDisplay: 'shown' })
      }

      if (container.scrollLeft === 0) {
        leftArrow.style.display = 'none'
        this.setState({ leftArrowDisplay: 'none' })
      } else {
        leftArrow.style.display = 'flex';
        leftArrow.style.justifyContent = 'center';
        this.setState({ leftArrowDisplay: 'shown' })
      }
    } else {
      rightArrow.style.display = 'none'
      leftArrow.style.display = 'none'
      this.setState({ rightArrowDisplay: 'none', leftArrowDisplay: 'none' })
    }
  }

  render() {
    return (
      <div className="splash-popular-full-container">
        <div className="splash-popular-inner-container">
          <div className="splash-popular-top-heading">
            <h1>Popular stables</h1>
            <a href="#">View all</a>
          </div>
          <div className="splash-popular-divider"></div>
          <div id="carousel-container" className="carousel-container" onScroll={this.handleScroll}>
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
            <div id="right-arr" className="splash-carousel-right-arrow" onClick={this.translateX}><i id="right>" className="fa fa-angle-right"></i></div>
          </div>
          <div className="splash-carousel-arrow-container2">
            <div id="left-arr" className="splash-carousel-right-arrow2" onClick={this.translateX}><i className="fa fa-angle-left"></i></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularCarousel;