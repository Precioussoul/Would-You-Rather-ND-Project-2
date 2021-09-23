import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Segment,
  Header,
  Grid,
  Divider,
  Form,
  Dimmer,
  Loader,
  Container,
} from "semantic-ui-react";
import { handleAddQuestion } from "../Actions/questions";

class NewQuestion extends Component {
  state = {
    validated: false,
    isLoading: false,
    optionOne: "",
    optionTwo: "",
  };
  onChange = (e) => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("this.state.option1", this.state.optionOne);
    console.log("this.state.option2", this.state.optionTwo);
    console.log("this is authUser", this.props.authedUser);

    const { authedUser } = this.props;
    const { optionOne, optionTwo } = this.state;
    new Promise((res, rej) => {
      this.setState({ isLoading: true });
      this.props.dispatch(handleAddQuestion(optionOne, optionTwo, authedUser));
      setTimeout(() => res("complete"), 1000);
    }).then(() => {
      this.setState({
        optionOne: "",
        optionTwo: "",
      });
      this.setState({ validated: true });
    });
  };
  render() {
    const disabled = this.state.optionOne === "" || this.state.optionTwo === "";
    if (this.state.validated === true) {
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <Segment.Group>
          <Header as="h3" textAlign="left" block attached="top">
            Create a New Question
          </Header>
          <Grid padded>
            <Grid.Column>
              {this.state.isLoading && (
                <Dimmer active inverted>
                  <Loader content="Submitting" />
                </Dimmer>
              )}
              <p>Complete the question:</p>
              <p>
                <strong>Would you rather...</strong>
              </p>
              <Form onSubmit={this.onSubmit}>
                <Form.Input
                  name="optionOne"
                  placeholder="Enter option one..."
                  value={this.state.optionOne}
                  onChange={this.onChange}
                  required
                />
                <Divider horizontal>Or</Divider>
                <Form.Input
                  name="optionTwo"
                  placeholder="Enter option two..."
                  value={this.state.optionTwo}
                  onChange={this.onChange}
                  required
                />
                <Form.Button positive size="tiny" fluid disabled={disabled}>
                  Submit
                </Form.Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Segment.Group>
      </Container>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
