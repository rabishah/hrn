import React, { Component } from 'react';
import cx from 'classnames';

import './Button.scss';

class Button extends Component {
  render() {
    const { type, handleClick } = this.props;
    const bClass = cx({
      'Button': true,
      'Button--Card': type === "card"
    });

    return (
      <button className={bClass} onClick={handleClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;
