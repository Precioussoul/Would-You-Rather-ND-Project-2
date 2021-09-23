import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import ShowQuestion from "./ShowQuestion";
import ShowResult from "./ShowResult";

class QuestionContainer extends Component {
  render() {
    const { showResult, question, PageNotFound } = this.props;

    if (PageNotFound) {
      return <Redirect to="/questions/404" />;
    }
    return (
      <div>
        {showResult ? (
          <ShowResult question={question} />
        ) : (
          <ShowQuestion question={question} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }, { match }) {
  const { question_id } = match.params;
  const question = questions[question_id];

  let PageNotFound = false;
  if (!question) PageNotFound = true;
  console.log("question is here", question);

  const showResult =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  console.log("ids", question_id);
  return {
    question,
    PageNotFound,
    showResult,
  };
}
export default connect(mapStateToProps)(withRouter(QuestionContainer));
