import React from 'react';
import Link from 'react-router-dom/Link';

const Sidenav = (props) => {
  const { profile, profileFullName } = props;
  console.log(profile);
  return (
    <nav>
      <ul>
        <li>Welcome {profileFullName}</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="dashboard">Dashboard</Link></li>
        <li><Link to="/not">Not Found</Link></li>
      </ul>
    </nav>
  );
};

Sidenav.propTypes = {
  profile: React.PropTypes.instanceOf(Object).isRequired,
  profileFullName: React.PropTypes.string.isRequired,
};

export default Sidenav;
