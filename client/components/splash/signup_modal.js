import React, { Component } from "react";
import resetCSS from "../reset.css";
import splashCSS from "./splash.css";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
import { withRouter } from "react-router";

const { REGISTER_USER, LOGIN_USER } = Mutations;

class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Primary riding location *",
      fname: "",
      lname: "",
      email: "",
      password: "",
      retrypassword: "",
      city: ""
    };

    this.setLocation = this.setLocation.bind(this);
    this.setBorder = this.setBorder.bind(this);
    this.closeBorder = this.closeBorder.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateCache(client, { data }) {
    client.writeData({
      data: { isLoggedIn: data.register.loggedIn }
    });
  }

  setLocation(event) {
    this.setState({ location: event.target.value, city: event.target.value });
  }

  setBorder(event) {
    event.target.nextElementSibling.className =
      "splash-modal-signup-p1-selected";
  }

  closeBorder(event) {
    const select = document.getElementsByName("modal-select");
    if (
      select[0].nextElementSibling.className ===
        "splash-modal-signup-p1-selected" &&
      event.target.name !== "modal-select"
    ) {
      select[0].nextElementSibling.className = "splash-modal-signup-p1";
    }
    this.closeModal(event);
  }

  closeModal(event) {
    if (event.target.className === "splash-modal-full-container-signup")
      this.props.closeModal();
  }

  render() {
    return (
      <Mutation
        mutation={REGISTER_USER}
        onCompleted={data => {
          const { token } = data.register;
          localStorage.setItem("auth-token", token);
          localStorage.setItem("fname", fname);
        }}
        update={(client, data) => this.updateCache(client, data)}
      >
        {registerUser => (
          <div
            className="splash-modal-full-container-signup"
            onClick={this.closeBorder}
          >
            <div className="splash-modal-inner-container-signup">
              <form
                className="splash-modal-form-signup"
                onSubmit={e => {
                  e.preventDefault();
                  if (this.state.password !== this.state.retrypassword) {
                    throw new Error("Passwords must match");
                  } else if (this.state.city === "") {
                    throw new Error("Must select a city")
                  }
                  registerUser({
                    variables: {
                      fname: this.state.fname,
                      lname: this.state.lname,
                      email: this.state.email,
                      password: this.state.password,
                      city: this.state.city
                    }
                  });
                  this.props.closeModal();
                  this.props.history.push("/");
                }}
              >
                <h1>Welcome to OpenStable!</h1>
                <div className="splash-modal-divider-signup signup-divid1"></div>
                <input
                  type="text"
                  className="splash-modal-inputs"
                  placeholder="First Name *"
                  onChange={this.update("fname")}
                ></input>
                <input
                  type="text"
                  className="splash-modal-inputs"
                  placeholder="Last Name *"
                  onChange={this.update("lname")}
                ></input>
                <input
                  type="text"
                  className="splash-modal-inputs"
                  placeholder="Enter email *"
                  onChange={this.update("email")}
                ></input>
                <input
                  type="password"
                  className="splash-modal-inputs"
                  placeholder="Enter password *"
                  onChange={this.update("password")}
                ></input>
                <input
                  type="password"
                  className="splash-modal-inputs"
                  placeholder="Re-enter password *"
                  onChange={this.update("retrypassword")}
                ></input>
                <select
                  onChange={this.setLocation}
                  defaultValue={"DEFAULT"}
                  selected
                  onClick={this.setBorder}
                  name="modal-select"
                >
                  <option disabled value="DEFAULT">
                    Cities..
                  </option>
                  <option>City 1</option>
                  <option>City 2</option>
                  <option>City 3</option>
                </select>
                <div className="splash-modal-signup-p1">
                  <p>{this.state.location}</p>
                  <img
                    src="/static/images/upside-down-caret.png"
                    width="12"
                  ></img>
                </div>
                <div className="splash-modal-bottom-container">
                  <input type="checkbox" name="checkbox-signup"></input>
                  <label htmlFor="checkbox-signup">Remember me</label>
                  <br />
                  <button className="splash-modal-signup-account">
                    Create Account
                  </button>
                  <br />
                  <button className="splash-modal-demo-account">Demo</button>
                </div>
                <div className="splash-modal-divider-signup second-modal-divider"></div>
                <p>
                  By creating an account you agree to the OpenStable Terms of
                  Use and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default withRouter(SignUpModal);