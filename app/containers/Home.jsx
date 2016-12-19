import React from 'react';
import Link from 'react-router/lib/Link';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';

const Home = () => (
  <Row>
    <Col span={24}>
      <h2>Welcome to Home.</h2>
      <Link to={'/login'}>Login</Link>
      <Button type="primary">Primary</Button>
    </Col>
  </Row>
);

export default Home;
