import React, { Component } from 'react';
import confirmationCSS from './confirmation.css';

class Confirmation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="confirmation-full-page-container">
        <div className="confirmation-inner-container">
          <div className="confirmation-content-container">
            <h3>You're almost done!</h3>
            <div className="confirmation-reservation-information-container">
              <img height="100" src="https://resizer.otstatic.com/v2/photos/legacy/2/26143634.jpg"></img>
              <div className="confirmation-reservation-info">
                <h1>Crepe du Jour</h1>
                <div className="confirmation-reservation-details">
                  <p>Fri, Mar 13</p>
                  <p>6:30 PM</p>
                  <p>3 people</p>
                </div>
              </div>
            </div>
            <div className="confirmation-table-hold-container">
              <p>
                We're holding this table for you for{" "}
                <strong>1:00 minutes</strong>
              </p>
            </div>
            <p>Sign in or sign up to collect points for this reservation</p>
            <form className="confirmation-submit-form">
              <div className="confirmation-form-input">
                <input type="text" placeholder="First name"></input>
                <input type="text" placeholder="Last name"></input>
              </div>
              <div className="confirmation-form-input">
                <input type="number" placeholder="Phone number"></input>
                <input type="email" placeholder="Email"></input>
              </div>
              <div className="confirmation-form-checkbox">
                <input type="checkbox"></input>
                <p>
                  Sign me up to receive riding offers and news from this stable
                  by email.
                </p>
              </div>
              <input type="submit" value="Complete Reservation"></input>
            </form>
            <p>
              By clicking "Complete reservation" you agree to OpenStable's Terms
              of Use and Privacy Policy.
            </p>
          </div>
          <div className="confirmation-margin-block"></div>
        </div>
      </div>
    );
  }
}

export default Confirmation