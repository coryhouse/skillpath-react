import React from "react";
import Event from "./Event";

class EventContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {
        seminarNumber: 4,
        title: "Time Management",
        date: "11/4/2018",
        price: 365
      }
    };
  }

  render() {
    return <Event event={this.state.event} />;
  }
}

export default EventContainer;
