import React, { Component } from "react";
import FormSuper from "../reusables/formsuper";
import Joi, { join } from "joi-browser";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";

class ItemRequestForm extends FormSuper {
  state = {
    data: {
      Code: "",
      Type: "",
      Category: "",
      Quantity: "",
      RequestDate: "",
      Status: "pending",
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
    Code: Joi.string().required(),
    Type: Joi.string().required(),
    Category: Joi.string().required(),
    Quantity: Joi.number().required(),
    RequestDate: Joi.date().required(),
    Status: Joi.string(),
  };

  componentDidMount() {
    //take the category set from db
    //take the Material codes from db

    axios.get("http://localhost:5000/codes/material/").then((result) => {
      const materialCodesObjs = result.data;
      console.log(materialCodesObjs);
      axios.get("http://localhost:5000/category/").then((result) => {
        const categoryObjs = result.data;
        console.log(categoryObjs);
        //this.setState({categoryObjects: categoryObjs});
        this.setState({
          materialCodeObjects: materialCodesObjs,
          categoryObjects: categoryObjs,
        });
      });
    });

    //take the Product codes from db
    //and put them into single array name iCodes after put them into codes table after set search and fiter them and put again
  }

  doSubmit() {
    const { data } = this.state;
    console.log(data);

    // const jsonOb = {
    //   reqCode: data.Code,
    //   reqType: data.Type,
    //   reqCategory: data.Category,
    //   reqQuantity: data.Quantity,
    //   reqDate: data.RequestDate,
    // };

    //add in database
    axios.post("http://localhost:5000/requests/add/", data).then((result) => {
      axios.get("http://localhost:5000/requests/").then((result) => {
        const requests = result.data;

        this.props.onSetRequest(requests);
      });
    });

    swal({
      text: "Request added successfully.",
      icon: "success",
      timer: "1500",
    });
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
              {this.renderButton("add request")}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemRequestForm;
