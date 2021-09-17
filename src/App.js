import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import LeaderBoard from "./Views/LeaderBoard";

import Login from "./Views/Login";
import Navigation from "./Views/Navigation";
import NewQuestion from "./Views/NewQuestion";
import Question from "./Views/QuestionContainer";
import { questionData } from "./Views/_DATA";

class App extends Component {
  state = {
    authedUser: false,
    showResult: false,
    user: "",
  };
  onLogin = (pickeduser) => {
    this.setState({
      authedUser: true,
      user: pickeduser,
    });
  };
  onLogout = () => {
    this.setState({
      authedUser: false,
    });
  };
  handlePollResult = (result) => {
    this.setState({
      showResult: result,
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          {this.state.authedUser === true ? (
            <Fragment>
              <Navigation onLogout={this.onLogout} user={this.state.user} />
              <Route
                exact
                path="/"
                render={() => <Home handleResult={this.handlePollResult} />}
              />
            </Fragment>
          ) : (
            <div>
              <Login onLogin={this.onLogin} />
            </div>
          )}

          <br></br>

          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/add" render={() => <NewQuestion />} />
          <Route exact path="/leaderboard" render={() => <LeaderBoard />} />
          <Route
            path="/questions/:question_id"
            render={() => (
              <Question {...questionData} showResult={this.state.showResult} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
