import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Form,
  Header,
  Radio,
  Button,
  Segment,
} from "semantic-ui-react";
import { handleSaveQuestionAnswer } from "../Actions/users";

class ShowQuestion extends Component {
  state = {
    value: "",
  };

  onChange = (e, { value }) => {
    this.setState({
      value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.value !== "") {
      const { authedUser, question } = this.props;
      this.props.dispatch(
        handleSaveQuestionAnswer(authedUser, question.id, this.state.value)
      );
    }
  };

  render() {
    const { optionOne, optionTwo, id } = this.props.question;

    const disabled = this.state.value === "" ? true : false;

    return (
      <Container raised>
        <Segment>
          <Header as="h4">Would you rather</Header>
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <Radio
                label={optionOne.text}
                name="radioGroup"
                value="optionOne"
                checked={this.state.value === "optionOne"}
                onChange={this.onChange}
              />
              <br />
              <Radio
                label={optionTwo.text}
                name="radioGroup"
                value="optionTwo"
                checked={this.state.value === "optionTwo"}
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <Button
                color="green"
                size="tiny"
                fluid
                positive
                disabled={disabled}
                content="Submit"
              />
            </Form.Field>
          </Form>
        </Segment>
      </Container>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(ShowQuestion);
