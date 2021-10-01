const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemRecordSchema = new Schema(
  {
    iCode: { type: String, required: true },
    iType: { type: String, required: true },
    iCategory: { type: String, required: true },
    iQuantity: { type: Number, required: true },
    iSupplier: { type: String, required: true },
    iAddedDate: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ItemRecord = mongoose.model("ItemRecord", itemRecordSchema);

module.exports = ItemRecord;
