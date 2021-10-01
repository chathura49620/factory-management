const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DeleteFeedbackSchema = new Schema({
  name: { type: String, required: true },
  reason: { type: String, required: true },
});

const DeleteFeedback = mongoose.model("DeleteFeedback", DeleteFeedbackSchema);

module.exports = DeleteFeedback;
