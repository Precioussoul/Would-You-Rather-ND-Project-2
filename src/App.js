import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./Views/Login";
import Navigation from "./Views/Navigation";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Login />
          <br />
          <br></br>
          <Navigation />
        </div>
      </Router>
    );
  }
}

export default App;
