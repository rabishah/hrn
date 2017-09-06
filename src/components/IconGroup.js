import React, { Component } from 'react';

class IconGroup extends Component {
  render() {
    const { icon, title } = this.props;

    return (
      <span>
        <i className={icon}></i>
        <span>{title}</span>
      </span>
    )
  }
}

export default IconGroup;
