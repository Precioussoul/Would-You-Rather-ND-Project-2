import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ShowQuestion from "./ShowQuestion";
import ShowResult from "./ShowResult";

class QuestionContainer extends Component {
  render() {
    const { showResult, question, pageNotFound } = this.props;

    if (pageNotFound === true) {
      return <Redirect to="/questions/notfound" />;
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
  let pageNotFound = false,
    showResult;

  const { question_id } = match.params;
  const question = questions[question_id];

  console.log("question is here", question);
  console.log("PageNotFound is here", pageNotFound);

  if (question === undefined) {
    pageNotFound = true;
  } else
    showResult =
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser);

  console.log("ids", question_id);
  return {
    question,
    pageNotFound,
    showResult,
  };
}
export default connect(mapStateToProps)(QuestionContainer);
