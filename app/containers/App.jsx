import 'antd/dist/antd.css';

import React from 'react';
import { connect } from 'react-redux';
// import DevTools from './DevTools';

class App extends React.Component {

  render() {
    const { children } = this.props;
    const nodes = (
      <section id="main-container">
        { children }
        {/* <DevTools /> */}
      </section>
    );
    return nodes;
  }

}

App.propTypes = {
  children: React.PropTypes,
};

export default connect()(App);
