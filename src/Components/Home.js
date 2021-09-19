import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Segment, Tab } from "semantic-ui-react";
import Question from "./Question";

const panes = ({ QuestionPolls }) => [
  {
    menuItem: "Unanswered",
    render: () => (
      <Tab.Pane>
        {QuestionPolls.unanswered.map((question) => (
          <Question key={question.qid} question={question} unanswered={true} />
        ))}
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Answered",
    render: () => (
      <Tab.Pane>
        {QuestionPolls.answered.map((question) => (
          <Question key={question.qid} question={question} unanswered={false} />
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

function mapStateToProps({ authUser, users, questions }) {
  const ansIds = Object.keys(users[authUser].answers);

  const answered = Object.values(questions)
    .filter((question) => !ansIds.includes(question.id))
    .sort((b, a) => b.timestamp - a.timestamp);

  const unanswered = Object.values(questions)
    .filter((question) => ansIds.includes(question.id))
    .sort((b, a) => b.timestamp - a.timestamp);

  console.log("this is answered", answered);
  console.log("this is unanswered", unanswered);

  return {
    QuestionPolls: {
      answered,
      unanswered,
    },
  };
}
export default connect(mapStateToProps)(Home);

//   />
