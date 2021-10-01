const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    dob: { type: String},
    email: { type: String, required: true },
    status: { type: String, required: true },
    userRole: { type: String, required: true },
    password: { type: String, required: true },
    contact: { type: String},
    age: { type: Number },
    gender: { type: String },
    address: { type: String },
    designation: { type: String },
    bankName: { type: String },
    accountNumber: { type: String},
    branch: { type: String },
    branchCode: { type: String },
    numberOfFamilyMembers: { type: Number},
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
