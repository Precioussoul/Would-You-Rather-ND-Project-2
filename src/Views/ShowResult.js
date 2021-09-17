import React, { Component } from "react";
import {
  Container,
  Progress,
  Header,
  Segment,
  Label,
  Icon,
  Button,
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class ShowResult extends Component {
  onClick = () => {
    this.props.history.push("/");
  };

  render() {
    const { optionOne, optionTwo } = this.props;

    return (
      <Container>
        <Header as="h3">Results:</Header>
        <Segment color="pink" style={{ backgroundColor: "#fcd5ce" }}>
          <Label color="pink" ribbon="right" className="vote">
            <Icon name="thumbs up" size="big" className="compact" />
            <div style={{ float: "right" }}>
              Your
              <br />
              Vote
            </div>
          </Label>
          <p style={{ fontWeight: "bold" }}>{optionOne.text}</p>
          <Progress percent={((2 / 3) * 100).toFixed(2)} progress color="pink">
            2 out of 3 votes
          </Progress>
        </Segment>
        <Segment color="grey" style={{ backgroundColor: "#ccc" }}>
          <p style={{ fontWeight: "bold" }}>{optionTwo.text}</p>
          <Progress percent={((1 / 3) * 100).toFixed(2)} progress>
            1 out of 3 votes
          </Progress>
        </Segment>
        {/* <Form.Field> */}
        <Button animated floated="right" onClick={this.onClick}>
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </Container>
    );
  }
}

export default withRouter(ShowResult);
