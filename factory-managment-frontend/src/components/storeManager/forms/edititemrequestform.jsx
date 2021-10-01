import React, { Component } from "react";
import FormSuper from "../reusables/formsuper";
import Joi, { join } from "joi-browser";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";

class EditItemRequestForm extends FormSuper {
  state = {
    data: {
      _id: "",
      Code: "",
      Type: "",
      Category: "",
      Quantity: "",
      RequestDate: "",
      Status: "",
    },

    types: [
      { _id: "123", categoryName: "Product" },
      { _id: "143", categoryName: "Material" },
    ],
    iCodes: [],
    genres: ["All", "Product", "Material"],
    searchQuery: "",
    errors: {},
    selectedGenre: "All",
    materialCodeObjects: [],
    categoryObjects: [],
  };

  schema = {
    _id: Joi.string(),
    Code: Joi.string().required(),
    Type: Joi.string().required(),
    Category: Joi.string().required(),
    Quantity: Joi.number().required(),
    RequestDate: Joi.date().required(),
    Status: Joi.string(),
  };

  componentDidMount() {
    const ob = {
      _id: this.props.requestOb._id,
      Code: this.props.requestOb.reqCode,
      Type: this.props.requestOb.reqType,
      Category: this.props.requestOb.reqCategory,
      Quantity: this.props.requestOb.reqQuantity,
      RequestDate: this.props.requestOb.reqDate,
      Status: this.props.requestOb.reqStatus,
    };

    this.setState({ data: ob });
    //take the category set from db
    //take the Material codes from db
    axios.get("http://localhost:5000/category/").then((result) => {
      const categoryObjs = result.data;
      console.log(categoryObjs);
      //this.setState({categoryObjects: categoryObjs});
      this.setState({
        categoryObjects: categoryObjs,
      });
    });

    //take the Product codes from db
    //and put them into single array name iCodes after put them into codes table after set search and fiter them and put again
  }

  doSubmit() {
    const { data } = this.state;
    console.log(data);

    const jsonOb = {
      _id: data._id,
      reqCode: data.Code,
      reqType: data.Type,
      reqCategory: data.Category,
      reqQuantity: data.Quantity,
      reqDate: data.RequestDate,
      reqStatus: data.Status,
    };

    //add in database
    axios
      .post("http://localhost:5000/requests/update/" + data._id, jsonOb)
      .then((result) => console.log(result.data));

    swal({
      text: "Request added successfully.",
      icon: "success",
      timer: "1500",
    });

    this.props.onSetAndClose(jsonOb);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("Code", "Item Code")}
              {this.renderSelect("Type", "Item Type", this.state.types)}
              {this.renderSelect(
                "Category",
                "Category",
                this.state.categoryObjects
              )}
              {this.renderInput("Quantity", "Item Quantity")}
              {this.renderInput("RequestDate", "Request date", "date")}
              {this.renderButton("update request")}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditItemRequestForm;
