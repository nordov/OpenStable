import React, { Component } from "react";
import resetCSS from "../reset.css";
import splashCSS from "./splash.css";

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: "Primary dining location *"
    };

    this.setLocation = this.setLocation.bind(this);
    this.setBorder = this.setBorder.bind(this);
    this.closeBorder = this.closeBorder.bind(this);
  }

  setLocation(event) {
    this.setState({ location: event.target.value })
  }

  setBorder(event) {
    event.target.nextElementSibling.className =
      "splash-modal-signup-p1-selected";
  }

  closeBorder(event) {
    const select = document.getElementsByName("modal-select")
    if (select[0].nextElementSibling.className === "splash-modal-signup-p1-selected" 
        && event.target.name !== "modal-select") {
          select[0].nextElementSibling.className = "splash-modal-signup-p1";
        }
    this.closeModal(event);
  }

  closeModal(event) {
    if (event.target.className === "splash-modal-full-container-signup") this.props.closeModal();
  }

  render() {
    return (
      <div
        className="splash-modal-full-container-signup"
        onClick={this.closeBorder}
      >
        <div className="splash-modal-inner-container-signup">
          <form className="splash-modal-form-signup">
            <h1>Welcome to OpenStable!</h1>
            <div className="splash-modal-divider-signup signup-divid1"></div>
            <input
              type="text"
              className="splash-modal-inputs"
              placeholder="First Name *"
            ></input>
            <input
              type="text"
              className="splash-modal-inputs"
              placeholder="Last Name *"
            ></input>
            <input
              type="text"
              className="splash-modal-inputs"
              placeholder="Enter email *"
            ></input>
            <input
              type="text"
              className="splash-modal-inputs"
              placeholder="Enter password *"
            ></input>
            <input
              type="text"
              className="splash-modal-inputs"
              placeholder="Re-enter password *"
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
              By creating an account you agree to the OpenStable Terms of Use
              and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;