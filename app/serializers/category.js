import DS from 'ember-data';

function titleToId (title) {
  return title.toLowerCase().replace(new RegExp(' ', 'g'), '-');
}

function buildNormalisedProducts(rawItems) {
  return rawItems.map((raw) => {
    return {
      type: 'products',
      id: titleToId(raw.title),
      attributes: raw
    };
  });
}

function buildNormalisedCategory(raw) {
  return {
    type: 'category',
    id: raw.title,
    attributes: raw,
    relationships: {
      products: {
        data: raw.products.map((product) => {
          return { type: 'products', id: titleToId(product.title) };
        })
      }
    }
  };
}

export default DS.JSONAPISerializer.extend({
  normalizeQueryResponse (store, primaryModelClass, payload, id, requestType) {
    let categories = payload.categories.map((category) => { return buildNormalisedCategory(category); });

    let rawProducts = payload.categories.map((category) => { return category.products; });
    let rawFlatProducts = rawProducts.reduce((a, b) => { return a.concat(b); }, []);
    let products = buildNormalisedProducts(rawFlatProducts);

    let modPayload = { data: categories, included: products };

    return this._super(store, primaryModelClass, modPayload, id, requestType);
  }
});
