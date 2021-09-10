import React, { Component } from "react";
import TableVertilcle from "../../components/storeManager/tables/tableverticle";
import SearchBox from "../../components/storeManager/reusables/searchBox";
import axios from "axios";
import { result } from "lodash";
import DialogBox from "../../components/storeManager/reusables/dialogbox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notice from "../../components/storeManager/reusables/notice";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Pagination from "../../components/storeManager/reusables/pagination";
import { paginate } from "../../components/storeManager/utils/paginate";
import FormPopup from "../../components/storeManager/reusables/formpopup";
import EditItemRecordForm from "../../components/storeManager/forms/edititemrecordform";

class ItemRecord extends Component {
  state = {
    itemRecords: [],
    searchQuery: "",
    previousSearch: "",
    showTaskDialog: false,
    wannaDeleteRecord: {},
    currentPage: 1,
    pageSize: 1,
    openPopup: false,
    itemRecord: {},
  };

  componentDidMount() {}

  setOpenPopup = (id) => {
    const { itemRecords } = this.state;
    const records = itemRecords.filter((record) => record._id === id);
    const editRecord = records[0];

    console.log(editRecord);

    this.setState({ openPopup: true, itemRecord: editRecord });
  };

  closeOpenPopup = () => {
    this.setState({ openPopup: false });
  };

  closePopAndSetState = (jsonOb) => {
    //console.log("close and set", jsonOb);

    const ItemRecords = [...this.state.itemRecords];

    const record = ItemRecords.filter((rc) => rc._id === jsonOb._id);
    const editedRecord = record[0];

    const index = ItemRecords.indexOf(editedRecord);
    ItemRecords[index] = { ...ItemRecords[index] };
    ItemRecords[index] = jsonOb;

    console.log(ItemRecords);

    this.setState({ openPopup: false, itemRecords: ItemRecords });
  };

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

  handleDelete = (record) => {
    //const record = this.state.wannaDeleteRecord;
    //console.log(record._id);

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        const itemRecords = this.state.itemRecords.filter(
          (r) => r._id !== record._id
        );

        // toast("deleted successfully.");
        this.setState({ itemRecords: itemRecords, showTaskDialog: false });
        //const { previousSearch: d } = this.state;

        axios
          .delete("http://localhost:5000/items/records/specific/" + record._id)
          .then((result) => console.log(result));

        swal({
          text: "Record Deleted Succesfully",
          icon: "success",
          timer: "1500",
        });
      }
    });
  };

  handlePage = (page) => {
    this.setState({ currentPage: page });
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
    const count = this.state.itemRecords.length;
    const { itemRecords, currentPage, pageSize } = this.state;

    // const pgData = paginate(itemRecords, currentPage, pageSize);
    // const pageItems = pgData.it;

    // console.log(pageItems);

    // if (pgData.nw === 0) {
    //   ////
    // } else {
    //   currentPage = pgData.nw;
    // }

    if (count === 0) {
      return (
        <React.Fragment>
          <div style={{ marginLeft: "50px" }}>
            <DialogBox
              show={this.state.showTaskDialog}
              deleteOrNot={this.deleteOrNot}
            />
            <div className="row">
              <div className="col-4"></div>
              <div className="col">
                <SearchBox
                  onChange={this.handleSearch}
                  value={this.state.searchQuery}
                  placeHolder="Search Records ex:2021-01-01"
                />
              </div>
              <div className="col">
                <button
                  onClick={this.onSearch}
                  className="btn  my-4"
                  style={{ backgroundColor: "#7121AD", color: "white" }}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="row m-4">
              <div className="col-2"></div>
              <div className="col">
                <Notice />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div style={{ marginLeft: "40px" }}>
          <DialogBox
            show={this.state.showTaskDialog}
            deleteOrNot={this.deleteOrNot}
          />
          <div className="row">
            <div className="col-4"></div>
            <div className="col">
              <SearchBox
                onChange={this.handleSearch}
                value={this.state.searchQuery}
                placeHolder="Search Records ex:2021-01-01"
              />
            </div>
            <div className="col">
              <Link
                onClick={this.onSearch}
                className="btn my-4"
                style={{ backgroundColor: "#7121AD", color: "white" }}
              >
                Search
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col">
              <TableVertilcle
                records={itemRecords}
                handleDelete={this.handleDelete}
                onSet={this.setConfirmDialog}
                onSetPopup={this.setOpenPopup}
              />
            </div>
          </div>

          {/* <div className="row">
            <div className="col-2"></div>
            <div className="col">
              <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={this.handlePage}
                currentPage={currentPage}
              />
            </div>
          </div> */}
        </div>

        <FormPopup
          openPopup={this.state.openPopup}
          onClose={this.closeOpenPopup}
          title="Edit Items Record"
        >
          <EditItemRecordForm
            itemRecordOb={this.state.itemRecord}
            onSetAndClose={this.closePopAndSetState}
          />
        </FormPopup>
      </React.Fragment>
    );
  }
}

export default ItemRecord;
