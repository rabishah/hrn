import React, { Component } from 'react';
import classnames from 'classnames';

import './List.scss';

class List extends Component {
  render() {
    const { itemSpacing, list, name, placement, wrap } = this.props;

    const ulClass = classnames({
      'Flex': true,
      'Flex--Center': placement === "center",
      'Flex--Wrap': wrap === true
    });

    const liClass = classnames({
      'Margin__Right--1em': itemSpacing === "1em",
      'Margin__Right--1p5em': itemSpacing === "1.5em"
    });

    const $li = list.map((b, i) => (
      <li key={i + name} className={liClass}>{b}</li>
    ));

    return (
      <ul className={ulClass}>{$li}</ul>
    )
  }
}

export default List;
