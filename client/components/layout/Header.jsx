import React from 'react';
import Link from 'react-router-dom/Link';


const Header = (props) => {
  const { profile, profileFullName, logout } = props;
  return (
    <div className="top-bar">
      <div className="top-bar-title">
        <Link to="/">T2B Skeleton</Link>
      </div>
      <div>
        <div className="top-bar-right">
          {profile ?
            <ul className="menu">
              <li><Link to="/accounts/login">{profileFullName}</Link></li>
              <li>
                <button type="button" className="button" onClick={logout}>logout</button>
              </li>
            </ul> :
            <ul className="menu">
              <li><Link to="/accounts/login">Login</Link></li>
              <li>
                <Link to="/accounts/register" className="button">Register</Link>
              </li>
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  profile: React.PropTypes.instanceOf(Object).isRequired,
  profileFullName: React.PropTypes.string.isRequired,
  logout: React.PropTypes.func.isRequired,
};

export default Header;
