import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthedUser } from "../Actions/authedUser";
import { Menu, Image, Button, Container } from "semantic-ui-react";

class Navigation extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    setTimeout(() => this.props.dispatch(setAuthedUser(null)), 500);
  };

  render() {
    const { authedUser, users } = this.props;
    console.log(("nav user", users[authedUser]));
    return (
      <Container>
        <Menu pointing secondary className="ui green">
          <Menu.Item name="home" as={NavLink} to="/" exact />
          <Menu.Item name="new Question" as={NavLink} to="/add" />
          <Menu.Item name="leader board" as={NavLink} to="/leaderboard" />
          <Menu.Menu position="right">
            <Menu.Item>
              <span>
                <Image
                  src={users[authedUser].avatarURL}
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                {users[authedUser].name}
              </span>
            </Menu.Item>
            <Menu.Item>
              <Button
                content="Logout"
                labelPosition="right"
                className="ui pink"
                compact
                icon="log out"
                size="mini"
                onClick={this.handleLogout}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Navigation);
