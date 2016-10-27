const products = [
  {
    'category': 'Sports',
    'title': 'Arsenal TV',
    'locationRestriction': 'LONDON'
  },
  {
    'category': 'Sports',
    'title': 'Chelsea TV',
    'locationRestriction': 'LONDON'
  },
  {
    'category': 'Sports',
    'title': 'Liverpool TV',
    'locationRestriction': 'LIVERPOOL'
  },
  {
    'category': 'News',
    'title': 'Sky News',
    'locationRestriction': false
  },
  {
    'category': 'News',
    'title': 'Sky Sports News',
    'locationRestriction': false
  }
]

module.exports = function get () {
  return products
}
