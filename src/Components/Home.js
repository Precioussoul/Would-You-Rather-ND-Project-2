import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Segment, Tab } from "semantic-ui-react";

const panes = ({ handleResult, QuestionPolls }) => [
  {
    menuItem: "Unanswered",
    render: () => (
      <Tab.Pane>
        {QuestionPolls.unanswered.map((question) => (
          <div key={question.id}>{question.optionOne.text}</div>
        ))}
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Answered",
    render: () => (
      <Tab.Pane>
        {QuestionPolls.answered.map((question) => (
          <div key={question.id}>{question.optionTwo.text}</div>
        ))}
      </Tab.Pane>
    ),
  },
];

const TabExampleBasicAll = ({ handleResult, QuestionPolls }) => (
  <Tab panes={panes({ handleResult, QuestionPolls })} className="tab" />
);

class Home extends Component {
  render() {
    const { QuestionPolls } = this.props;
    console.log("question poll", QuestionPolls);

    const { handleResult } = this.props;
    return (
      <Container>
        <Segment className="ui mt5">
          <TabExampleBasicAll
            QuestionPolls={QuestionPolls}
            handleResult={handleResult}
          />
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

//   <Question
//     key={question.qid}
//     {...question}
//     unanswered={true}
//     handleResult={handleResult}
//   />

//   <Question
//     key={question.qid}
//     {...question}
//     unanswered={false}
//     handleResult={handleResult}
//   />
