import React, { Component } from "react";
import FormSuper from "../../components/common/formsuper";
import Joi, { join } from "joi-browser";
import axios from "axios";
import ItemCodeTable from "../../components/common/itemcodestable";
import SearchBox from "../../components/common/searchBox";
import ListGroup from "../../components/common/listgroup";

class BasicInfo  extends FormSuper {
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
            <h1>Basic Info</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("companyName", "company Name")}
              {this.renderInput("companyAddress", "company Address")}
              {this.renderInput("ownerName", "owner Name")}
              {this.renderInput("companyLogo", "company Logo", "file")}
              {this.renderInput("mainProduct", "Main Product")}
              {this.renderInput("BR", "BR", "file")}
              {this.renderInput("startDate", "start Date", "date")}
              {this.renderButton("Submit")}
            </form>
          </div>

          

            
        </div>
      </React.Fragment>
    );
  }
};

export default BasicInfo;
