import React, { PropTypes } from 'react';

class TreeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.defaultCollapsed,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(...args) {
    this.setState({ collapsed: !this.state.collapsed });
    if (this.props.onClick) {
      this.props.onClick(...args);
    }
  }

  render() {
    const {
      collapsed = this.state.collapsed,
      className = '',
      itemClassName = '',
      nodeLabel,
      children,
      ...rest
    } = this.props;

    let arrowClassName = 'tree-view_arrow';
    let containerClassName = 'tree-view_children';
    if (collapsed) {
      arrowClassName += ' tree-view_arrow-collapsed';
      containerClassName += ' tree-view_children-collapsed';
    }

    const arrow =
      (<div
        {...rest}
        className={`${className} ${arrowClassName}`}
      />);

    return (
      <div className="tree-view">
        <button className={`tree-view_item, ${itemClassName}`} onClick={this.handleClick}>
          {arrow}
          {nodeLabel}
        </button>
        <div className={containerClassName}>
          {collapsed ? null : children}
        </div>
      </div>
    );
  }

}

TreeView.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  defaultCollapsed: PropTypes.bool.isRequired,
  nodeLabel: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  itemClassName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default TreeView;
