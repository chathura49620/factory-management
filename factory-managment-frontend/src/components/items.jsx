import React, { Component } from "react";
import Table from "./common/table";
import axios from "axios";
import { Link } from "react-router-dom";
import ListGroup from "./common/listgroup";
import SearchBox from "./common/searchBox";
import SelectSearch from "./common/selectsearch";

class Item extends Component {
  state = {
    items: [],
    currentPage: 1,
    pageSize: 4,
    genres: ["All", "Product", "Material"], //array of genre
    categories: ["clothes", "plastic", "anything"],
    selectedGenre: "All",
    searchQuery: "",
    selectedCategory: "",
  };

  //get all the item details including nexted documents
  componentDidMount() {
    axios
      .get("http://localhost:5000/items/")
      .then((result) => {
        const items = result.data;

        this.setState({ items: items });
      })
      .catch((err) => console.log(err.message));
  }

  handleGenreSelect = (g) => {
    this.setState({ selectedGenre: g, searchQuery: "", currentPage: 1 });
  };

  handleDelete = async (i) => {
    const items = this.state.items.filter((item) => item._id !== i._id);
    this.setState({ items });
    axios
      .delete("http://localhost:5000/items/" + i._id)
      .then((result) => console.log(result.data));

    axios
      .get(
        "http://localhost:5000/items/object/data/" +
          i.iSupplier +
          "/" +
          i.iAddedDate
      )
      .then((result) => {
        const id = result.data._id;
        let q = result.data.iQuantity;
        let quantity = q - 1;

        //console.log(result.data._id);

        axios
          .post("http://localhost:5000/items/update/quantity/itemRecord", {
            id,
            quantity,
          })
          .then((result) => console.log(result));

        //const wantedOb = {};
      });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      selectedCategory: "",
      selectedGenre: "All",
      currentPage: 1,
    });
  };
  handleSelectChange = (category) => {
    this.setState({
      selectedCategory: category,
      selectedGenre: "All",
      searchQuery: "",
      currentPage: 1,
    });
  };

  filteredData() {
    const { searchQuery, items, selectedGenre } = this.state;

    let filtered = [];
    if (searchQuery) {
      filtered = items.filter((i) =>
        i.iAddedDate.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre === "All") {
      filtered = items;
    } else if (selectedGenre) {
      filtered = items.filter((i) => i.iType === selectedGenre);
    }

    return filtered;
  }

  render() {
    const { length: count } = this.state.items;

    //if (count === 0) return <p>There are no Items in the stock</p>;

    const filtered = this.filteredData();
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <ListGroup
              genres={this.state.genres}
              onGenreSelect={this.handleGenreSelect}
              selectedGenre={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <SelectSearch
              categories={this.state.categories}
              onChange={this.handleSelectChange}
              categoryValue={this.state.selectedCategory}
            />
          </div>

          <div className="col">
            <SearchBox
              onChange={this.handleSearch}
              value={this.state.searchQuery}
              placeHolder="Search date and time"
            />
          </div>
          <div className="col">
            <Link to="/items/new" className="btn btn-primary mt-2">
              New Item
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <Table filteredItems={filtered} onItemDelete={this.handleDelete} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
