import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../Actions/shared";
class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return <div>hello wolrd</div>;
  }
}

function mapStateToProps({ authUser }) {
  return {};
}
export default connect(mapStateToProps, { handleInitialData })(App);
