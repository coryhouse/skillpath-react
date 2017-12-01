import React, { Component } from "react";
import EventListContainer from "./EventListContainer";
import EventContainer from "./EventContainer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editFormVisible: false
    };
  }

  toggleEditForm = () => {
    // Using callback style of setState since
    // I need to reference a value in state.
    this.setState(prevState => {
      return {
        editFormVisible: !prevState.editFormVisible
      };
    });
  };

  render() {
    // Use destructuring to shorten calls
    const { editFormVisible } = this.state;
    const { toggleEditForm } = this;

    return (
      <div>
        <EventListContainer />
        <button onClick={toggleEditForm}>Toggle edit form</button>
        {/* comment here */}
        {editFormVisible && <EventContainer />}
      </div>
    );
  }
}

export default App;
