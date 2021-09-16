import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Segment, Grid, Header, Button, Image } from "semantic-ui-react";

class Question extends Component {
  state = {
    viewPoll: false,
  };

  render() {
    const { avatar, author, question, qid, unanswered } = this.props;
    // const { unanswered } = this.props.unanswered;
    console.log(unanswered);
    const color = unanswered === true ? "ui olive" : " ui green";

    if (this.state.viewPoll === true) {
      return <Redirect push to={`/questions/${qid}`} />;
    }
    return (
      <Segment.Group>
        <Header
          as="h5"
          textAlign="left"
          block
          attached="top"
          style={{
            borderTop: `2px solid green`,
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
                {question}
                <br />
                or...
              </p>
              <Button
                color={color}
                size="tiny"
                fluid
                onClick={this.handleClick}
                content={unanswered === true ? "Answer Poll" : "Results"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

export default Question;
