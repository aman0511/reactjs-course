import React from 'react';
import Helmet from 'react-helmet';
import connect from 'react-redux/lib/components/connect';
// import DevTools from './DevTools';

import { APP } from './seo';
/* eslint-disable */
if ( 'undefined' !== typeof window ) {
  require( './../../assets/styles/foundation/styles.scss' );
}
/* eslint-enable */


class App extends React.Component {

  render() {
    const { children } = this.props;
    const nodes = (
      <section>
        <Helmet title={APP.title} meta={APP.meta} />
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
