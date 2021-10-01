const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },

  buyerName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  productCategory: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  paymentMethode: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },
});
const orderDetails = mongoose.model("orderDetails", schema);

module.exports = orderDetails;
