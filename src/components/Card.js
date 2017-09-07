import React, { Component } from 'react';
import classnames from 'classnames';
import Button from './Button.js';

import './Card.scss';

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    const { name, validity, price, discount, popular, promo, benefits } = this.props.ticket
    const { showBenefits } = this.props;

    const $benefits = benefits.map((b, i) => (
      <li key={i + "benefits"}>{b}</li>
    ));

    const cx = classnames({
      'Card': true,
      'Card--Small': !showBenefits,
      'Card--Big': showBenefits
    });

    return (
      <div className={cx}>
        {popular ? <div>Most Popular</div> : null}
        <h4 className="Card__Title">{name}</h4>
        <h1 className="Card__Price">{price}</h1>
        {discount ? <h6 className="Card__Discount">{discount}</h6> : null}
        <h5 className="Card__Validity">{validity}</h5>
        <div className="Spacing__30"></div>
        { showBenefits ? <ul className="Card__Benefits">{$benefits}</ul> : null }
        <div className="Card__Button">
          <Button type="card">Book Now</Button>
        </div>
      </div>
    )
  }
}

export default Card;
