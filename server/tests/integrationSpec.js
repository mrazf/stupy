const request = require('supertest')
const express = require('express')
const R = require('ramda')
const app = require('..')

describe('The categories endpoint', () => {
  describe('GET /categories', () => {
    it('should return a 200 with a list of categories', (done) => {
      request(app)
        .get('/api/categories')
        .end((req, res) => {
          expect(res.status).toBe(200)
          expect(res.body.categories).toEqual(jasmine.any(Array))
          done()
        })
    })
  })

  it('should return the expected grouped and filtered products', (done) => {
    request(app)
      .get('/api/categories?customerLocation=LIVERPOOL')
      .end((req, res) => {
        let sports = res.body.categories[0]
        let news = res.body.categories[1]
        expect(sports.title).toEqual('Sports')
        expect(sports.products.length).toEqual(1)
        expect(news.title).toEqual('News')
        expect(news.products.length).toEqual(2)
        done()
      })
  })
})
