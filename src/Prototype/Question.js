import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Segment, Grid, Header, Button, Image } from "semantic-ui-react";

class Question extends Component {
  state = {
    viewQuestion: false,
  };
  handleViewQuestion = (e) => {
    this.props.handleResult(!this.props.unanswered);

    e.preventDefault();
    this.setState((currentState) => ({
      viewQuestion: !currentState.viewQuestion,
    }));
  };

  render() {
    const { avatar, author, question, qid, unanswered } = this.props;
    // const { unanswered } = this.props.unanswered;
    const author = users[question.author];
    console.log(unanswered);
    const color = unanswered === true ? "ui pink" : " ui green";
    const bordercolor = unanswered === true ? "pink" : " green";

    if (this.state.viewQuestion === true) {
      return <Redirect push to={`/questions/${qid}`} />;
    }
    return (
      <Segment.Group raised>
        <Header
          as="h5"
          textAlign="left"
          block
          attached="top"
          style={{
            borderTop: `2px solid ${bordercolor}`,
          }}
          content={`${author.name} asks:`}
        />
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={avatar} />
            </Grid.Column>
            <Grid.Column width={11} textAlign="center">
              <Header as="h5" textAlign="left">
                Would you rather
              </Header>
              <p>
                {question}
                <br />
                or...
              </p>
              <Button
                color={color}
                size="tiny"
                fluid
                onClick={this.handleViewQuestion}
                content={unanswered === true ? "Answer Question" : "Results"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

export default Question;
