import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import "semantic-ui-css/semantic.min.css";
import middleware from "./Middleware";
import reducer from "./Reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
