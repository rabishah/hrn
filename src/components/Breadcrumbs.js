import React, { Component } from 'react';
import cx from 'classnames';

import './Breadcrumbs.scss';

function Splitter(s) {
  const sClass = cx({
    'splitter': true,
    'opacity-50': !s.selected,
    'splitter--selected': s.selected
  });

  return (
    <span className={sClass}>/</span>
  )
}

class Breadcrumbs extends Component {
  render() {
    const { list, selected } = this.props;

    const $list = list.map((l, i) => {
      const lClass = cx({
        'opacity-50': i !== selected
      });

      return (
        <li className="Breadcrumbs__List" key={i + 'breadcrumbs'}>
          <div className={lClass}>{l}</div>
          <Splitter selected={i === selected || i  === selected - 1} />
        </li>
      )
    });

    return (
      <ul className="Breadcrumbs">{$list}</ul>
    )
  }
}

export default Breadcrumbs;
