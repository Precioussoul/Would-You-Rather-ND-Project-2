import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";

const SegmentExamplePlaceholderInline = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name="eye slash" />
      Sorry, we don't have the page you're looking for
    </Header>
    <Segment>
      <Link to="/">
        <Button animated floated="right">
          <Button.Content visible>back</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </Link>
    </Segment>
  </Segment>
);

class PageNotFound extends Component {
  render() {
    return (
      <Container>
        <SegmentExamplePlaceholderInline />
      </Container>
    );
  }
}

export default PageNotFound;
