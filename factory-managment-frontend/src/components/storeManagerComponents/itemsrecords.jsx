import React, { Component } from "react";
import TableVertilcle from "./common/tableverticle";
import SearchBox from "./common/searchBox";
import axios from "axios";
import { result } from "lodash";
import DialogBox from "./common/dialogbox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ItemRecord extends Component {
  state = {
    itemRecords: [],
    searchQuery: "",
    previousSearch: "",
    showTaskDialog: false,
    wannaDeleteRecord: {},
  };

  componentDidMount() {}

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  setConfirmDialog = (i) => {
    this.setState({ showTaskDialog: true, wannaDeleteRecord: i });
  };

  deleteOrNot = (answer) => {
    if (answer === "yes") {
      this.handleDelete();
    } else {
      this.setState({ showTaskDialog: false });
    }
  };

  handleDelete = () => {
    const record = this.state.wannaDeleteRecord;
    console.log(record._id);

    const itemRecords = this.state.itemRecords.filter(
      (r) => r._id !== record._id
    );

    toast("deleted successfully.");
    this.setState({ itemRecords: itemRecords, showTaskDialog: false });
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
        <ToastContainer />
        <DialogBox
          show={this.state.showTaskDialog}
          deleteOrNot={this.deleteOrNot}
        />
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
            <button
              onClick={this.onSearch}
              className="btn  my-2"
              style={{ backgroundColor: "#2461A7", color: "white" }}
            >
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
              onSet={this.setConfirmDialog}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemRecord;
