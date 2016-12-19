import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/components/connect';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import * as UserActions from 'actions/accounts/user.actions';
import Sidenav from 'components/layout/Sidenav';

const Dashboard = props => (
  <Row>
    <Col span={24}>
      <h3>Welcome to Dashboard.</h3>
      <Sidenav user={props.user} />
    </Col>
  </Row>
);

const mapStateToProps = state => ({
  user: state.accounts.user,
});

const mapDispatchToProps = dispatch => ({
  UserActions: bindActionCreators(UserActions, dispatch),
});

Dashboard.propTypes = {
  user: React.PropTypes.instanceOf(Object),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
