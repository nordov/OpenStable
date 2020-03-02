import React, { Component } from "react";
import resetCSS from "../reset.css";
import splashCSS from "./splash.css";
import { withRouter } from "react-router";
import { ApolloConsumer } from "react-apollo";

class NavDropdown extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <div className="splash-dropdown-full-container splash-drop-noclose">
            <p className="splash-drop-noclose">▲</p>
            <div className="splash-dropdown-inner-container splash-drop-noclose">
              <ul className="splash-drop-noclose">
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
                  className="splash-drop-noclose"
                  onClick={e => {
                    localStorage.removeItem("auth-token");
                    localStorage.removeItem("fname");
                    client.writeData({ data: { isLoggedIn: false } });
                    this.props.history.push("/");
                  }}
                >
                  <p
                    className="splash-drop-noclose"
                    onClick={e => {
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
