const express = require('express')

const app = express()
var model = require('./index.js')
const port = 3000
const {getReviews, getCharacteristicReviews, postReview} = require('./dbMethods')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.post('/characteristics', (req, res) => {
})

app.get('/ratings/:productId', (req, res) => {
  //call dbMethod getReviews to query reviews collection
  console.log('req.params', req.params)
  getReviews(req.params.productId)
  .then((response) => {
    // console.log('response in server', response)
  })
  res.send(response).status(200)
})

app.get('/characteristics/:productId', (req, res) => {
  getCharacteristicReviews(req.params.productId)

})

app.post('/ratings', (req, res) => {
  postReview()

})



app.listen(3000, () => {
  console.log('listening on localhost:3000')
})