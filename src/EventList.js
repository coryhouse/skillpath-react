import React from "react";

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

export default EventList;
