import React, { Component } from "react";
import mainCSS from '../main/main';
import headerCSS from './header.css';
import { ApolloConsumer } from "react-apollo";
import Queries from "../../../graphql/queries";
import CalendarWidget from "../calendar/calendar";
import { withRouter } from 'react-router-dom';

const SFImage = "https://images.squarespace-cdn.com/content/5a1dda174c326df2710b8e91/1546044497907-X1JHPS8O1W9IQQJQ34DU/James+Winnie-Engagement+Photos-0176.jpg?content-type=image%2Fjpeg";
// const SFImage = "https://sfchamber.com/wp-content/uploads/2017/11/merlin_136702122_448a1ddc-b5e9-4303-bc0d-701c9addf3f3-superJumbo.jpg";


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
      selectedTime: "6:00PM",
      selectedPeople: "2 people",
      location: '',
      selectedTimeMilitary: "18:00"
    };

    this.openCalendar = this.openCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.closeCalendarImmediately = this.closeCalendarImmediately.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
    this.locationUnclick = this.locationUnclick.bind(this);
    this.locationClick = this.locationClick.bind(this);
    this.setLocation = this.setLocation.bind(this);
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

  handleFormSubmit(event, client) {
    event.preventDefault();
    client.writeData({ 
      data: { 
        selectedDate: this.state.selectedDate,
        selectedTime: this.state.selectedTime,
        selectedPeople: this.state.selectedPeople,
        location: this.state.location
      }
    });
    this.props.history.push("/search")
  }

  handleSearchFormSubmit(event, client) {
    event.preventDefault();
    client.writeData({
      data: {
        selectedDate: this.state.selectedDate,
        selectedTime: this.state.selectedTime,
        selectedPeople: this.state.selectedPeople,
        location: this.state.location
      }
    });
  }

  locationClick() {
    const dropdown = document.getElementsByClassName("search-input-dropdown-lis-hidden");
    const dropdownUl = document.getElementById("search-drop");
    while (dropdown.length) {
      dropdown[0].className = "search-input-dropdown-lis"
    }
    dropdownUl.style.opacity = "1";
    document.getElementById("test").addEventListener("click", this.locationUnclick)
  }

  locationUnclick() {
    const dropdown = document.getElementsByClassName("search-input-dropdown-lis");
    const dropdownUl = document.getElementById("search-drop");
    while (dropdown.length) {
      dropdown[0].className = "search-input-dropdown-lis-hidden"
    }
    dropdownUl.style.opacity = "0";
    document.getElementById("test").removeEventListener("click", this.locationUnclick)
  }

  setLocation() {
    this.setState({ location: event.target.innerText });
  }

    render() {
        // Search Page
        if (this.props.location.pathname === '/search') {
          return (
          <ApolloConsumer>
            {client => {
                if (client.cache.data.data.ROOT_QUERY === undefined) {
                  client.writeData({
                    data: {
                      selectedDate: this.state.selectedDate,
                      selectedTime: this.state.selectedTime,
                      selectedPeople: this.state.selectedPeople,
                      location: this.state.location
                    }
                  });
                }
              return (
                <div>
                  <div id="elem3-opened" className="header-image-search-container">
                    <img
                      className="header-search-image-wood"
                      src="/static/images/wood-header.jpg"
                    ></img>
                    <div className="header-search-text-container">
                      <form className="header-search-form" onSubmit={(event) => this.handleSearchFormSubmit(event, client)}>
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
                              defaultValue={this.state.selectedTimeMilitary}
                              onChange={event => {
                                this.setState({
                                  selectedTime: event.target.selectedOptions[0].text,
                                  selectedTimeMilitary: event.target.selectedOptions[0].value
                                });
                              }}
                            >
                              <option value="09:00">9:00AM</option>
                              <option value="10:00">10:00AM</option>
                              <option value="11:00">11:00AM</option>
                              <option value="12:00">12:00PM</option>
                              <option value="13:00">1:00PM</option>
                              <option value="14:00">2:00PM</option>
                              <option value="15:00">3:00PM</option>
                              <option value="16:00">4:00PM</option>
                              <option value="17:00">5:00PM</option>
                              <option value="18:00">6:00PM</option>
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
            }}
          </ApolloConsumer>
          )
        } else if (this.props.location.pathname === "/book") {
          return null
        } else if (this.props.location.pathname === "/bayarea") {
        // Splash page
          return (
            <ApolloConsumer>
              {client => {
                return (
                  <div>
                    <div id="elem3-opened" className="splash-image-animation-container city-image">
                      <div className="splash-animation-text-container">
                        <h1 class="city-header-h1">Find Bay Area Stables</h1>
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
                                defaultValue={"18:00"}
                                onChange={event => {
                                  this.setState({
                                    selectedTime: event.target.selectedOptions[0].text,
                                    selectedTimeMilitary: event.target.selectedOptions[0].value
                                  });
                                }}
                              >
                                <option value="09:00">9:00AM</option>
                                <option value="10:00">10:00AM</option>
                                <option value="11:00">11:00AM</option>
                                <option value="12:00">12:00PM</option>
                                <option value="13:00">1:00PM</option>
                                <option value="14:00">2:00PM</option>
                                <option value="15:00">3:00PM</option>
                                <option value="16:00">4:00PM</option>
                                <option value="17:00">5:00PM</option>
                                <option value="18:00">6:00PM</option>
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
                              placeholder="Search Bay Area"
                              onClick={this.locationClick}
                            />
                            <div className="search-input-dropdown">
                              <ul id="search-drop">
                                <li className="search-input-dropdown-lis-hidden" onClick={this.setLocation}>San Francisco</li>
                                <li className="search-input-dropdown-lis-hidden" onClick={this.setLocation}>Daly City</li>
                                <li className="search-input-dropdown-lis-hidden" onClick={this.setLocation}>Mill Valley</li>
                              </ul>
                            </div>
                          </div>
                          <button className="splash-anim-form-submit" type="submit" onClick={(event) => this.handleFormSubmit(event, client)}>
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
              }}
            </ApolloConsumer>
          )
        
        } else {
        // Splash page
        return (
          <ApolloConsumer>
            {client => {
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
                      <form className="splash-anim-selects" onSubmit={(event) => this.handleFormSubmit(event, client)}>
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
                              defaultValue={"18:00"}
                              onChange={event => {
                                this.setState({
                                  selectedTime: event.target.selectedOptions[0].text,
                                  selectedTimeMilitary: event.target.selectedOptions[0].value
                                });
                              }}
                            >
                              <option value="09:00">9:00AM</option>
                              <option value="10:00">10:00AM</option>
                              <option value="11:00">11:00AM</option>
                              <option value="12:00">12:00PM</option>
                              <option value="13:00">1:00PM</option>
                              <option value="14:00">2:00PM</option>
                              <option value="15:00">3:00PM</option>
                              <option value="16:00">4:00PM</option>
                              <option value="17:00">5:00PM</option>
                              <option value="18:00">6:00PM</option>
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
                            onClick={this.locationClick}
                          />
                          <div className="search-input-dropdown">
                            <ul id="search-drop">
                                <li className="search-input-dropdown-lis-hidden" onClick={this.setLocation}>San Francisco</li>
                                <li className="search-input-dropdown-lis-hidden" onClick={this.setLocation}>Daly City</li>
                                <li className="search-input-dropdown-lis-hidden" onClick={this.setLocation}>Mill Valley</li>
                              </ul>
                          </div>
                        </div>
                        <button className="splash-anim-form-submit" type="submit">
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
              )
            }}
          </ApolloConsumer>
        )
      }
    }
}

export default withRouter(Header);