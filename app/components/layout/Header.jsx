import React from 'react';

const Header = (props) => {
  const { profile, profileFullName } = props;
  console.log(profile, profileFullName);
  return (
    <div className="top-bar">
      <div className="top-bar-title">T2B Skeleton</div>
      <div>
        <div className="top-bar-right">
          <ul className="menu">
            {profile && profile.username ?
              <li>
                Welcome {profileFullName}
              </li> :
              <li>
                <button type="button" className="button">Login</button>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  profile: React.PropTypes.instanceOf(Object),
  profileFullName: React.PropTypes.string,
};

export default Header;
