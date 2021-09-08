import React, { Component } from "react";
import ItemRequestTable from "../../components/storeManager/tables/itemrequeststable";
import axios from "axios";
import swal from "sweetalert";
import ItemRequestForm from "../../components/storeManager/forms/itemrequestform";

class ItemRequest extends Component {
  state = {
    itemRequests: [],
    searchQuery: "",
    openPopup: false,
    itemRequest: {},
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/requests/")
      .then((result) => {
        const requests = result.data;

        this.setState({ itemRequests: requests });
      })
      .catch((err) => console.log(err.message));
  }

  handleDelete = (request) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        const itemRequests = this.state.itemRequests.filter(
          (r) => r._id !== request._id
        );
        //toast("deleted successfully.");
        this.setState({ itemRequests, showTaskDialog: false });

        axios
          .delete("http://localhost:5000/requests/" + request._id)
          .then((result) => console.log(result.data));

        swal({
          text: "Request deleted successfully.",
          icon: "success",
          timer: "1500",
        });
      } //end of if
    });
  };

  setRequest = (requests) => {
    console.log("on set reqs");
    // const requests = [requestOb, ...this.state.itemRequests];
    // this.setState({ itemRequests: requests });
    this.setState({ itemRequests: requests });
  };

  render() {
    const { itemRequests } = this.state;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <h1>Item Requests</h1>
            <ItemRequestTable
              filteredItems={itemRequests}
              onItemDelete={this.handleDelete}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <h3>
              <ItemRequestForm onSetRequest={this.setRequest} />
            </h3>
          </div>
          <div className="col-1"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemRequest;
