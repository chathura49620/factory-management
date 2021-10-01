const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },

  productCategory: {
    type: String,
    required: true,
  },

  instock: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const productStockDetails = mongoose.model("productStockDetails", schema);

module.exports = productStockDetails;
