import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Image, Button, Container } from "semantic-ui-react";
class Navigation extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.onLogout();
  };
  render() {
    const { user } = this.props;

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
                  src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                {user}
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

export default Navigation;
