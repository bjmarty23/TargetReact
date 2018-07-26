let express = require('express');
let app = express();
let router = require('./routes/item.router');
let bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const webpack = require('webpack');
let MongoClient = require('mongodb').MongoClient;
const config = require('../config/config');
let apiItem = 'https://redsky.target.com/v2/pdp/tcin/13860428?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics';
const webpackDevMiddleware = require('webpack-dev-middleware');
const isDev = process.env.NODE_ENV !== 'production';
let port = process.env.PORT || 5000;
const Item = require('./models/items')

//---------mongodb setup
let db = mongoose.connection; 
MongoClient.connect("mongodb://localhost:27017/target", { useNewUrlParser: true }, function(err, db) {
  if(!err) {
    console.log("mongod connected");
  }
});

//---------Route includes
const itemRouter = require('./routes/item.router');

//---------Middleware
app.use(bodyParser.json());
app.use(express.static('build'));

//----------express routes
app.use('/api/product', itemRouter);
app.post('/api/product', function(req, res) {
  Item.create({
    product_id: req.body.product_id,
    value: req.body.value,
    title: req.body.title
  }).then(item =>{
    res.json(item)
  })
});

//----------start server
app.listen(port, function () {
    console.log('listening on Port:', port);
});