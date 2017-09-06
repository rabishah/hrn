import React, { Component } from 'react';
import cx from 'classnames';


class Button extends Component {
  render() {
    const { type } = this.props;
    const bClass = cx({
      'Button': true,
      'Button--Card': type === "card"
    });

    return (
      <button className={bClass}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;
