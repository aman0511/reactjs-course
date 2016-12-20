import React from 'react';
import Link from 'react-router/lib/Link';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

const Sidenav = (props) => {
  const { user: { profile: { states } } } = props;
  return (
    <section>
      {states.map((item, index) => (
        item.position === 'nav' && (
          <Row key={index}>
            <Col span={24}>
              <Link to={item.url}>{item.label}</Link>
              <br />
            </Col>
          </Row>
        )
      ))}
    </section>
  );
};

Sidenav.propTypes = {
  user: React.PropTypes.instanceOf(Object),
};

export default Sidenav;
