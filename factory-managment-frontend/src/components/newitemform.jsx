import React, { Component } from "react";
import FormSuper from "./common/formsuper";
import Joi, { join } from "joi-browser";
import axios from "axios";
import ItemCodeTable from "./common/itemcodestable";
import SearchBox from "./common/searchBox";
import ListGroup from "./common/listgroup";

class NewItemForm extends FormSuper {
  state = {
    data: {
      iCode: "",
      iType: "",
      iCategory: "",
      iQuantity: "",
      iSupplier: "",
      iAddedDate: "",
    },
    categories: ["category1", "category2", "category3"],
    types: ["Product", "Material"],
    iCodes: [],
    genres: ["All", "Product", "Material"],
    searchQuery: "",
    errors: {},
    selectedGenre: "All",
  };

  schema = {
    iCode: Joi.string().required(),
    iType: Joi.string().required(),
    iCategory: Joi.string().required(),
    iQuantity: Joi.number().required(),
    iSupplier: Joi.string().required(),
    iAddedDate: Joi.date().required(),
  };

  componentDidMount() {
    //take the category set from db
    //take the Material codes from db
    //take the Product codes from db
    //and put them into single array name iCodes after put them into codes table after set search and fiter them and put again
  }

  handleGenreSelect = (g) => {
    this.setState({ selectedGenre: g, searchQuery: "" });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      selectedGenre: "All",
    });
  };

  doSubmit() {
    // console.log("submitted", this.state.data);
    const jsonOb = this.state.data;
    axios
      .post("http://localhost:5000/items/add", jsonOb)
      .then((result) => console.log(result.data));

    axios
      .post("http://localhost:5000/items/add/record", jsonOb)
      .then((result) => console.log(result.data));

    //this.props.history.push("/items");
    window.location = "/items";
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <h1>New Item</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("iCode", "Item Code")}
              {this.renderSelect("iType", "Item Type", this.state.types)}
              {this.renderSelect(
                "iCategory",
                "Category",
                this.state.categories
              )}
              {this.renderInput("iQuantity", "Item Quantity")}
              {this.renderInput("iSupplier", "Supplier Name")}
              {this.renderInput("iAddedDate", "Received date", "date")}
              {this.renderButton("Submit")}
            </form>
          </div>

          <div className="col">
            <div className="row">
              <div className="col">
                <ListGroup
                  genres={this.state.genres}
                  onGenreSelect={this.handleGenreSelect}
                  selectedGenre={this.state.selectedGenre}
                />
              </div>
              <div className="col">
                <SearchBox
                  onChange={this.handleSearch}
                  value={this.state.searchQuery}
                  placeHolder="Search codes..."
                />
              </div>
            </div>

            <ItemCodeTable />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewItemForm;
