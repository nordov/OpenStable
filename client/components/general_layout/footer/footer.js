import React, { Component } from "react";
//import resetCSS from "../reset.css";
import footerCSS from "./footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-container">
        <div className="footer-inner-container">
          <div className="footer-programmer-container">
            <h3>SUHAIB KHAN</h3>
            <div className="footer-github-img">
              <img src="/static/images/github.png" width="25"></img>
              <a href="https://github.com/SKhan1211" target="_blank">
                Github
              </a>
            </div>
            <div className="footer-github-img">
              <img src="/static/images/linkedin.png" width="25"></img>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <div className="footer-programmer-container">
            <h3>MICHELLE VONG</h3>
            <div className="footer-github-img">
              <img src="/static/images/github.png" width="25"></img>
              <a href="https://github.com/misheMatcha" target="_blank">
                Github
              </a>
            </div>
            <div className="footer-github-img">
              <img src="/static/images/linkedin.png" width="25"></img>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <div className="footer-programmer-container">
            <h3>DAVID ODIO</h3>
            <div className="footer-github-img">
              <img src="/static/images/github.png" width="25"></img>
              <a href="https://github.com/nordov" target="_blank">
                Github
              </a>
            </div>
            <div className="footer-github-img">
              <img src="/static/images/linkedin.png" width="25"></img>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <div className="footer-programmer-container">
            <h3>TOM BETTHAUSER</h3>
            <div className="footer-github-img">
              <img src="/static/images/github.png" width="25"></img>
              <a href="https://github.com/tombetthauser" target="_blank">
                Github
              </a>
            </div>
            <div className="footer-github-img">
              <img src="/static/images/linkedin.png" width="25"></img>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-divider-line"></div>
      </div>
    );
  }
}

export default Footer;
