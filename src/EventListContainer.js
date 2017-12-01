import React, { Component } from "react";
import EventList from "./EventList";

class EventListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [
        {
          seminarNumber: 4,
          title: "Time Management",
          date: "11/4/2018",
          price: 365
        },
        {
          seminarNumber: 3,
          title: "Leadership Skills",
          date: "2/4/2018",
          price: 1365
        }
      ]
    };
  }

  render() {
    return <EventList events={this.state.events} />;
  }
}

export default EventListContainer;
