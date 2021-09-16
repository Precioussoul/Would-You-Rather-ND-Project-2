import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  Responsive,
  Image,
  Grid,
  Button,
  Container,
} from "semantic-ui-react";

class Navigation extends Component {
  render() {
    return (
      <Container>
        <Menu pointing inverted className="ui green">
          <Menu.Item name="home" as={NavLink} to="/" exact />
          <Menu.Item name="new poll" as={NavLink} to="/add" />
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
                Sofiyullah
              </span>
            </Menu.Item>
            <Menu.Item>
              <Button
                content="Logout"
                labelPosition="right"
                basic
                compact
                icon="log out"
                size="mini"
                // onClick={}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

export default Navigation;
