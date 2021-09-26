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
import ReturnedProductsTable from "../../components/storeManager/tables/returnedproductstable";
import EditReturnedProductForm from "./../../components/storeManager/forms/editreturnedproductform";

class ReturnedProduct extends Component {
  state = {
    returnedProducts: [],
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
    returnedProduct: {},
  };

  //get all the item details including nexted documents
  componentDidMount() {
    //getting data from db at first time
    axios
      .get("http://localhost:5000/returned/")
      .then((result) => {
        const returnedProducts = result.data;
        this.setState({ returnedProducts: returnedProducts });

        axios.get("http://localhost:5000/category/").then((result) => {
          const categoryObjs = result.data;
          console.log(categoryObjs);
          //this.setState({categoryObjects: categoryObjs});
          this.setState({
            categoryObjects: categoryObjs,
          });
        });
      })
      .catch((err) => console.log(err.message));
  }

  setOpenPopup = (id) => {
    const { returnedProducts: returnedProducts } = this.state;
    const returnedProduct = returnedProducts.filter((item) => item._id === id);
    const editItem = returnedProduct[0];

    console.log(editItem);

    this.setState({ openPopup: true, returnedProduct: editItem });
  };

  closeOpenPopup = () => {
    this.setState({ openPopup: false });
  };

  closePopAndSetState = (jsonOb) => {
    //console.log("close and set", jsonOb);

    const returnedProducts = [...this.state.returnedProducts];

    const returnedProduct = returnedProducts.filter(
      (it) => it._id === jsonOb._id
    );
    const editedItem = returnedProduct[0];

    const index = returnedProducts.indexOf(editedItem);
    returnedProducts[index] = { ...returnedProducts[index] };
    returnedProducts[index] = jsonOb;

    console.log(returnedProducts);

    this.setState({ openPopup: false, returnedProducts: returnedProducts });
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

  handleDelete = (r) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        const returnedProducts = this.state.returnedProducts.filter(
          (rItem) => rItem._id !== r._id
        );
        //toast("deleted successfully.");
        this.setState({ returnedProducts, showTaskDialog: false });

        axios
          .delete("http://localhost:5000/returned/" + r._id)
          .then((result) => console.log(result.data));

        swal({
          text: "Item deleted successfully.",
          icon: "success",
          timer: "1500",
        });
      } //end of if
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

  handlePage = (page) => {
    this.setState({ currentPage: page });
  };

  filteredData() {
    const {
      searchQuery,
      returnedProducts: returnedProducts,
      selectedGenre,
      selectedCategory,
    } = this.state;

    let filtered = [];
    if (selectedCategory) {
      if (selectedCategory === "first") {
        filtered = returnedProducts;
      } else {
        filtered = returnedProducts.filter(
          (r) => r.rCategory === selectedCategory
        );
      }
    } else if (searchQuery) {
      filtered = returnedProducts.filter((r) =>
        r.rDate.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre === "All") {
      filtered = returnedProducts;
    } else if (selectedGenre) {
      filtered = returnedProducts.filter((r) => r.rType === selectedGenre);
    }

    return filtered;
  }

  render() {
    //const [showTaskDialog, setShowTaskDialog] = useState(false);
    const { pageSize } = this.state;
    // alert();
    let currentPage = this.state.currentPage;
    //if (count === 0) return <p>There are no returnedProducts in the stock</p>;

    const filtered = this.filteredData();

    //const pagereturnedProducts = paginate(filtered, currentPage, pageSize);
    const pgData = paginate(filtered, currentPage, pageSize);
    const pageReturnedProducts = pgData.it;

    console.log(pageReturnedProducts);

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
            <div className="col"></div>
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
                to="/it/new/product/returned"
                className="btn mt-3 mb-1"
                style={{ backgroundColor: "#7121AD", color: "white" }}
              >
                New Item
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-2"></div>
            <div className="col">
              <h2>Returned products</h2>
              <ReturnedProductsTable
                filteredItems={pageReturnedProducts}
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

        <FormPopup
          openPopup={this.state.openPopup}
          onClose={this.closeOpenPopup}
          title="Update Returned Product"
        >
          <EditReturnedProductForm
            onSetAndClose={this.closePopAndSetState}
            returnedOb={this.state.returnedProduct}
          />
        </FormPopup>
      </React.Fragment>
    );
  }
}

export default ReturnedProduct;
