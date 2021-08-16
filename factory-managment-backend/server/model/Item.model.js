const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    iCode: { type: String, required: true },
    iType: { type: String, required: true },
    iCategory: { type: String, required: true },
    iQuantity: { type: Number, required: true },
    iSupplier: { type: String, required: true },
    iAddedDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
