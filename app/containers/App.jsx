import 'antd/dist/antd.css';

import React from 'react';
import connect from 'react-redux/lib/components/connect';
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
  children: React.PropTypes.instanceOf(Object).isRequired,
};

export default connect()(App);
