import React, { Component } from 'react';
import confirmationCSS from './confirmation.css';
import ConfirmationTimer from './confirmation_timer';
import SignUpModal from "../modals/signup_modal";
import SignInModal from "../modals/signin_modal";

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignUpModal: false,
      showSignInModal: false
    };

    this.showSignUpModal = this.showSignUpModal.bind(this);
    this.showSignInModal = this.showSignInModal.bind(this);
  }

  showSignUpModal() {
    this.setState({ showSignUpModal: true });
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  }

  showSignInModal() {
    this.setState({ showSignInModal: true });
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  }

  render() {
    const signUpModal = (
      <SignUpModal
        closeModal={() => this.setState({ showSignUpModal: false })}
      />
    );
    const signInModal = (
      <SignInModal
        closeModal={() => this.setState({ showSignInModal: false })}
        changeModal={() =>
          this.setState({ showSignInModal: false, showSignUpModal: true })
        }
      />
    );     
    return (
      <div className="confirmation-full-page-container">
        <div className="confirmation-inner-container">
          <div className="confirmation-content-container">
            <h3>You're almost done!</h3>
            <div className="confirmation-reservation-information-container">
              <img
                height="100"
                src="https://open-stable-app-dev.s3-us-west-1.amazonaws.com/tour_5.png"
              ></img>
              <div className="confirmation-reservation-info">
                <h1>Bay Area Ridge Trail</h1>
                <div className="confirmation-reservation-details">
                  <i className="far fa-calendar">
                    <p>Fri, Mar 13</p>
                  </i>
                  <i className="far fa-clock">
                    <p>6:30 PM</p>
                  </i>
                  <i className="far fa-user">
                    <p>3 people</p>
                  </i>
                </div>
              </div>
            </div>
            <ConfirmationTimer />

            {localStorage.getItem("auth-token") ? null : (
              <p>
                <span onClick={this.showSignInModal}>Sign in</span> or{" "}
                <span onClick={this.showSignUpModal}>sign up</span> to collect
                points for this reservation
              </p>
            )}
            <form className="confirmation-submit-form">
              <div className="confirmation-form-input">
                <input type="text" placeholder="First name"></input>
                <input type="text" placeholder="Last name"></input>
              </div>
              <div className="confirmation-form-input">
                <input type="tel" placeholder="Phone number"></input>
                <input type="email" placeholder="Email"></input>
              </div>
              <div className="confirmation-form-checkbox">
                <label className="confirmation-custom-checkmark">
                  <input type="checkbox" />
                  <span></span>
                </label>
                <p>
                  Sign me up to receive riding offers and news from this stable
                  by email.
                </p>
              </div>
              <input
                onClick={() => this.props.history.push("/")}
                type="submit"
                value="Complete Reservation"
              ></input>
            </form>
            <p className="confirmation-policy">
              By clicking "Complete reservation" you agree to OpenStable's Terms
              of Use and Privacy Policy.
            </p>
          </div>
          <div className="confirmation-margin-block"></div>
        </div>
        {this.state.showSignUpModal ? signUpModal : null}
        {this.state.showSignInModal ? signInModal : null}
      </div>
    );
  }
}

export default Confirmation