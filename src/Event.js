import React from "react";
import { event } from "./types";

function Event(props) {
  return (
    <div>
      <h2>Edit Event</h2>
      <form>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" value={props.title} />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

Event.propTypes = {
  event: event.isRequired
};

export default Event;
