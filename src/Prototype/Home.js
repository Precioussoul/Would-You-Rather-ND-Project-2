import React, { Component } from "react";
import { Container, Segment, Tab } from "semantic-ui-react";
import Question from "./Question";
import { QuestionPolls } from "./_DATA";

const panes = ({ handleResult }) => [
  {
    menuItem: "Unanswered",
    render: () => (
      <Tab.Pane>
        {QuestionPolls.unanswered.map((question) => (
          <Question
            key={question.qid}
            {...question}
            unanswered={true}
            handleResult={handleResult}
          />
        ))}
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Answered",
    render: () => (
      <Tab.Pane>
        {QuestionPolls.answered.map((question) => (
          <Question
            key={question.qid}
            {...question}
            unanswered={false}
            handleResult={handleResult}
          />
        ))}
      </Tab.Pane>
    ),
  },
];
const TabExampleBasicAll = ({ handleResult }) => (
  <Tab panes={panes({ handleResult })} className="tab" />
);

class Home extends Component {
  render() {
    const { handleResult } = this.props;
    return (
      <Container>
        <Segment className="ui mt5">
          <TabExampleBasicAll handleResult={handleResult} />
        </Segment>
      </Container>
    );
  }
}

export default Home;
