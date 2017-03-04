import React from 'react';


const FullScreenLoader = (props) => {
  const { active } = props;
  if (!active) {
    return null;
  }
  return (
    <div className="fullPageLoader">
      <div className="loader-inner ball-scale-ripple-multiple">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

FullScreenLoader.propTypes = {
  active: React.PropTypes.bool.isRequired,
};

export default FullScreenLoader;
