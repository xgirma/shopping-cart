jest.dontMock('./../../../src/components/CartItem');
import ReactTestUtils from 'react-dom/test-utils';
import React from 'react';

import CartItem from './../../../src/components/CartItem';

describe('the cart item module', () => {
  describe('the name display of the item', () => {
    it('should display the name of the item', () => {

      const item = {
          id: 3,
          name: "Instant Noodles",
          description: "not bad.",
          price: 20
      };

      const locale = { country: "BE" };

      const cartItem = ReactTestUtils.renderIntoDocument(
        <CartItem item={item}  locale={locale}/>
      );

      let label = ReactTestUtils.findRenderedDOMComponentWithTag(cartItem, 'h4');
      expect(label.textContent).toEqual(item.name);
    });
  });
});