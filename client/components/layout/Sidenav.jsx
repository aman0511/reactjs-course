import React from 'react';
import { Link } from 'react-router-dom';

import TreeView from 'components/core/TreeView';
import routesMapping from 'containers/layout/routesMapping';

const Sidenav = (props) => {
  const { profile, profileFullName } = props;
  console.log(profileFullName);

  return (
    <nav>
      {profile && profile.sidemenu.map((node) => {
        const label = <span className="node">{node.label}</span>;
        return node.children.length > 0 ?
        (<TreeView key={node.name} nodeLabel={label} defaultCollapsed={false}>
          {node.children.map((entity) => {
            const label2 = <span className="node">{entity.label}</span>;
            return entity.children.length > 0 ?
              (<TreeView nodeLabel={label2} key={entity.name} defaultCollapsed={false}>
                {entity.children.map(action =>
                  <Link to={routesMapping[action.name]}>{action.label}</Link>)
                }
              </TreeView>) :
              <Link to={routesMapping[entity.name]}>{entity.label}</Link>;
          })}
        </TreeView>) :
        <Link to={routesMapping[node.name]}>{node.label}</Link>;
      })}
    </nav>
  );
};

Sidenav.propTypes = {
  profile: React.PropTypes.instanceOf(Object).isRequired,
  profileFullName: React.PropTypes.string.isRequired,
};

export default Sidenav;
