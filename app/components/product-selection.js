import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service('shopping-cart'),
  isChecked: false,

  actions: {
    productChecked (product) {
      let cart = this.get('cart');

      if (this.isChecked) {
        cart.remove(product);
      } else {
        cart.add(product);
      }
    }
  }
});
