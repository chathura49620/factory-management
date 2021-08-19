const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const materialCodeSchema = new Schema({
  materialName: { type: String, required: true },
  materialCode: { type: String, required: true },
  status: { type: String, required: true },
});

const MaterialCode = mongoose.model("MaterialCode", materialCodeSchema);

module.exports = MaterialCode;
