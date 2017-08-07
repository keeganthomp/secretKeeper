import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Signup</h1>
        <form action="">
          <input type="text" placeholder="PICK A USERNAME" />
          <input type="text" placeholder="PICK A EMAIL" />
          <input type="password" placeholder="PICK A PASSWORD" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
