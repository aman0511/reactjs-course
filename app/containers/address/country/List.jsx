import React from 'react';
import Helmet from 'react-helmet';
import connect from 'react-redux/lib/components/connect';

import { COUNTRY } from '../../seo';


class CountryList extends React.Component {

  constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
  }

  goTo() {
    console.log(this);
    console.log('go to somewhere');
  }

  render() {
    return (
      <div>
        <Helmet title={COUNTRY.title} meta={COUNTRY.meta} />
        <h3>Welcome to COUNTRY.</h3>
      </div>
    );
  }

}

CountryList.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryList);
