import React from "react";
import PropTypes from "prop-types";
import { event } from "./types";

function Event(props) {
  return (
    <div>
      <h2>Edit Event</h2>
      <form>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          onChange={props.onChange}
          name="title"
          value={props.event.title}
        />
        <br />
        <label htmlFor="price">Price</label>
        <br />
        <input
          type="text"
          id="price"
          name="price"
          onChange={props.onChange}
          value={props.event.price}
        />
        <br />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

Event.propTypes = {
  event: event,
  onChange: PropTypes.func.isRequired
};

Event.defaultProps = {
  event: {
    seminarNumber: 5,
    title: "No title provided",
    date: "no date",
    price: 5
  }
};

export default Event;
