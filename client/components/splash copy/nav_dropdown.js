import React, { Component } from "react";
//import resetCSS from "../reset.css";
import splashCSS from "./splash.css";
import { withRouter } from "react-router";
import { ApolloConsumer } from "react-apollo";

class NavDropdown extends Component {
  constructor(props) {
    super(props)

    this.closeNavDropdownImmediately = this.closeNavDropdownImmediately.bind(this);
  }

  closeNavDropdownImmediately(event) {
    if (event.target.className !== "splash-drop-noclose") {
      this.setState({ showNavDropDown: false });
      const elem1 = document.getElementById(
        "splash-dropdown-inner-container-opened"
      );
      const elem2 = document.getElementById("splash-drop-p-opened");
      const elem3 = document.getElementById("elem3-opened");
      const elem4 = document.getElementById("elem4-opened");
      elem1.id = "elem1";
      // elem2.id = "elem2";
      elem4.id = "elem4";
      // elem3.id = "elem3";
    }
  }

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <div className="splash-dropdown-full-container splash-drop-noclose">
            <p id="elem2" className="splash-drop-p splash-drop-noclose">
              ▲
            </p>
            <div
              id="elem1"
              className="splash-dropdown-inner-container splash-drop-noclose"
            >
              <ul id="elem4" className="splash-drop-noclose">
                <li className="splash-drop-noclose">
                  <p className="splash-drop-noclose">My Profile</p>
                </li>
                <li className="splash-drop-noclose">
                  <p className="splash-drop-noclose">My Riding History</p>
                </li>
                <li className="splash-drop-noclose">
                  <p className="splash-drop-noclose">My Saved Stables</p>
                </li>
                <li
                  onClick={e => {
                    this.closeNavDropdownImmediately;
                    this.props.setDropdownFalse();
                    localStorage.removeItem("auth-token");
                    localStorage.removeItem("fname");
                    client.writeData({ data: { isLoggedIn: false } });
                    this.props.history.push("/");
                  }}
                >
                  <p
                    onClick={e => {
                      this.closeNavDropdownImmediately;
                      this.props.setDropdownFalse();
                      localStorage.removeItem("auth-token");
                      localStorage.removeItem("fname");
                      client.writeData({ data: { isLoggedIn: false } });
                      this.props.history.push("/");
                    }}
                  >
                    Sign Out
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </ApolloConsumer>
    );
  }
}

export default withRouter(NavDropdown);
