import React, { Component } from "react";
import navBarCSS from './nav_bar.css';
import SignUpModal from '../../modals/signup_modal';
import SignInModal from '../../modals/signin_modal';
import NavDropdown from './nav_dropdown';
import { Query } from "react-apollo";
import Queries from "../../../graphql/queries";


class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showSignUpModal: false,
            showSignInModal: false,
            showNavDropDown: false,
            selectedDate: new Date()
        }

        this.showSignUpModal = this.showSignUpModal.bind(this);
        this.showSignInModal = this.showSignInModal.bind(this);
        this.showNavDropDown = this.showNavDropDown.bind(this);
        this.closeNavDropdown = this.closeNavDropdown.bind(this);
    }

    showNavDropDown() {
        if (!this.state.showNavDropDown && localStorage.getItem("auth-token")) {
            this.setState({ showNavDropDown: true });
            const elem1 = document.getElementById("elem1");
            const elem2 = document.getElementById("elem2");
            const elem3 = document.getElementById("elem3-opened");
            const elem4 = document.getElementById("elem4");
            elem1.id = "splash-dropdown-inner-container-opened";
            elem2.id = "splash-drop-p-opened";
            elem3.id = "elem3-opened";
            elem4.id = "elem4-opened";

            document.getElementById("test").addEventListener("click", this.closeNavDropdown);
        }
    }

    closeNavDropdown(event) {
        setTimeout(() => {
            if (
              this.state.showNavDropDown &&
              event.target.className !== "splash-drop-noclose" &&
              localStorage.getItem("auth-token")
            ) {
              document
                .getElementById("test")
                .removeEventListener("click", this.closeNavDropdown);
              this.setState({ showNavDropDown: false });
              const elem1 = document.getElementById(
                "splash-dropdown-inner-container-opened"
              );
              const elem2 = document.getElementById("splash-drop-p-opened");
              const elem3 = document.getElementById("elem3-opened");
              const elem4 = document.getElementById("elem4-opened");
              elem1.id = "elem1";
              elem2.id = "elem2";
              setTimeout(() => {
                elem4.id = "elem4";
              }, 150);
              // if (elem3) {
              //   debugger
              //   elem3.id = "elem3";
              // }
            }
        }, 1)
        
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
        const signUpModal = <SignUpModal closeModal={() => this.setState({ showSignUpModal: false })} />
        const signInModal = <SignInModal
            closeModal={() => this.setState({ showSignInModal: false })}
            changeModal={() => this.setState({ showSignInModal: false, showSignUpModal: true })}
        />        

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
                        <NavDropdown setDropdownFalse={() => this.setState({ showNavDropDown: false })} />
                        <p onClick={this.showNavDropDown}>
                            Hi, {localStorage.getItem("fname")}
                        </p>
                        <img
                            className="splash-auth-caret"
                            src="static/images/upside-down-caret.png"
                            height="12"
                            onClick={this.showNavDropDown}
                        ></img>
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
                        <a onClick={this.showSignInModal}>
                            Sign in
                </a>
                    </div>
                    {this.state.showSignUpModal ? signUpModal : null}
                    {this.state.showSignInModal ? signInModal : null}
                </div>
            );
        }
    }
}//End of class NavBar

export default NavBar;