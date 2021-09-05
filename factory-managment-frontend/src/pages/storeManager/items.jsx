import React, { Component, useState } from "react";
import Table from "../../components/storeManager/tables/table";
import axios from "axios";
import { Link } from "react-router-dom";
import ListGroup from "../../components/storeManager/reusables/listgroup";
import SearchBox from "../../components/storeManager/reusables/searchBox";
import SelectSearch from "../../components/storeManager/reusables/selectsearch";
import DialogBox from "../../components/storeManager/reusables/dialogbox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import { paginate } from "../../components/storeManager/utils/paginate";
import Pagination from "../../components/storeManager/reusables/pagination";
import FormPopup from "./../../components/storeManager/reusables/formpopup";

class Item extends Component {
  state = {
    items: [],
    currentPage: 1,
    pageSize: 10,
    genres: ["All", "Product", "Material"], //array of genre
    categories: ["clothes", "plastic", "anything"],
    selectedGenre: "All",
    searchQuery: "",
    selectedCategory: "",
    showTaskDialog: false,
    wannaDeleteItem: {},
    categoryObjects: [],
    openPopup: false,
  };

  //get all the item details including nexted documents
  componentDidMount() {
    axios
      .get("http://localhost:5000/items/")
      .then((result) => {
        const items = result.data;

        axios.get("http://localhost:5000/category/").then((result) => {
          const categoryObjs = result.data;
          console.log(categoryObjs);
          //this.setState({categoryObjects: categoryObjs});
          this.setState({
            items: items,
            categoryObjects: categoryObjs,
          });
        });
      })
      .catch((err) => console.log(err.message));
  }

  setOpenPopup = () => {
    this.setState({ openPopup: true });
  };

  closeOpenPopup = () => {
    this.setState({ openPopup: false });
  };

  closePopAndSetState = (jsonOb) => {
    //console.log("close and set", jsonOb);
    this.setState({ user: jsonOb, openPopup: false });
  };

  handleGenreSelect = (g) => {
    this.setState({
      selectedGenre: g,
      searchQuery: "",
      currentPage: 1,
      selectedCategory: "",
    });
  };

  setConfirmDialog = (i) => {
    this.setState({ showTaskDialog: true, wannaDeleteItem: i });
  };

  deleteOrNot = (answer) => {
    if (answer === "yes") {
      this.handleDelete();
    } else {
      this.setState({ showTaskDialog: false });
    }
  };

  handleDelete = (i) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        const items = this.state.items.filter((item) => item._id !== i._id);
        //toast("deleted successfully.");
        this.setState({ items, showTaskDialog: false });

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
            console.log(result.data._id);

            const id = result.data._id;
            let q = result.data.iQuantity;
            let quantity = q - 1;

            if (quantity === 0) {
              axios
                .delete(
                  "http://localhost:5000/items/object/data/" +
                    i.iSupplier +
                    "/" +
                    i.iAddedDate
                )
                .then((result) => console.log(result.data));
            } else {
              axios
                .post(
                  "http://localhost:5000/items/update/quantity/itemRecord",
                  {
                    id,
                    quantity,
                  }
                )
                .then((result) => console.log(result));
            }

            //const wantedOb = {};
          });

        swal({
          text: "Item deleted successfully.",
          icon: "success",
          timer: "1500",
        });
      } //end of if
    });
    //const i = this.state.wannaDeleteItem;
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

  handlePage = (page) => {
    this.setState({ currentPage: page });
  };

  filteredData() {
    const { searchQuery, items, selectedGenre, selectedCategory } = this.state;

    let filtered = [];
    if (selectedCategory) {
      if (selectedCategory === "first") {
        filtered = items;
      } else {
        filtered = items.filter((i) => i.iCategory === selectedCategory);
      }
    } else if (searchQuery) {
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
    //const [showTaskDialog, setShowTaskDialog] = useState(false);
    const { pageSize } = this.state;
    // alert();
    let currentPage = this.state.currentPage;
    //if (count === 0) return <p>There are no Items in the stock</p>;

    const filtered = this.filteredData();

    //const pageItems = paginate(filtered, currentPage, pageSize);
    const pgData = paginate(filtered, currentPage, pageSize);
    const pageItems = pgData.it;

    console.log(pageItems);

    if (pgData.nw === 0) {
      ////
    } else {
      currentPage = pgData.nw;
    }

    return (
      <React.Fragment>
        <div style={{ marginLeft: "30px" }}>
          <DialogBox
            show={this.state.showTaskDialog}
            deleteOrNot={this.deleteOrNot}
          />
          <div className="row">
            <div className="col-2"></div>
            <div className="col">
              <ListGroup
                genres={this.state.genres}
                onGenreSelect={this.handleGenreSelect}
                selectedGenre={this.state.selectedGenre}
              />
            </div>
            <div className="col">
              <SelectSearch
                categories={this.state.categoryObjects}
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
              <Link
                to="/it/new/myItem"
                className="btn  my-4"
                style={{ backgroundColor: "#7121AD", color: "white" }}
              >
                New Item
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-2"></div>
            <div className="col">
              <Table
                filteredItems={pageItems}
                onItemDelete={this.handleDelete}
                onSet={this.setConfirmDialog}
                onSetPopup={this.setOpenPopup}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-2"></div>
            <div className="col">
              <Pagination
                itemsCount={filtered.length}
                pageSize={pageSize}
                onPageChange={this.handlePage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
