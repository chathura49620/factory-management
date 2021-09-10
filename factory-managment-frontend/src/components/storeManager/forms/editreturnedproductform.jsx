import React, { Component } from "react";
import FormSuper from "../reusables/formsuper";
import Joi, { join } from "joi-browser";
import axios from "axios";
import ItemCodeTable from "../tables/itemcodestable";
import SearchBox from "../reusables/searchBox";
import ListGroup from "../reusables/listgroup";
import swal from "sweetalert";

class EditReturnedProductForm extends FormSuper {
  state = {
    data: {
      _id: "",
      Code: "",
      Type: "Product",
      Category: "",
      Quantity: "",
      Buyer: "",
      ReturnedDate: "",
      Reason: "",
    },
    iCodes: [],
    searchQuery: "",
    errors: {},
    selectedGenre: "All",
    materialCodeObjects: [],
    categoryObjects: [],
  };

  schema = {
    _id: Joi.string(),
    Code: Joi.string().required(),
    Type: Joi.string(),
    Category: Joi.string().required(),
    Quantity: Joi.number().required(),
    Buyer: Joi.string().required(),
    ReturnedDate: Joi.date().required(),
    Reason: Joi.string().required(),
  };

  componentDidMount() {
    const ob = {
      _id: this.props.returnedOb._id,
      Code: this.props.returnedOb.rCode,
      Type: this.props.returnedOb.rType,
      Category: this.props.returnedOb.rCategory,
      Quantity: this.props.returnedOb.rQuantity,
      Buyer: this.props.returnedOb.rBuyer,
      ReturnedDate: this.props.returnedOb.rDate,
      Reason: this.props.returnedOb.rReason,
    };

    this.setState({ data: ob });
    //take the category set from db
    //take the Material codes from db
    axios.get("http://localhost:5000/codes/material/").then((result) => {
      const materialCodesObjs = result.data;
      console.log(materialCodesObjs);
      axios.get("http://localhost:5000/category/").then((result) => {
        const categoryObjs = result.data;

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
    // console.log("submitted", this.state.data);

    const { data } = this.state;

    const jsonOb = {
      _id: data._id,
      rCode: data.Code,
      rType: data.Type,
      rCategory: data.Category,
      rQuantity: data.Quantity,
      rBuyer: data.Buyer,
      rDate: data.ReturnedDate,
      rReason: data.Reason,
    };

    console.log(jsonOb);
    axios
      .post("http://localhost:5000/returned/update/" + data._id, jsonOb)
      .then((result) => console.log(result.data));

    swal({
      text: "Returned Item added successfully.",
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
              {this.renderInput("Type", "Item Type")}
              {this.renderSelect(
                "Category",
                "Category",
                this.state.categoryObjects
              )}
              {this.renderInput("Quantity", "Item Quantity")}
              {this.renderInput("Buyer", "Buyer Name")}
              {this.renderInput("ReturnedDate", "Returned date", "date")}
              {this.renderInput("Reason", "Reason for return")}
              {this.renderButton("Add Item")}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditReturnedProductForm;
