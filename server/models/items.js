const mongoose = require('mongoose');

let Schema = mongoose.Schema

const itemSchema = new Schema({

  product_id: Number,
  value: Number,
   
});
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;