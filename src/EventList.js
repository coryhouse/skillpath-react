import React from "react";
import PropTypes from "prop-types";

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
  events: PropTypes.arrayOf(
    PropTypes.shape({
      seminarNumber: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
};

export default EventList;
