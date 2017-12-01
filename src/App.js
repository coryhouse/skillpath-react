import React, { Component } from "react";
import EventListContainer from "./EventListContainer";
import EventContainer from "./EventContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <EventListContainer />
        <EventContainer />
      </div>
    );
  }
}

export default App;
