import React from 'react';
import Link from 'react-router/lib/Link';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

const Home = () => (
  <Row>
    <Col span={24}>
      <h2>Welcome to Home.</h2>
      <Link to={'/accounts/login'}>Login</Link>
    </Col>
  </Row>
);

export default Home;
