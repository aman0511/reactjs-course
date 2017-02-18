import React from 'react';
import Link from 'react-router/lib/Link';

const Sidenav = (props) => {
  const { profile: { states }, profileFullName } = props;
  return (
    <section>
      {profileFullName}
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
  profile: React.PropTypes.instanceOf(Object),
  profileFullName: React.PropTypes.string,
};

export default Sidenav;
