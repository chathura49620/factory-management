const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  returnReason: {
    type: String,
    required: true,
  },
});
const returnOrderDetails = mongoose.model("returnOrderDetails", schema);

module.exports = returnOrderDetails;
