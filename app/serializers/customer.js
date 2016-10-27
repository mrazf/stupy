import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeFindRecordResponse (store, primaryModelClass, payload, id, requestType) {
    let modPayload = {
      data: {
        type: 'customer',
        id: payload.customer.id,
        attributes: {
          'location-id': payload.customer.locationId
        }
      }
    };

    return this._super(store, primaryModelClass, modPayload, id, requestType);
  }
});
