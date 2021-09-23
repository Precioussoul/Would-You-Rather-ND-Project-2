import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Segment, Grid, Header, Button, Image } from "semantic-ui-react";

class Question extends Component {
  state = {
    viewQuestion: false,
  };
  handlePollResult = (result) => {
    this.setState({
      showResult: result,
    });
  };

  handleViewQuestion = (e) => {
    e.preventDefault();
    this.handlePollResult(!this.props.unanswered);
    this.setState((currentState) => ({
      viewQuestion: !currentState.viewQuestion,
    }));
  };

  render() {
    const { avatar, author, qid, question, unanswered } = this.props;

    console.log("this is unanswered", unanswered);
    console.log(" showResult state", this.state.showResult);

    const color = unanswered === true ? "pink" : "green";
    const bordercolor = unanswered === true ? "pink" : "green";

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
          content={`${author} asks:`}
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
                {question.optionOne.text}
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

function mapStateToProps({ users }, { question, unanswered }) {
  const avatar = users[question.author].avatarURL;
  const author = users[question.author].name;
  const qid = question.id;
  return {
    author,
    avatar,
    question,
    qid,
    unanswered,
  };
}

export default connect(mapStateToProps)(Question);
