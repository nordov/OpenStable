import React, { Component } from "react";
import confirmationCSS from "./confirmation.css";

class ConfirmationTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: '5',
      seconds: '00' 
    }

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.startCountdown();
  }

  tick() {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - (min * 60);
    this.setState({ minutes: min, seconds: sec })

    if (sec < 10) {
      this.setState({ seconds: "0" + this.state.seconds })
    }

    if (min < 10) {
      this.setState({ value: "0" + min })
    }

    if (min === 0 & sec === 0) {
      clearInterval(this.timerCountdown)
    }

    this.secondsRemaining--
  }

  startCountdown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
  }

  render() {
    let minutesPlural;
    if (this.state.minutes > 1) minutesPlural = "minutes";
    else minutesPlural = "minute"

    console.log(this.state)
    let timerBlock;
    if (this.state.minutes === 0 && this.state.seconds === "00") {
      timerBlock = (
        <div className="confirmation-table-hold-container2">
          <p>
            You can still try to complete your reservation, but this tour may no
            longer be available.
          </p>
        </div>
      );
    } else {
      timerBlock = (
        <div className="confirmation-table-hold-container">
          <p>
            We're holding this tour for you for{" "}
            <strong>
              {this.state.minutes.toString() +
                ":" +
                this.state.seconds.toString()}{" "}
              {minutesPlural}
            </strong>
          </p>
        </div>
      );
    }

    return (
      <div>
        {/* <p>
          We're holding this table for you for{" "}
          <strong>
            {this.state.minutes.toString() +
              ":" +
              this.state.seconds.toString()}{" "}
            {minutesPlural}
          </strong>
        </p> */}
        {timerBlock}
      </div>
    );
  }
}

export default ConfirmationTimer;