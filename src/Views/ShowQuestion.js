import React, { Component } from "react";
import {
  Container,
  Form,
  Header,
  Radio,
  Button,
  Segment,
} from "semantic-ui-react";

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
      this.props.onSubmit();
    }
  };

  render() {
    const { optionOne, optionTwo } = this.props;
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

export default ShowQuestion;
