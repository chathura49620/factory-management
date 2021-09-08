const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemRequestSchema = new Schema(
  {
    reqCode: { type: String, required: true },
    reqType: { type: String, required: true },
    reqCategory: { type: String, required: true },
    reqQuantity: { type: Number, required: true },
    reqDate: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ItemRequest = mongoose.model("ItemRequest", itemRequestSchema);

module.exports = ItemRequest;
