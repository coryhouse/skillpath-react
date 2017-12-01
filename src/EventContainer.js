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

  onChange = e => {
    // Approach #1: Object spread - Recommended
    const event = { ...this.state.event };
    // This is equivalent to event.title if e.target.name = title
    event[e.target.name] = e.target.value;

    // Approach #2: Object.assign
    // const event = Object.assign({}, this.state.event, {
    //   [e.target.name]: e.target.value
    // });

    // Approach #3: deep-copy on npm - Recommended when working with nested objects
    // const event = dcopy(event);
    // event[e.target.name] = e.target.value;

    // using property shorthand syntax since right and left hand side match.
    this.setState({ event });
  };

  render() {
    return <Event onChange={this.onChange} />;
  }
}

export default EventContainer;
