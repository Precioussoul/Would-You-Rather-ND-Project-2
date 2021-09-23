import React, { Component } from "react";
import { connect } from "react-redux";
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
import { setAuthedUser } from "../Actions/authedUser";

class Login extends Component {
  state = {
    loading: false,
    value: "",
    image: "/Would.png",
  };

  Loader = () => {
    this.setState({
      loading: true,
    });
  };
  onChange = (e, { value }) => {
    this.setState({ value, image: `/images/${value}.png` });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const pickedUser = this.state.value;

    new Promise((resolve, reject) => {
      this.setState({ loading: true });
      setTimeout(() => resolve(), 1000);
    }).then(() => this.props.dispatch(setAuthedUser(pickedUser)));
  };

  generateDropdown = () => {
    const { ExistingUser } = this.props;
    console.log("existing user", ExistingUser);
    return ExistingUser.map((user) => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    }));
  };

  render() {
    const disabled = this.state.value === "" ? true : false;
    console.log("user", this.state.value);

    return (
      <Container>
        <Segment.Group>
          <Header as="h4" block attached="top" textAlign="center">
            <Header.Content>
              Welcome to the Would You Rather App!
            </Header.Content>
            <Header.Subheader>Please sign in to continue</Header.Subheader>
          </Header>
          <Grid padded textAlign="center">
            <Grid.Row className="login">
              <Grid.Column width={16}>
                {this.state.loading === true && (
                  <Dimmer active inverted>
                    <Loader size="large" content="Logging in" />
                  </Dimmer>
                )}
                <Image src={this.state.image} size="medium" centered />
                <p className="login_text">
                  {this.state.value === ""
                    ? `Welcome to the Game, Select Your Favorite User and Game on !!!!!!`
                    : `Hi, I'm ${this.state.value.replace(
                        /([a-z])([A-Z])/,
                        "$1 $2"
                      )} , Let Game  !!!! `}
                </p>
                <br />

                <Form onSubmit={this.onSubmit}>
                  <Header as="h2" color="green">
                    Sign In
                  </Header>
                  <Form.Dropdown
                    placeholder="Select a Friend"
                    fluid
                    selection
                    scrolling
                    options={this.generateDropdown()}
                    value={this.state.value}
                    onChange={this.onChange}
                    required
                  />
                  <Form.Button
                    content="Login"
                    positive
                    disabled={disabled}
                    fluid
                  />
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Segment>
            <a
              href="https://pixabay.com/images/search/avatar%20/"
              className="tiny"
            >
              Avatar characters was collected from pixabay - www.pixabay.com
            </a>
          </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    ExistingUser: Object.values(users),
  };
}

export default connect(mapStateToProps)(Login);
