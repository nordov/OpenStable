import React, { Component } from "react";
import resetCSS from "../reset.css";
import splashCSS from "./splash.css";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
import { withRouter } from "react-router";

const { LOGIN_USER } = Mutations;

class SignInModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value })
  }

  updateCache(client, { data }) {
    console.log(data);
    client.writeData({
      data: { isLoggedIn: data.login.loggedIn, userFirstName: data.login.fname }
    });
  }

  closeModal(event) {
    if (event.target.className === "splash-modal-full-container-signin") {
      this.props.closeModal();
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }

  render() {
    return (
      <Mutation
        mutation={LOGIN_USER}
        onCompleted={data => {
          console.log(data);
          const { token, fname } = data.login;
          localStorage.setItem("auth-token", token);
          localStorage.setItem("fname", fname)
          this.props.closeModal();
          this.props.history.push("/")
        }}
        update={(client, data) => this.updateCache(client, data)}
      >
        {loginUser => (
          <div
            className="splash-modal-full-container-signin"
            onClick={this.closeModal}
          >
            <div className="splash-modal-inner-container-signin">
              <form 
                className="splash-modal-form-signin" 
                onSubmit={e => {
                  e.preventDefault();
                  document.body.style.height = "auto";
                  document.body.style.overflow = "auto";
                  loginUser({
                    variables: {
                      email: this.state.email,
                      password: this.state.password
                    }
                  })
                }}
              >
                <h1>Please sign in</h1>
                <div className="splash-modal-divider-signin signin-divid1"></div>
                <input
                  type="text"
                  className="splash-modal-inputs"
                  placeholder="Email"
                  onChange={this.update("email")}
                  value={this.state.email}
                ></input>
                <input
                  type="password"
                  className="splash-modal-inputs"
                  placeholder="Password"
                  onChange={this.update("password")}
                  value={this.state.password}
                ></input>
                <div className="splash-signin-modal-bottom-container">
                  <a href="#">Forgot Password?</a>
                  <button className="splash-modal-signin-account">Sign In</button>
                </div>
                <div className="splash-modal-divider-signin second-modal-divider-signin"></div>
                <p>
                  New to OpenStable?{" "}
                  <a
                    href="#"
                    className="signin-modal-create-account"
                    onClick={this.props.changeModal}
                  >
                    Create an account
                  </a>
                </p>
              </form>
            </div>
          </div>  
        )}
      </Mutation>
    );
  }
}

export default withRouter(SignInModal);