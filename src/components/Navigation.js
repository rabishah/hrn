import React, { Component } from 'react';
import classnames from 'classnames';

import IconGroup from './IconGroup.js';

import './Navigation.scss';

class Navigation extends Component {
  render() {
    const { list } = this.props;

    const ulClass = classnames({
      'Flex': true,
      'Flex--Space-Between': true
    });

    const liClass = classnames({
    });

    return (
      <ul className={ulClass}>
        <li className="blue"><IconGroup icon="fa fa-user" title="Single Attandee" /></li>
        <li><IconGroup icon="fa fa-users" title="Group Tickets" /></li>
        <li><IconGroup icon="fa fa-bullseye" title="Investors" /></li>
        <li><IconGroup icon="fa fa-lightbulb-o" title="Startups" /></li>
      </ul>
    )
  }
}

export default Navigation;
