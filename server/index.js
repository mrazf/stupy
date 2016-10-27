const R = require('ramda')
const getProducts = require('./getProducts')
const locationFilter = require('./locationFilter')
const groupBy = require('./groupBy')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/api/customers/:customerId', (req, res) => {
  res.json({ 'customer': { locationId: 'LONDON', id: req.params.customerId } })
})

app.get('/api/categories', (req, res) => {
  let categories = R.pipe(getProducts, locationFilter(req.query.customerLocation), groupBy)()

  res.json({ 'categories': categories })
})

module.exports = app;
