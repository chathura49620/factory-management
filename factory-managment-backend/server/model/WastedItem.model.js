const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wastedItemSchema = new Schema(
  {
    wCode: { type: String, required: true },
    wType: { type: String, required: true },
    wCategory: { type: String, required: true },
    wQuantity: { type: Number, required: true },
    wSupplier: { type: String, required: true },
    wDate: { type: String, required: true },
    wReason: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const WastedItem = mongoose.model("WastedItem", wastedItemSchema);

module.exports = WastedItem;
