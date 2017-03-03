import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from 'styles/foundation/styles.scss';
import LayoutWithSideNav from 'containers/layout/LayoutWithSideNav';
import LayoutWithHeader from 'containers/layout/LayoutWithHeader';

import DevTools from './DevTools';


class App extends React.Component {

  componentWillMount() {
    console.log('Welcome to main Route');
  }

  render() {
    styles.use();
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
