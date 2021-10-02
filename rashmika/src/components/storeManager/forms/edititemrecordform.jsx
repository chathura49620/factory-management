import React, { Component } from "react";
import FormSuper from "../reusables/formsuper";
import Joi, { join } from "joi-browser";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";

class EditItemRecordForm extends FormSuper {
  state = {
    data: {
      _id: "",
      Code: "",
      Type: "",
      Category: "",
      Quantity: "",
      Supplier: "",
      AddedDate: "",
    },
    categories: ["category1", "category2", "category3"],
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
    Supplier: Joi.string().required(),
    AddedDate: Joi.date().required(),
  };

  componentDidMount() {
    const ob = {
      _id: this.props.itemRecordOb._id,
      Code: this.props.itemRecordOb.iCode,
      Type: this.props.itemRecordOb.iType,
      Category: this.props.itemRecordOb.iCategory,
      Quantity: this.props.itemRecordOb.iQuantity,
      Supplier: this.props.itemRecordOb.iSupplier,
      AddedDate: this.props.itemRecordOb.iAddedDate,
    };

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
          data: ob,
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

    const jsonOb = {
      _id: data._id,
      iCode: data.Code,
      iType: data.Type,
      iCategory: data.Category,
      iQuantity: data.Quantity,
      iSupplier: data.Supplier,
      iAddedDate: data.AddedDate,
    };

    //update in database
    axios
      .post(
        "http://localhost:5000/items/update/unique/record/" + data._id,
        jsonOb
      )
      .then((result) => console.log("updated"));

    swal({
      text: "Item updated successfully.",
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
              {this.renderInput("Supplier", "Supplier Name")}
              {this.renderInput("AddedDate", "Received date", "date")}
              {this.renderButton("Update Item")}
              <Link
                to="/it/new/myItem"
                className="btn  my-4"
                style={{ backgroundColor: "#7121AD", color: "white" }}
              >
                Add as Wasted
              </Link>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditItemRecordForm;
