import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import { connect } from "react-redux";
import { handleInitialData } from "../Actions/shared";
import Login from "./Login";
import Navigation from "./Navigation";
import Home from "./Home";
import QuestionContainer from "./QuestionContainer";
import NewQuestion from "./NewQuestion";
import PageNotFound from "./PageNotFound";
import Leaderboard from "./Leaderboard";
class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
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
                  <Route exact path="/leaderboard" component={Leaderboard} />
                  <Route path="/questions/notfound" component={PageNotFound} />
                  <Route
                    path="/questions/:question_id"
                    component={QuestionContainer}
                  />
                </Switch>
              </Fragment>
            )}
          </div>
        </Fragment>
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
