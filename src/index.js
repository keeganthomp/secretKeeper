import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducer from "./reducers";
import { Provider } from "react-redux";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
