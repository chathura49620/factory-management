const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    designation: { type: String, required: true },
    bankName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    branch: { type: String, required: true },
    branchCode: { type: String, required: true },
    numberOfFamilyMembers: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
