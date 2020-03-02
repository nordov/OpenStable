import React, { Component } from "react";
import resetCSS from '../reset.css';
import splashCSS from './splash.css';
import SignUpModal from './signup_modal';
import SignInModal from './signin_modal';
import PopularCarousel from './popular_stables_carousel';
import FeaturedAreas from './featured_areas';
import NavDropdown from './nav_dropdown';
import Footer from './footer';
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";

const { IS_LOGGED_IN } = Queries;

class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSignUpModal: false,
      showSignInModal: false,
      showNavDropDown: false
    }
    
    this.showSignUpModal = this.showSignUpModal.bind(this);
    this.showSignInModal = this.showSignInModal.bind(this);
    this.showNavDropDown = this.showNavDropDown.bind(this);
    this.closeNavDropdown = this.closeNavDropdown.bind(this);
  }

  showSignUpModal() {
    this.setState({ showSignUpModal: true });
  }

  showSignInModal() {
    this.setState({ showSignInModal: true });
  }

  showNavDropDown() {
    this.setState({ showNavDropDown: true });
  }

  closeNavDropdown(event) {
    if(this.state.showNavDropDown && event.target.className !== "splash-drop-noclose") {
      this.setState({ showNavDropDown: false });
    }
  }

  loggedIn() {
    if (localStorage.getItem("auth-token")) {
      return (
        <div className="splash-top-bar">
          <div className="splash-left-side">
            <div className="splash-logo-container">
              <a href="/">
                <img
                  src="/static/images/openstable-logo.png"
                  width="160"
                  className="splash-logo"
                ></img>
              </a>
            </div>
            <div className="splash-location-container">
              <div className="splash-location-spacing">
                <img src="/static/images/marker.png" width="19"></img>
                <img
                  src="/static/images/upside-down-caret.png"
                  width="12"
                ></img>
              </div>
            </div>
          </div>
          <div className="splash-auth-container">
            <img
              className="splash-auth-calendar"
              src="/static/images/signedin-calendar.png"
              width="25"
            ></img>
            <div className="splash-logged-divider"></div>
            {this.state.showNavDropDown ? <NavDropdown /> : null}
            <p onClick={this.showNavDropDown}>
              Hi, {localStorage.getItem("fname")}
            </p>
            <img
              className="splash-auth-caret"
              src="static/images/upside-down-caret.png"
              height="12"
              onClick={this.showNavDropDown}
            ></img>
            {/* { this.state.showNavDropDown ? <NavDropdown /> : null } */}
          </div>
        </div>
      );
    } else {
      return (
        <div className="splash-top-bar">
          <div className="splash-left-side">
            <div className="splash-logo-container">
              <a href="/">
                <img
                  src="/static/images/openstable-logo.png"
                  width="160"
                  className="splash-logo"
                ></img>
              </a>
            </div>
            <div className="splash-location-container">
              <div className="splash-location-spacing">
                <img src="/static/images/marker.png" width="19"></img>
                <img
                  src="/static/images/upside-down-caret.png"
                  width="12"
                ></img>
              </div>
            </div>
          </div>
          <div className="splash-auth-container">
            <button onClick={this.showSignUpModal}>Sign up</button>
            <a href="#" onClick={this.showSignInModal}>
              Sign in
            </a>
          </div>
        </div>
      );
    }
  }

  render() {
    const signUpModal = <SignUpModal closeModal={() => this.setState({ showSignUpModal: false })} />
    const signInModal = <SignInModal 
                          closeModal={() => this.setState({ showSignInModal: false })} 
                          changeModal={() => this.setState({ showSignInModal: false, showSignUpModal: true })}
                        />

    return (
      <div className="app" onClick={this.closeNavDropdown}>
        <div className="splash">
          {this.loggedIn()}
          <div className="splash-image-animation-container">
            <img
              className="splash-img-anim1"
              src="/static/images/horses1.jpg"
            ></img>
            <img
              className="splash-img-anim2"
              src="/static/images/horses2.jpg"
            ></img>
            <img
              className="splash-img-anim3"
              src="/static/images/horses3.jpg"
            ></img>
            <div className="splash-animation-text-container">
              <h1>Find your stable for any occasion</h1>
              <form className="splash-anim-selects">
                <div className="splash-anim-select-container">
                  <div className="splash-anim-select con1">
                    <img src="/static/images/splash-calendar.png"></img>
                    <div className="splash-anim-text-p">
                      <p>Aug 8, 2020</p>
                      <img
                        src="/static/images/upside-down-caret.png"
                        width="12"
                      ></img>
                    </div>
                  </div>
                  <div className="splash-anim-select con2">
                    <img src="/static/images/splash-clock.png"></img>
                    <select defaultValue={"19:00"}>
                      <option value="00:00">12:00AM</option>
                      <option value="00:30">12:30AM</option>
                      <option value="01:00">1:00AM</option>
                      <option value="01:30">1:30AM</option>
                      <option value="02:00">2:00AM</option>
                      <option value="02:30">2:30AM</option>
                      <option value="03:00">3:00AM</option>
                      <option value="03:30">3:30AM</option>
                      <option value="04:00">4:00AM</option>
                      <option value="04:30">4:30AM</option>
                      <option value="05:00">5:00AM</option>
                      <option value="05:30">5:30AM</option>
                      <option value="06:00">6:00AM</option>
                      <option value="06:30">6:30AM</option>
                      <option value="07:00">7:00AM</option>
                      <option value="07:30">7:30AM</option>
                      <option value="08:00">8:00AM</option>
                      <option value="08:30">8:30AM</option>
                      <option value="09:00">9:00AM</option>
                      <option value="09:30">9:30AM</option>
                      <option value="10:00">10:00AM</option>
                      <option value="10:30">10:30AM</option>
                      <option value="11:00">11:00AM</option>
                      <option value="11:30">11:30AM</option>
                      <option value="12:00">12:00PM</option>
                      <option value="12:30">12:30PM</option>
                      <option value="13:00">1:00PM</option>
                      <option value="13:30">1:30PM</option>
                      <option value="14:00">2:00PM</option>
                      <option value="14:30">2:30PM</option>
                      <option value="15:00">3:00PM</option>
                      <option value="15:30">3:30PM</option>
                      <option value="16:00">4:00PM</option>
                      <option value="16:30">4:30PM</option>
                      <option value="17:00">5:00PM</option>
                      <option value="17:30">5:30PM</option>
                      <option value="18:00">6:00PM</option>
                      <option value="18:30">6:30PM</option>
                      <option value="19:00">7:00PM</option>
                      <option value="19:30">7:30PM</option>
                      <option value="20:00">8:00PM</option>
                      <option value="20:30">8:30PM</option>
                      <option value="21:00">9:00PM</option>
                      <option value="21:30">9:30PM</option>
                      <option value="22:00">10:00PM</option>
                      <option value="22:30">10:30PM</option>
                      <option value="23:00">11:00PM</option>
                      <option value="23:30">11:30PM</option>
                    </select>
                    <div className="splash-anim-text-p">
                      <p>7:00 PM</p>
                      <img
                        src="/static/images/upside-down-caret.png"
                        width="12"
                      ></img>
                    </div>
                  </div>
                  <div className="splash-anim-select con3">
                    <img src="/static/images/splash-person.png"></img>
                    <select defaultValue={"selectedGroup"}>
                      <option>1 person</option>
                      <option value="selectedGroup">2 people</option>
                      <option>3 people</option>
                      <option>4 people</option>
                      <option>5 people</option>
                      <option>6 people</option>
                      <option>7 people</option>
                      <option>8 people</option>
                      <option>9 people</option>
                      <option>10 people</option>
                      <option>Larger Party</option>
                    </select>
                    <div className="splash-anim-text-p">
                      <p>1 person</p>
                      <img
                        src="/static/images/upside-down-caret.png"
                        width="12"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="splash-anim-input-container">
                  <img src="/static/images/splash-search.png" height="25"></img>
                  <input type="value" placeholder="Location"></input>
                </div>
                <button className="splash-anim-form-submit" type="submit">
                  Let's go
                </button>
              </form>
            </div>
          </div>
          {this.state.showSignUpModal ? signUpModal : null}
          {this.state.showSignInModal ? signInModal : null}
          <PopularCarousel />
          <FeaturedAreas />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Splash;
