const R = require('ramda')

function buildCategory (products) {
  return function (category) {
    return {
      'title': category,
      'products': R.filter(R.propEq('category', category), products)
    }
  }
}

module.exports = function buildCategories (products) {
  let buildCategoryFor = buildCategory(products)
  let uniqueCategories = R.uniq(R.map(R.prop('category'), products))

  return R.map(buildCategoryFor, uniqueCategories)
}
