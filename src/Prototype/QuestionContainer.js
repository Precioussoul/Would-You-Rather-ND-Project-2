import React, { Component } from "react";
import { Container, Segment, Grid, Header, Image } from "semantic-ui-react";
import ShowQuestion from "./ShowQuestion";
import ShowResult from "./ShowResult";

class QuestionContainer extends Component {
  state = {
    showResult: this.props.showResult,
  };

  onSubmit = () => {
    this.setState({
      showResult: true,
    });
  };

  render() {
    const { avatar, author, showResult } = this.props;
    return (
      <Container>
        <Segment.Group raised>
          <Header as="h5" textAlign="left" block attached="top">
            {author} asks:
          </Header>
          <Grid divided padded>
            <Grid.Row>
              <Grid.Column width={5}>
                <Image src={avatar} />
              </Grid.Column>
              <Grid.Column width={11}>
                {this.state.showResult === false ? (
                  <ShowQuestion
                    {...this.props}
                    onSubmit={this.onSubmit}
                    showResult={showResult}
                  />
                ) : (
                  <ShowResult {...this.props} />
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
      </Container>
    );
  }
}

export default QuestionContainer;
