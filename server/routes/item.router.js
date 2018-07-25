const express = require('express');
const router = express.Router();
const Item = require('../models/items').default;

//GET ROUTE

router.get('/', function(req,res) {
  res.json({messege: 'MONGO CONNECTION'})
});

router.get('/api/product', function(req, res) {
  console.log('getting products from db');
  Item.find({}).then(eachOne => {

    res.json(eachOne);
  })
})
// END GET Route

//post ROUTE

router.post('/api/product', function(req, res) {
  Item.create({
    product_id: req.body.product_id,
    value: req.body.value
  }).then(item =>{
    res.json(item)
  }).catch("errpr")
});

//UPDATE ROUTE
router.put('/api/product/:product_id', (req,res) => {

Item.findOneAndUpdate({
  product_id: req.body.product_id,
  value: req.body.value
  }).then(item =>{
    res.json(item)
  });
});

module.exports = router;