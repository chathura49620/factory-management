import React, { Component } from "react";
import TableVertilcle from "./common/tableverticle";
import SearchBox from "./common/searchBox";
import axios from "axios";
import { result } from "lodash";

class ItemRecord extends Component {
  state = {
    itemRecords: [],
    searchQuery: "",
    previousSearch: "",
  };

  componentDidMount() {}

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  handleDelete = (record) => {
    console.log(record._id);

    const itemRecords = this.state.itemRecords.filter(
      (r) => r._id !== record._id
    );
    this.setState({ itemRecords: itemRecords });
    //const { previousSearch: d } = this.state;

    axios
      .delete("http://localhost:5000/items/records/specific/" + record._id)
      .then((result) => console.log(result));

    axios
      .delete(
        "http://localhost:5000/items/specific/" +
          record.iSupplier +
          "/" +
          record.iAddedDate
      )
      .then((result) => console.log(result));
  };

  onSearch = () => {
    const { searchQuery: d } = this.state;
    console.log("onsearch");

    axios
      .get("http://localhost:5000/items/multiplerecords/" + d)
      .then((result) => {
        //console.log(result.data);
        const records = result.data;

        const currentQuery = this.state.searchQuery;
        this.setState({
          itemRecords: records,
          previousSearch: currentQuery,
          searchQuery: "",
        });
      });
  };

  render() {
    //const valueArr = JSON.parse(this.state.itemRecords);
    //console.log(this.state.itemRecords);
    //console.log(this.state.itemQuantity);
    //const { itemQuantity } = this.state;

    return (
      <React.Fragment>
        <div className="row my-3">
          <div className="col-4"></div>
          <div className="col">
            <SearchBox
              onChange={this.handleSearch}
              value={this.state.searchQuery}
              placeHolder="Search Records"
            />
          </div>
          <div className="col">
            <button onClick={this.onSearch} className="btn btn-primary my-2">
              Search
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <TableVertilcle
              records={this.state.itemRecords}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemRecord;
