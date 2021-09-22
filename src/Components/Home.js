import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Segment, Tab } from "semantic-ui-react";
import Question from "./Question";

const panes = ({ QuestionPolls }) => [
  {
    menuItem: "Unanswered",
    render: () => (
      <Tab.Pane>
        {QuestionPolls.unAnsweredQuestion.map((question) => (
          <Question key={question.id} question={question} unanswered={true} />
        ))}
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Answered",
    render: () => (
      <Tab.Pane>
        {QuestionPolls.answeredQuestion.map((question) => (
          <Question key={question.id} question={question} unanswered={false} />
        ))}
      </Tab.Pane>
    ),
  },
];

const TabExampleBasicAll = ({ QuestionPolls }) => (
  <Tab panes={panes({ QuestionPolls })} className="tab" />
);

class Home extends Component {
  render() {
    const { QuestionPolls } = this.props;
    console.log("question poll", QuestionPolls);

    return (
      <Container>
        <Segment className="ui mt5">
          <TabExampleBasicAll QuestionPolls={QuestionPolls} />
        </Segment>
      </Container>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  const answered_id = Object.keys(questions).filter(
    (questions_id) =>
      questions[questions_id].optionOne.votes.includes(authedUser) ||
      questions[questions_id].optionTwo.votes.includes(authedUser)
  );
  const unanswered_id = Object.keys(questions).filter(
    (questions_id) =>
      !questions[questions_id].optionOne.votes.includes(authedUser) &&
      !questions[questions_id].optionTwo.votes.includes(authedUser)
  );

  const answeredQuestion = answered_id
    .map((id) => ({
      id,
      author: questions[id].author,
      optionOne: questions[id].optionOne,
      optionTwo: questions[id].optionTwo,
      timestamp: questions[id].timestamp,
    }))
    .sort((a, b) => b.timestamp - a.timestamp);

  const unAnsweredQuestion = unanswered_id
    .map((id) => ({
      id,
      author: questions[id].author,
      optionOne: questions[id].optionOne,
      optionTwo: questions[id].optionTwo,
      timestamp: questions[id].timestamp,
    }))
    .sort((a, b) => b.timestamp - a.timestamp);

  console.log("this is answered_id", answered_id);
  console.log("this is unanswered_id", unanswered_id);
  console.log("this is answeredQuestion", answeredQuestion);
  console.log("this is UnansweredQuestion", unAnsweredQuestion);

  return {
    QuestionPolls: {
      unAnsweredQuestion,
      answeredQuestion,
    },
  };
}
export default connect(mapStateToProps)(Home);

//   />
