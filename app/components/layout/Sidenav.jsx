import React from 'react';
import Link from 'react-router/lib/Link';

const Sidenav = (props) => {
  const { profile: { sidemenu }, profileFullName, routesMapping } = props;
  return (
    <section>
      {profileFullName}
      {sidemenu.map((item, index) => (
        item.children.length > 0 ?
        item.children.map((nestedItem, nestedIndex) => (
          nestedItem.children.length > 0 ?
            nestedItem.children.map((nestedItem2, nestedIndex2) => (
              (<div key={nestedIndex2}>
                <div>
                  <Link to={routesMapping[nestedItem2.name]}>{nestedItem2.label}</Link>
                  <br />
                </div>
              </div>)
            )) :
            (<div key={nestedIndex}>
              <div>
                <Link to={routesMapping[nestedItem.name]}>{nestedItem.label}</Link>
                <br />
              </div>
            </div>)
        )) :
        (<div key={index}>
          <div>
            <Link to={routesMapping[item.name]}>{item.label}</Link>
            <br />
          </div>
        </div>)
      ))}
    </section>
  );
};

Sidenav.propTypes = {
  profile: React.PropTypes.instanceOf(Object),
  profileFullName: React.PropTypes.string,
  routesMapping: React.PropTypes.instanceOf(Object),
};

export default Sidenav;
