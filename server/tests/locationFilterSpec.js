const locationFilter = require('../locationFilter')
const getProducts = require('../getProducts')

describe('The location filter', () => {
  let products
  beforeEach(() => {
    products = getProducts()
  })

  it('should return all products if no location is provided', () => {
    let filter = locationFilter()
    let filteredProducts = filter(products)

    expect(filteredProducts.length).toBe(5)
  })

  it('should return products available in the given location', () => {
    let filter = locationFilter('LIVERPOOL')
    let filteredProducts = filter(products)

    expect(filteredProducts.length).toEqual(3)
    expect(filteredProducts[0]['locationRestriction']).toBe('LIVERPOOL')
    expect(filteredProducts[1]['locationRestriction']).toBe(false)
    expect(filteredProducts[2]['locationRestriction']).toBe(false)
  })
})
