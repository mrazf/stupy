import Ember from 'ember';

function getCustomer () {
  return 12;
}

export default Ember.Route.extend({
  beforeModel () {
    return this.get('store').findRecord('customer', getCustomer());
  },

  model () {
    let query = {
      'customerLocation': this.get('store').peekRecord('customer', getCustomer()).get('locationId')
    };

    return this.get('store').query('category', query);
  }
});
