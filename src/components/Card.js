import React, { Component } from 'react';
import Button from './Button.js';

class Card extends Component {
  render() {
    const { name, validity, price, discount, popular, promo, benefits } = this.props.ticket

    const $benefits = benefits.map((b, i) => (
      <li key={i + "benefits"}>{b}</li>
    ))

    return (
      <div className="Card">
        {popular ? <div>Most Popular</div> : null}
        <h4 className="Card__Title">{name}</h4>
        <h1 className="Card__Price">{price}</h1>
        {discount ? <h6 className="Card__Discount">{discount}</h6> : null}
        <h5 className="Card__Validity">{validity}</h5>
        <div className="Spacing__30"></div>
        <ul className="Card__Benefits">{$benefits}</ul>
        <div className="Card__Button">
          <Button type="card">Book Now</Button>
        </div>
      </div>
    )
  }
}

export default Card;
