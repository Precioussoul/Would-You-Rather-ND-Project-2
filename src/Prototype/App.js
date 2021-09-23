//  this application is a PROTOTYPE UI GUIDE For my application with SEMANTIC-UI-REACT for building UI

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";

import Login from "./Login";
import Navigation from "./Navigation";
import NewQuestion from "./NewQuestion";
import QuestionContainer from "./QuestionContainer";
import { questionData } from "./_DATA";
import PageNotFound from "./PageNotFound";

//  this application is a PROTOTYPE UI GUIDE For my application with SEMANTIC-UI-REACT for building UI

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
              <Route render={() => <Login onLogin={this.onLogin} />} />
            </div>
          )}

          <br></br>
          <Switch>
            <Route exact path="/login" render={() => <Login />} />
            <Route exact path="/add" render={() => <NewQuestion />} />
            <Route exact path="/leaderboard" render={() => <LeaderBoard />} />
            <Route exact path="/404" render={() => <PageNotFound />} />
            <Route
              path="/questions/:question_id"
              render={() => (
                <QuestionContainer
                  {...questionData}
                  showResult={this.state.showResult}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

//  this application is a PROTOTYPE UI GUIDE For my application with SEMANTIC-UI-REACT for building UI
