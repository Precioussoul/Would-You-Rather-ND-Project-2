import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Segment,
  Grid,
  Header,
  Container,
  Image,
  Label,
  Divider,
  SegmentGroup,
} from "semantic-ui-react";

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;

    const newData = Object.values(users)
      .map((user) => ({
        id: user.id,
        name: user.name,
        avatar: user.avatarURL,
        answerCount: Object.values(user.answers).length,
        questionCount: user.questions.length,
        ScoreCount: Object.values(user.answers).length + user.questions.length,
      }))
      .sort((a, b) => b.ScoreCount - a.ScoreCount);

    console.log(newData);

    const rankingColor = ["orange", "teal", "brown", "blue", "violet"];
    return (
      <Container>
        <SegmentGroup raised inverted positive>
          <Segment color="pink">
            <Header
              as="h2"
              content="Welcome to the Hall of Fame"
              textAlign="center"
              color="pink"
              size="medium"
            />
          </Segment>
          {newData.map((leader, idx) => (
            <Segment.Group key={leader.id}>
              <Label
                corner="left"
                icon="chess king"
                size="huge"
                color={rankingColor[idx]}
              />
              <Grid divided padded>
                <Grid.Row>
                  <Grid.Column width={4} verticalAlign="middle">
                    <Image src={leader.avatar} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header as="h3" textAlign="left">
                      {leader.name}
                    </Header>
                    <Grid>
                      <Grid.Column width={12}>Answered questions</Grid.Column>
                      <Grid.Column width={4}>{leader.answerCount}</Grid.Column>
                    </Grid>
                    <Divider />
                    <Grid>
                      <Grid.Column width={12}>Created questions</Grid.Column>
                      <Grid.Column width={4}>
                        {leader.questionCount}
                      </Grid.Column>
                    </Grid>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign="center">
                    <Segment.Group>
                      <Header as="h5" block attached="top" content="Score" />
                      <Segment>
                        <Label circular color="pink" size="massive">
                          {leader.ScoreCount}
                        </Label>
                      </Segment>
                    </Segment.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment.Group>
          ))}
        </SegmentGroup>
      </Container>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
