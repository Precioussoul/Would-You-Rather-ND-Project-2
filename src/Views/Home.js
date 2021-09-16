import React, { Component } from "react";
import { render } from "react-dom";
import { Container, Segment, Tab } from "semantic-ui-react";
import Navigation from "./Navigation";
import Question from "./Question";

const QuestionPolls = {
  unanswered: [
    {
      qid: 2,
      author: "Jack grealish",
      avatar: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
      question: "visit me a playing ground",
    },
    {
      qid: 1,
      author: "John doe",
      avatar: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
      question: "let do pair programming",
    },
    {
      qid: 5,
      author: "Desire lingard",
      avatar: "https://react.semantic-ui.com/images/avatar/small/stevie.jpg",

      question: "please go ahead , am with you",
    },
  ],
  answered: [
    {
      qid: 4,
      author: "Christiano",
      avatar: "https://react.semantic-ui.com/images/avatar/small/christian.jpg",

      question: "Teach me how to code",
    },
    {
      qid: 3,
      author: "Matt Rivera",
      avatar: "https://react.semantic-ui.com/images/avatar/small/matt.jpg",

      question: "Run your own dev company",
    },
    {
      qid: 6,
      author: "Justen Kutriene",
      avatar: "https://react.semantic-ui.com/images/avatar/small/justen.jpg",

      question: "do i own you Money",
    },
  ],
};

// const banes = [
//   {
//     menuItem: "Unanswered",
//     pane: () => (
//       <Tab.Pane>
//         {/* {QuestionPolls.unanswered.map((question) => (
//           <Question key={question.qid} {...question} unanswered={true} />
//         ))} */}
//         this is render A
//       </Tab.Pane>
//     ),
//   },
//   {
//     menuItem: "Answered",
//     pane: () => (
//       <Tab.Pane>
//         {/* {QuestionPolls.answered.map((question) => (
//           <Question key={question.qid} {...question} unanswered={false} />
//         ))} */}
//         B
//       {/* </Tab.Pane> */}
//     ),
//   },
// ];

const panes = [
  {
    menuItem: "Unanswered",
    render: () => (
      <Tab.Pane>
        {QuestionPolls.unanswered.map((question) => (
          <Question
            key={question.qid}
            {...question}
            unanswered={true}
            // {...props}
            //   onSetResult={props.onSetResult}
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
            // {...props}
            //   onSetResult={props.onSetResult}
          />
        ))}
      </Tab.Pane>
    ),
  },
];
const TabExampleBasicAll = () => <Tab panes={panes} className="tab" />;

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Segment className="ui mt5">
          <TabExampleBasicAll />
        </Segment>
      </Container>
    );
  }
}

export default Home;
