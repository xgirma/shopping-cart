import React from 'react';
import CartItem from './CartItem';

class CartItemList extends React.Component {
  render() {
    const {items, locale, onRemove, onReset} = this.props;

    return (
      <div>
        <div id="item-lst">
          {items.map((item) => {
            return <CartItem
              key={item.id}
              onRemove={() => onRemove(item)}
              locale={locale}
              item={item}/>
          })}
        </div>

        <div id="reset-btn">
          <button onClick={() => onReset()}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default CartItemList;