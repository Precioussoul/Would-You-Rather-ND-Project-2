import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { handleInitialData } from "../Actions/shared";
import Login from "./Login";
import Navigation from "./Navigation";
class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authUser } = this.props;
    return (
      <Router>
        <div className="App">
          {authUser === null ? (
            <Route
              render={() => (
                <Fragment>
                  <Login />
                </Fragment>
              )}
            />
          ) : (
            <Navigation />
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}
export default connect(mapStateToProps, { handleInitialData })(App);
