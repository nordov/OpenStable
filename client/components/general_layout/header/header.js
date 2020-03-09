import React, { Component } from "react";
import mainCSS from '../main/main';
import headerCSS from './header.css';
import { Query } from "react-apollo";
import Queries from "../../../graphql/queries";
import CalendarWidget from "../calendar/calendar";
import { withRouter } from 'react-router-dom';

const SFImage = "https://sfchamber.com/wp-content/uploads/2017/11/merlin_136702122_448a1ddc-b5e9-4303-bc0d-701c9addf3f3-superJumbo.jpg";

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      calendarOpened: false,
      selectedDate:
        new Date().toString().split(" ")[1] +
        " " +
        new Date().toString().split(" ")[2] +
        ", " +
        new Date().toString().split(" ")[3],
      selectedTime: "7:00AM",
      selectedPeople: "1 person",
      location: ''
    };

    this.openCalendar = this.openCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.closeCalendarImmediately = this.closeCalendarImmediately.bind(this);
  }

  openCalendar() {
    if (!this.state.calendarOpened) {
      if (this.props.location.pathname === "/") {
        const calendar = document.getElementById("calendar-container");
        calendar.className = "calendar-full-container";
      } else if (this.props.location.pathname === "/search") {
        const calendar = document.getElementById(
          "calendar-full-container-hidden-search"
          );
          calendar.id = "calendar-full-container-search";
      }
      
      this.setState({ calendarOpened: true })

      document.getElementById("test").addEventListener("click", this.closeCalendar);
    }
  }

  closeCalendar(event) {
      if (
        !event.target.className.includes("calendar-click-no-close") &&
        !event.target.className.includes("react-calendar") &&
        !event.target.parentElement.className.includes("react-calendar") &&
        event.target.className !== "splash-anim-select con1"
      ) {
        if (this.props.location.pathname === "/") {
          const calendar = document.getElementById("calendar-container");
          calendar.className = "calendar-full-container-hidden";
        } else if (this.props.location.pathname === "/search") {
          const calendar = document.getElementById(
            "calendar-full-container-search"
          );
          calendar.id = "calendar-full-container-hidden-search";
        }
        
        document
          .getElementById("test")
          .removeEventListener("click", this.closeCalendar);
        this.setState({ calendarOpened: false });
      } else if (
               event.target.className.includes("react-calendar__tile") ||
               event.target.className.includes("calendar-click-close")
             ) {
              if (this.props.location.pathname === "/") {
                const calendar = document.getElementById("calendar-container");
                calendar.className = "calendar-full-container-hidden";
              } else if (this.props.location.pathname === "/search") {
                const calendar = document.getElementById(
                  "calendar-full-container-search"
                );
                calendar.id = "calendar-full-container-hidden-search";
              }
               
              document
                 .getElementById("test")
                 .removeEventListener("click", this.closeCalendar);
              this.setState({ calendarOpened: false });
             }
  }

  closeCalendarImmediately() {
    if (
      event.target.className === "splash-anim-select con1"
    ) {
      const calendar = document.getElementById("calendar-container");
      calendar.className = "calendar-full-container-hidden";
      document
        .getElementById("test")
        .removeEventListener("click", this.closeCalendar);
      this.setState({ calendarOpened: false });
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

    render() {
        // Search Page
        if (this.props.location.pathname === '/search') {
          return (
            <div>
              <div id="elem3-opened" className="header-image-search-container">
                <img
                  className="header-search-image-wood"
                  src="/static/images/wood-header.jpg"
                ></img>
                <div className="header-search-text-container">
                  <form className="header-search-form">
                    <div className="header-search-select-container">
                      <div
                        onClick={
                          this.state.calendarOpened ? null : this.openCalendar
                        }
                        className="header-search-select con1 search-select-date"
                      >
                        <div className="splash-anim-text-p search-calendar-p">
                          <p>{this.state.selectedDate}</p>
                          <img
                            src="/static/images/upside-down-caret.png"
                            width="12"
                          ></img>
                        </div>
                      </div>
                      <div className="header-search-select con2 search-select-time">
                        <select
                          defaultValue={"19:00"}
                          onChange={event => {
                            this.setState({
                              selectedTime: event.target.selectedOptions[0].text
                            });
                          }}
                        >
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
                        <div className="splash-anim-text-p search-time_people-p">
                          <p>{this.state.selectedTime}</p>
                          <img
                            src="/static/images/upside-down-caret.png"
                            width="12"
                          ></img>
                        </div>
                      </div>
                      <div className="header-search-select con3 search-select-people">
                        <select
                          defaultValue={"selectedGroup"}
                          onChange={event => {
                            this.setState({
                              selectedPeople:
                                event.target.selectedOptions[0].text
                            });
                          }}
                        >
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
                        <div className="splash-anim-text-p search-time_people-p">
                          <p>{this.state.selectedPeople}</p>
                          <img
                            src="/static/images/upside-down-caret.png"
                            width="12"
                          ></img>
                        </div>
                      </div>
                    </div>
                    <div className="header-search-input-container">
                      <img
                        src="/static/images/splash-search.png"
                        height="25"
                      ></img>
                      <input
                        value={this.state.location}
                        onChange={this.update("location")}
                        placeholder="Location"
                      />
                    </div>
                    <button className="header-search-form-submit" type="submit">
                      Find a Stable
                    </button>
                  </form>
                </div>
              </div>
              <CalendarWidget
                updateSelectedDate={selectedDate =>
                  this.setState({ selectedDate })
                }
              />
            </div>
          );
        } else if (this.props.location.pathname === "/book") {
          return null
        } else if (this.props.location.pathname === "/bayarea") {
        // Splash page
        return (
          <div>
            <div id="elem3-opened" className="splash-image-animation-container city-image">
              <div className="splash-animation-text-container">
                <h1>Find your stable for any occasion</h1>
                <form className="splash-anim-selects">
                  <div className="splash-anim-select-container">
                    <div
                      onClick={
                        this.state.calendarOpened ? null : this.openCalendar
                      }
                      className="splash-anim-select con1"
                    >
                      <img src="/static/images/splash-calendar.png"></img>
                      <div className="splash-anim-text-p">
                        <p>{this.state.selectedDate}</p>
                        <img
                          src="/static/images/upside-down-caret.png"
                          width="12"
                        ></img>
                      </div>
                    </div>
                    <div className="splash-anim-select con2">
                      <img src="/static/images/splash-clock.png"></img>
                      <select
                        defaultValue={"19:00"}
                        onChange={event => {
                          this.setState({
                            selectedTime: event.target.selectedOptions[0].text
                          });
                        }}
                      >
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
                        <p>{this.state.selectedTime}</p>
                        <img
                          src="/static/images/upside-down-caret.png"
                          width="12"
                        ></img>
                      </div>
                    </div>
                    <div className="splash-anim-select con3">
                      <img src="/static/images/splash-person.png"></img>
                      <select
                        defaultValue={"selectedGroup"}
                        onChange={event => {
                          this.setState({
                            selectedPeople: event.target.selectedOptions[0].text
                          });
                        }}
                      >
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
                        <p>{this.state.selectedPeople}</p>
                        <img
                          src="/static/images/upside-down-caret.png"
                          width="12"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="splash-anim-input-container">
                    <img
                      src="/static/images/splash-search.png"
                      height="25"
                    ></img>
                    <input 
                      value={this.state.location}
                      onChange={this.update("location")} 
                      placeholder="Location" 
                    />
                  </div>
                  <button className="splash-anim-form-submit" type="submit" onClick={() => this.props.history.push("/search")}>
                    Let's go
                  </button>
                </form>
              </div>
            </div>
            <CalendarWidget
              updateSelectedDate={selectedDate =>
                this.setState({ selectedDate })
              }
            />
          </div>
        );
        } else {
        // Splash page
        return (
          <div>
            <div id="elem3-opened" className="splash-image-animation-container">
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
                    <div
                      onClick={
                        this.state.calendarOpened ? null : this.openCalendar
                      }
                      className="splash-anim-select con1"
                    >
                      <img src="/static/images/splash-calendar.png"></img>
                      <div className="splash-anim-text-p">
                        <p>{this.state.selectedDate}</p>
                        <img
                          src="/static/images/upside-down-caret.png"
                          width="12"
                        ></img>
                      </div>
                    </div>
                    <div className="splash-anim-select con2">
                      <img src="/static/images/splash-clock.png"></img>
                      <select
                        defaultValue={"19:00"}
                        onChange={event => {
                          this.setState({
                            selectedTime: event.target.selectedOptions[0].text
                          });
                        }}
                      >
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
                        <p>{this.state.selectedTime}</p>
                        <img
                          src="/static/images/upside-down-caret.png"
                          width="12"
                        ></img>
                      </div>
                    </div>
                    <div className="splash-anim-select con3">
                      <img src="/static/images/splash-person.png"></img>
                      <select
                        defaultValue={"selectedGroup"}
                        onChange={event => {
                          this.setState({
                            selectedPeople: event.target.selectedOptions[0].text
                          });
                        }}
                      >
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
                        <p>{this.state.selectedPeople}</p>
                        <img
                          src="/static/images/upside-down-caret.png"
                          width="12"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="splash-anim-input-container">
                    <img
                      src="/static/images/splash-search.png"
                      height="25"
                    ></img>
                    <input 
                      value={this.state.location}
                      onChange={this.update("location")} 
                      placeholder="Location" 
                    />
                  </div>
                  <button className="splash-anim-form-submit" type="submit" onClick={() => this.props.history.push("/search")}>
                    Let's go
                  </button>
                </form>
              </div>
            </div>
            <CalendarWidget
              updateSelectedDate={selectedDate =>
                this.setState({ selectedDate })
              }
            />
          </div>
        );
      }
    }
}

export default withRouter(Header);