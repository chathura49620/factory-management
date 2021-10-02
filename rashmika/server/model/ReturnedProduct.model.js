const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const returnedProductSchema = new Schema(
  {
    rCode: { type: String, required: true },
    rType: { type: String, required: true },
    rCategory: { type: String, required: true },
    rQuantity: { type: Number, required: true },
    rBuyer: { type: String, required: true },
    rDate: { type: String, required: true },
    rReason: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ReturnedProduct = mongoose.model(
  "ReturnedProduct",
  returnedProductSchema
);

module.exports = ReturnedProduct;
