import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { name, validity, price, discount, popular, promo, benefits } = this.props.ticket

    const $benefits = benefits.map((b, i) => (
      <li key={i + "benefits"}>{b}</li>
    ))

    return (
      <div>
        {popular ? <div>Most Popular</div> : null}
        <h2>{name}</h2>
        <h1>{price}</h1>
        {discount ? <div>{discount}</div> : null}
        <h3>{validity}</h3>
        <ul>{$benefits}</ul>
      </div>
    )
  }
}

export default Card;
