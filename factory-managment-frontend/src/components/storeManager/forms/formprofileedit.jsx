import React, { Component } from "react";
import FormSuper from "../reusables/formsuper";
import Joi, { join } from "joi-browser";
import axios from "axios";
import swal from "sweetalert";
import Radio from "../reusables/radio";

class FormProfileEdit extends FormSuper {
  state = {
    data: {
      _id: "",
      FullName: "",
      BirthDate: "",
      Email: "",
      Contact: "",
      Age: "",
      Gender: "",
      Address: "",
      Designation: "",
      BankName: "",
      AccountNumber: "",
      Branch: "",
      BranchCode: "",
      NumberOfFamilyMembers: "",
    },

    errors: {},
    genders: [
      { _id: "1", categoryName: "Male" },
      { _id: "2", categoryName: "Female" },
    ],
  };

  schema = {
    _id: Joi.string(),
    FullName: Joi.string().required(),
    BirthDate: Joi.date().required(),
    Email: Joi.string().required().email(),
    Contact: Joi.string().required(),
    Age: Joi.number().required(),
    Gender: Joi.string().required(),
    Address: Joi.string().required(),
    Designation: Joi.string().required(),
    BankName: Joi.string().required(),
    AccountNumber: Joi.string().required(),
    Branch: Joi.string().required(),
    BranchCode: Joi.string().required(),
    NumberOfFamilyMembers: Joi.number().required(),
  };

  componentDidMount() {
    console.log(this.props.userOb.fullName);
    const user = this.props.userOb;

    this.setState({ data: user });
  }

  doSubmit() {
    // console.log("submitted", this.state.data);
    const jsonOb = this.state.data;

    console.log("submitted", jsonOb);
    axios
      .post("http://localhost:5000/users/update/" + jsonOb._id, jsonOb)
      .then((result) => console.log(result.data));

    swal({
      text: "Profile updated successfully.",
      icon: "success",
      timer: "1500",
    });

    this.props.onSetAndClose(jsonOb);
    //axios
    //  .post("http://localhost:5000/items/add/record", jsonOb)
    // .then((result) => console.log(result.data));

    //this.props.history.push("/items");
    // window.location = "/myprofile";
  }

  handleGenderChange = ({ currentTarget }) => {
    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;

    this.setState({ data: data });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("FullName", "Full Name")}
          {this.renderInput("BirthDate", "Birth date", "date")}
          {this.renderInput("Email", "Email")}
          {this.renderInput("Contact", "Contact Number")}
          {this.renderInput("Age", "Age")}
          {this.renderSelect("Gender", "Gender", this.state.genders)}
          {this.renderInput("Address", "Address")}
          {this.renderInput("Designation", "Designation")}
          {this.renderInput("BankName", "Bank name")}
          {this.renderInput("AccountNumber", "Account Number")}
          {this.renderInput("Branch", "Branch")}
          {this.renderInput("BranchCode", "Branch Code")}
          {this.renderInput("NumberOfFamilyMembers", "Number of family")}

          {this.renderButton("Update Profile")}
        </form>
      </React.Fragment>
    );
  }
}

export default FormProfileEdit;
