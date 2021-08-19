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
      Code: "",
      Type: "",
      Category: "",
      Quantity: "",
      Supplier: "",
      AddedDate: "",
    },
    categories: ["category1", "category2", "category3"],
    types: [{ categoryName: "Product" }, { categoryName: "Material" }],
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
    Supplier: Joi.string().required(),
    AddedDate: Joi.date().required(),
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
      .post("http://localhost:5000/items/add/record", jsonOb)
      .then((result) => console.log(result.data));
    axios
      .post("http://localhost:5000/items/add", jsonOb)
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

            <ItemCodeTable materialCodeObs={this.state.materialCodeObjects} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewItemForm;
