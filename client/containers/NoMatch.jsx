import React, { Component, PropTypes } from 'react';

class NoMatch extends Component {
  componentWillMount() {
    if (this.context.router.staticContext) {
      this.context.router.staticContext.status = 404;
    }
  }

  render() {
    return (
      <div>
        <h1>Page not found</h1>
      </div>
    );
  }
}

NoMatch.contextTypes = {
  router: PropTypes.shape({
    staticContext: PropTypes.shape(),
  }).isRequired,
};

export default NoMatch;
