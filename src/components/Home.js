import React, { Component } from "react";
import "../styles/App.css";
import { loadTokenFromCookie } from "../actions";
import { connect } from "react-redux";

class Home extends Component {
  componentWillMount() {
    const loadToken = this.props.loadToken;
    loadToken();
  }
  render() {
    return (
      <div className="App">
        <h1>Got Secrets?</h1>
        <h3>Let us know what they are</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadToken: loadTokenFromCookie
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
