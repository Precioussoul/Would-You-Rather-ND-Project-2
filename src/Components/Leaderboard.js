import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Segment,
  GridRow,
  GridColumn,
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

    const rankingColor = ["orange", "teal", "brown", "blue", "violet"];
    return (
      <Container>
        <SegmentGroup raised>
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
            <SegmentGroup key={leader.id}>
              <Label
                corner="left"
                icon="chess king"
                size="huge"
                color={rankingColor[idx]}
              />
              <Grid divided padded>
                <GridRow>
                  <GridColumn width={4} verticalAlign="middle">
                    <Image src={leader.avatar} />
                  </GridColumn>
                  <GridColumn width={8}>
                    <Header as="h3" textAlign="left">
                      {leader.name}
                    </Header>
                    <Grid>
                      <GridColumn width={12}>Answered questions</GridColumn>
                      <GridColumn width={4}>{leader.answerCount}</GridColumn>
                    </Grid>
                    <Divider />
                    <Grid>
                      <GridColumn width={12}>Created questions</GridColumn>
                      <GridColumn width={4}>{leader.questionCount}</GridColumn>
                    </Grid>
                  </GridColumn>
                  <GridColumn width={4} textAlign="center">
                    <SegmentGroup>
                      <Header as="h5" block attached="top" content="Score" />
                      <Segment>
                        <Label circular color="pink" size="massive">
                          {leader.ScoreCount}
                        </Label>
                      </Segment>
                    </SegmentGroup>
                  </GridColumn>
                </GridRow>
              </Grid>
            </SegmentGroup>
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
