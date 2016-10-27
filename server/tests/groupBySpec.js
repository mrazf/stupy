const R = require('ramda')
const groupBy = require('../groupBy')
const getProducts = require('../getProducts')

describe('The group by function', () => {
  it('should return a list of category objects', () => {
    let grouped = groupBy(getProducts())

    expect(grouped).toEqual(jasmine.any(Array))
    expect(grouped[0].title).toBeTruthy()
    expect(grouped[0].products).toBeTruthy()
  })

  it('should correctly group products', () => {
    let sports = groupBy(getProducts())[0]
    let news = groupBy(getProducts())[1]

    expect(sports.products[0].title).toEqual('Arsenal TV')
    expect(sports.products[1].title).toEqual('Chelsea TV')
    expect(sports.products[2].title).toEqual('Liverpool TV')
    expect(news.products[0].title).toEqual('Sky News')
    expect(news.products[1].title).toEqual('Sky Sports News')
  })
})
