import React, { Component } from 'react';
import Calendar from "react-calendar";
import calendarCSS from './calendar.css';

class CalendarWidget extends Component{

    constructor(props) {
        super(props)
        this.state = {
          selectedDate: ''
        };

    }

    componentDidMount() {
        this.appendToCalendar();
    }

    componentDidUpdate(_prevProps, prevState) {
      if (prevState.selectedDate !== this.state.selectedDate)
        this.props.updateSelectedDate(this.state.selectedDate);
    }

    appendToCalendar() {
        const calendarEle = document.getElementsByClassName(
            "react-calendar__month-view__weekdays"
        );
        const calendarDivider = document.createElement("div")
        calendarDivider.className = 'calendar-divider'
        calendarEle[0].parentElement.appendChild(calendarDivider);

        const clickableDivs = document.getElementsByClassName(
          "react-calendar__month-view "
        );
        clickableDivs[0].lastElementChild.lastElementChild.className = "calendar-click-no-close"

        const closingButtons = document.getElementsByClassName("react-calendar__tile");
        const closingButtonsArr = Array.from(closingButtons);
        closingButtonsArr.forEach(button => {
          button.lastElementChild.className = "calendar-click-close"
        })
    }    

    render(){       
        return (
          <div
            id="calendar-container"
            className="calendar-full-container-hidden calendar-click-no-close"
          >
            <p className="calendar-caret calendar-click-no-close">
              ▲
            </p>
            <Calendar
              onChange={selectedDate => {
                const newDate = selectedDate.toString();
                const newDateArr = newDate.split(" ");
                const parsedNewDate =
                  newDateArr[1] +
                  " " +
                  newDateArr[2] +
                  ", " +
                  newDateArr[3];
                this.setState({ selectedDate: parsedNewDate });
              }}
              value={this.state.date}
              className="react-calendar-full calendar-click-no-close"
              onActiveDateChange={() => {
                this.appendToCalendar();
              }}
            />
          </div>
        );
    }

};

export default CalendarWidget;