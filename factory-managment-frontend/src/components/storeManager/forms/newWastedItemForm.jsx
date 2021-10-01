import React, { Component } from "react";
import FormSuper from "../reusables/formsuper";
import Joi, { join } from "joi-browser";
import axios from "axios";
import swal from "sweetalert";
import TextArea from "../reusables/textarea";
import moment from "moment";

class NewWastedItemForm extends FormSuper {
  state = {
    data: {
      _id: "",
      Code: "",
      Type: "",
      Category: "",
      Quantity: "",
      Supplier: "",
      WastedDate: "",
      Reason: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    Code: Joi.string(),
    Type: Joi.string(),
    Category: Joi.string(),
    Quantity: Joi.number(),
    Supplier: Joi.string(),
    WastedDate: Joi.date(),
    Reason: Joi.string().required(),
  };

  componentDidMount() {
    const wastedDate = moment(new Date()).format("YYYY-MM-DD");

    const wOb = {
      _id: this.props.wastedOb._id,
      Code: this.props.wastedOb.iCode,
      Type: this.props.wastedOb.iType,
      Category: this.props.wastedOb.iCategory,
      Quantity: this.props.wastedOb.iQuantity,
      Supplier: this.props.wastedOb.iSupplier,
      WastedDate: wastedDate,
      Reason: "",
    };

    this.setState({ data: wOb });
    console.log(wOb);
  }

  doSubmit() {
    // console.log("submitted", this.state.data);
    const jsonOb = this.state.data;
    console.log(jsonOb);

    axios
      .post("http://localhost:5000/wasted/add", jsonOb)
      .then((result) => console.log(result.data));
    // axios
    //   .post("http://localhost:5000/items/add", jsonOb)
    //   .then((result) => console.log(result.data));

    swal({
      text: "Wasted Item added successfully.",
      icon: "success",
      timer: "1500",
    });

    this.props.onClose(jsonOb);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.renderTextArea("Reason", "Reason For Drop")}

          {this.renderButton("Add Item")}
        </form>
      </React.Fragment>
    );
  }
}

export default NewWastedItemForm;
