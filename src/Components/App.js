import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { handleInitialData } from "../Actions/shared";
import Login from "./Login";
import Navigation from "./Navigation";
import Home from "./Home";
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
            <Fragment>
              <Navigation />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/questions/:question_id" component={Login} />
              </Switch>
            </Fragment>
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
