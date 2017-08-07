import React, { Component } from "react";
import "../styles/App.css";
import Navigation from "../components/Navigation";



export class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}



