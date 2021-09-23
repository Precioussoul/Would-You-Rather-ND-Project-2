import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { handleInitialData } from "../Actions/shared";
import Login from "./Login";
import Navigation from "./Navigation";
import Home from "./Home";
import QuestionContainer from "./QuestionContainer";
import NewQuestion from "./NewQuestion";
import PageNotFound from "./PageNotFound";
class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <div className="App">
          {authedUser === null ? (
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
                <Route exact path="/add" component={NewQuestion} />
                <Route path="/questions/notfound" component={PageNotFound} />
                <Route
                  path="/questions/:question_id"
                  component={QuestionContainer}
                />
              </Switch>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps, { handleInitialData })(App);
