import React from 'react';
import { toLocaleCurrencyString } from '../lib/conversion-helper';

class CartItem extends React.Component {
  getLocalizedCurrencySymbol = (price, country) => {
    return toLocaleCurrencyString(price, country);
  };
  
  render() {
    const {name, price, description} = this.props.item;
    const {country} = this.props.locale;
    const {onRemove} = this.props;

    return (
      <section>
        <h4>{name}</h4>
        <p>
          Your price: {" "}
          <span>{this.getLocalizedCurrencySymbol(price, country)}</span>
        </p>
        <p>{description}</p>
        <button onClick={() => onRemove(this.props.item)}>
          Remove this item from the cart
        </button>
      </section>
    )
  }
}

export default CartItem;