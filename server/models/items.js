const mongoose = require('mongoose');

let Schema = mongoose.Schema

const itemSchema = new mongoose.Schema({

  product_id: Number,
  value: Number,
  title: String,
});
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;