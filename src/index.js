//react imports
import React from "react";
import ReactDOM from "react-dom";

//router imports
import { BrowserRouter, Switch, Route } from "react-router-dom";

//redux imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import reduxThunk from "redux-thunk";
import Cookies from "js-cookie";

//import styles
import "./styles/index.css";

//component imports
import { App } from "./components/App";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation";

//create store for redux and apply middleware
export const store = createStore(applyMiddleware(reduxThunk));

//wrap provider around router
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
