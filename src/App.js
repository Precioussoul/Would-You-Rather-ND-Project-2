import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Views/Home";

import Login from "./Views/Login";
import Navigation from "./Views/Navigation";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <br></br>

          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/login" render={() => <Login />} />
          <br />
          {/* <Navigation /> */}
          <br />
          <br></br>
          {/* <Home /> */}
        </div>
      </Router>
    );
  }
}

export default App;
