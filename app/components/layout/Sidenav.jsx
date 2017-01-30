import React from 'react';
import Link from 'react-router/lib/Link';

const Sidenav = (props) => {
  const { user: { profile: { states } } } = props;
  return (
    <section>
      {states.map((item, index) => (
        item.position === 'nav' && (
          <div key={index}>
            <div>
              <Link to={item.url}>{item.label}</Link>
              <br />
            </div>
          </div>
        )
      ))}
    </section>
  );
};

Sidenav.propTypes = {
  user: React.PropTypes.instanceOf(Object),
};

export default Sidenav;
