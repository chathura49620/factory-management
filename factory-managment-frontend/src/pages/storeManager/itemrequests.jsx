import React, { Component } from "react";
import ItemRequestTable from "../../components/storeManager/tables/itemrequeststable";
import axios from "axios";
import swal from "sweetalert";
import ItemRequestForm from "../../components/storeManager/forms/itemrequestform";
import FormPopup from "../../components/storeManager/reusables/formpopup";
import EditItemRequestForm from "../../components/storeManager/forms/edititemrequestform";
import userPic from "../../pages/assets/Memory storage-cuate.svg";

class ItemRequest extends Component {
  state = {
    itemRequests: [],
    searchQuery: "",
    openPopup: false,
    itemRequest: {},
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

  setOpenPopup = (id) => {
    const { itemRequests: itemRequests } = this.state;
    const itemRequest = itemRequests.filter((request) => request._id === id);
    const editItem = itemRequest[0];

    console.log(editItem);

    this.setState({ openPopup: true, itemRequest: editItem });
  };

  closeOpenPopup = () => {
    this.setState({ openPopup: false });
  };

  closePopAndSetState = (jsonOb) => {
    //console.log("close and set", jsonOb);

    const itemRequests = [...this.state.itemRequests];

    const itemRequest = itemRequests.filter((req) => req._id === jsonOb._id);
    const editedRequest = itemRequest[0];

    const index = itemRequests.indexOf(editedRequest);
    itemRequests[index] = { ...itemRequests[index] };
    itemRequests[index] = jsonOb;

    //console.log(itemRequests);

    this.setState({ openPopup: false, itemRequests: itemRequests });
  };

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
        <div style={{ marginLeft: "30px" }}>
          <div className="row">
            <div className="col-2"></div>
            <div className="col">
              <h2 className="mt-3">Item Requests</h2>
              <ItemRequestTable
                filteredItems={itemRequests}
                onItemDelete={this.handleDelete}
                onSetPopup={this.setOpenPopup}
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
            <div className="col">
              <img src={userPic} alt="" width="400" height="400" />
            </div>
          </div>

          <FormPopup
            openPopup={this.state.openPopup}
            onClose={this.closeOpenPopup}
            title="update Item Request"
          >
            <EditItemRequestForm
              requestOb={this.state.itemRequest}
              onSetAndClose={this.closePopAndSetState}
            />
          </FormPopup>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemRequest;
