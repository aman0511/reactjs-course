import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ExecutionEnvironment from 'exenv';
import foundationStyles from 'styles/foundation/styles.scss';
import commonStyles from 'styles/common.css';
import LayoutWithSideNav from 'containers/layout/LayoutWithSideNav';
import LayoutWithHeader from 'containers/layout/LayoutWithHeader';

import DevTools from './DevTools';


class App extends React.Component {

  componentWillMount() {
    console.log('Welcome to main Routes');
  }

  render() {
    foundationStyles.use();
    commonStyles.use();
    /* eslint-disable */
    if (ExecutionEnvironment.canUseDOM) {
      const loadersStyle = require('styles/loaders/styles.scss');
      const balloonStyle = require('balloon-css/src/balloon.scss');
      loadersStyle.use();
      balloonStyle.use();
    }
    /* eslint-enable */
    return (
      <div>
        <DevTools />
        <Switch>
          <Route path="/dashboard" component={LayoutWithSideNav} />
          <Route path="/accounts" component={LayoutWithHeader} />
          <Route path="/" component={LayoutWithHeader} />
        </Switch>
      </div>
    );
  }
}

export default App;
