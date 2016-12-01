import React from 'react';

import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const nodes = (<div>Hello!!</div>);
    return nodes;
  }
}

App.propTypes = {};

export default connect()(App);
