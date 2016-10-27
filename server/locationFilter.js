const R = require('ramda')

module.exports = function locationFilter (locationId) {
  let noRestrictionsOrSpecified = R.anyPass([R.propEq('locationRestriction', false), R.propEq('locationRestriction', locationId)])
  let predicate = locationId ? noRestrictionsOrSpecified : R.T

  return function filter (products) {
    return R.filter(predicate, products)
  }
}
