import React, { Component } from "react";
import "../styles/App.css";
import { login } from "../actions";
import { loadTokenFromCookie } from "../actions";
import { connect } from "react-redux";

class Login extends Component {
  render() {
    return (
      <div className="App">
        <h1>Login</h1>
        <form action="">
          <input type="text" placeholder="USERNAME" />
          <input type="text" placeholder="PASSWORD" />
          <input type="button" onClick={()=>this.props.login()} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    login: login
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
