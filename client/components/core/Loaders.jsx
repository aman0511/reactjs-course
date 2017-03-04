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

const ButtonLoader = (props) => {
  const { active } = props;
  if (!active) {
    return null;
  }
  return (
    <div className="loader-inner ball-clip-rotate">
      <div />
    </div>
  );
};

ButtonLoader.propTypes = {
  active: React.PropTypes.bool.isRequired,
};

export {
  FullScreenLoader,
  ButtonLoader,
};
