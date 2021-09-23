import React, { Component } from "react";
import {
  Container,
  Progress,
  Header,
  Segment,
  Label,
  Icon,
  Button,
  SegmentGroup,
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const style = {
  active: {
    color: "pink",
    bg: "#fcd5ce",
  },
  base: {
    color: "grey",
    bg: "#ccc",
  },
};

const Voted = () => {
  return (
    <Label color="pink" ribbon="right" className="vote">
      <Icon name="thumbs up" size="big" className="compact" />
      <div style={{ float: "right" }}>
        Your
        <br />
        Vote
      </div>
    </Label>
  );
};
class ShowResult extends Component {
  onClick = () => {
    this.props.history.push("/");
  };

  render() {
    const { optionOne, optionTwo, id } = this.props.question;
    const optionOne_vote = optionOne.votes.length;
    const optionTwo_vote = optionTwo.votes.length;
    const totalVotes = optionOne_vote + optionTwo_vote;
    const vote = this.props.user.answers[id];

    let option_one = style.base,
      option_two = style.base;
    if (optionOne_vote > optionTwo_vote) {
      option_one = style.active;
    } else if (optionTwo_vote > optionOne_vote) {
      option_two = style.active;
    }
    return (
      <Container>
        <SegmentGroup>
          <Header as="h3" textAlign="left" block attached="top">
            Results:
          </Header>
          <Segment
            color={option_one.color}
            style={{ backgroundColor: `${option_one.bg}` }}
          >
            {vote === "optionOne" && <Voted />}
            <p style={{ fontWeight: "bold" }}>{optionOne.text}</p>
            <Progress
              percent={((optionOne_vote / totalVotes) * 100).toFixed(2)}
              progress
              color={option_one.color}
            >
              {optionOne_vote} out of {totalVotes} votes
            </Progress>
          </Segment>
          <Segment
            color={option_two.color}
            style={{ backgroundColor: ` ${option_two.bg}` }}
          >
            {vote === "optionTwo" && <Voted />}
            <p style={{ fontWeight: "bold" }}>{optionTwo.text}</p>
            <Progress
              percent={((optionTwo_vote / totalVotes) * 100).toFixed(2)}
              progress
              color={option_two.color}
            >
              {optionTwo_vote} out of {totalVotes} votes
            </Progress>
          </Segment>
          <Link to="/">
            <Button animated floated="right" onClick={this.onClick} size="big">
              <Button.Content visible>Back</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow left" />
              </Button.Content>
            </Button>
          </Link>
        </SegmentGroup>
      </Container>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  return {
    user,
  };
}

export default connect(mapStateToProps)(withRouter(ShowResult));
