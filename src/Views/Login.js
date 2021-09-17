import React, { Component } from "react";
import {
  Segment,
  Grid,
  Header,
  Image,
  Form,
  Loader,
  Dimmer,
  Container,
} from "semantic-ui-react";
import { friendOptions } from "./_DATA";

const SegmentExampleSegments = ({
  loading,
  generateDropdown,
  onChange,
  value,
  disabled,
  onSubmit,
}) => (
  <Segment.Group>
    <Header as="h4" block attached="top" textAlign="center">
      <Header.Content>Welcome to the Would You Rather App!</Header.Content>
      <Header.Subheader>Please sign in to continue</Header.Subheader>
    </Header>
    <Grid padded textAlign="center">
      <Grid.Row className="login">
        <Grid.Column width={16}>
          {loading === true && (
            <Dimmer active inverted>
              <Loader inverted content="Loading" />
            </Dimmer>
          )}
          <Image
            src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
            size="medium"
            centered
          />

          <br />
          {/* on submit yet to be done */}
          <Form onSubmit={onSubmit}>
            <Header as="h2" color="green">
              Sign In
            </Header>
            <Form.Dropdown
              placeholder="Select a Friend"
              fluid
              selection
              scrolling
              options={generateDropdown}
              value={value}
              onChange={onChange}
              required
            />
            <Form.Button content="Login" positive disabled={disabled} fluid />
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Segment>Bottom</Segment>
  </Segment.Group>
);

class Login extends Component {
  state = {
    loading: false,
    value: "",
  };

  Loader = () => {
    this.setState({ loading: true });
  };

  onChange = (e, { value }) => {
    this.setState({
      value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    setTimeout(this.props.onLogin(this.state.value), 1000);
  };

  render() {
    const { value } = this.state;
    console.log(value);
    const disabled = value === "" ? true : false;

    return (
      <div>
        <Container>
          <SegmentExampleSegments
            loading={this.Loader}
            onChange={this.onChange}
            generateDropdown={friendOptions}
            disabled={disabled}
            value={value}
            onSubmit={this.onSubmit}
          />
        </Container>
      </div>
    );
  }
}

export default Login;
