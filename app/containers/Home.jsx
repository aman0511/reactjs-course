import React from 'react';
import { Link } from 'react-router';

import { Row, Col } from 'antd';

const Home = () => (
  <Row>
    <Col span={24}>
      <h2>Welcome to Home.</h2>
      <Link to={'/login'}>Login</Link>
    </Col>
  </Row>
);

export default Home;
