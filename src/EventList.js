import React from "react";
import PropTypes from "prop-types";
import { event } from "./types";

class EventList extends React.Component {
  render() {
    return (
      <div>
        <h1>Events</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.events.map(event => {
              return (
                <tr key={event.seminarNumber}>
                  <td>{event.title}</td>
                  <td>{event.date}</td>
                  <td>{event.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.arrayOf(event).isRequired
};

export default EventList;
