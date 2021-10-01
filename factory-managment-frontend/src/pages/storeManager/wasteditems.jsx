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
import WastedItemTable from "./../../components/storeManager/tables/wasteditemtable";
import FormPopup from "./../../components/storeManager/reusables/formpopup";
import EditWastedItemForm from "./../../components/storeManager/forms/editWastedItemForm";
import userPic from "../../pages/assets/Remote meeting-cuate.svg";
import userPic2 from "../../pages/assets/Messenger-cuate.svg";
import userPic3 from "../../pages/assets/Online learning-cuate (1).svg";
import userPic4 from "../../pages/assets/Investing-cuate.svg";

class WastedItem extends Component {
  state = {
    wastedItems: [],
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
    wastedItem: {},
  };

  //get all the item details including nexted documents
  componentDidMount() {
    //getting data from db at first time
    axios
      .get("http://localhost:5000/wasted/")
      .then((result) => {
        const wastedItems = result.data;

        this.setState({ wastedItems: wastedItems });

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
    const { wastedItems } = this.state;
    const wastedItem = wastedItems.filter((item) => item._id === id);
    const editItem = wastedItem[0];

    console.log(editItem);

    this.setState({ openPopup: true, wastedItem: editItem });
  };

  closeOpenPopup = () => {
    this.setState({ openPopup: false });
  };

  closePopAndSetState = (jsonOb) => {
    //console.log("close and set", jsonOb);

    const wastedItems = [...this.state.wastedItems];

    const wastedItem = wastedItems.filter((it) => it._id === jsonOb._id);
    const editedItem = wastedItem[0];

    const index = wastedItems.indexOf(editedItem);
    wastedItems[index] = { ...wastedItems[index] };
    wastedItems[index] = jsonOb;

    console.log(wastedItems);

    this.setState({ openPopup: false, wastedItems: wastedItems });
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

  handleDelete = (w) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        const wastedItems = this.state.wastedItems.filter(
          (wItem) => wItem._id !== w._id
        );
        //toast("deleted successfully.");
        this.setState({ wastedItems, showTaskDialog: false });

        axios
          .delete("http://localhost:5000/wasted/" + w._id)
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
    const { searchQuery, wastedItems, selectedGenre, selectedCategory } =
      this.state;

    let filtered = [];
    if (selectedCategory) {
      if (selectedCategory === "first") {
        filtered = wastedItems;
      } else {
        filtered = wastedItems.filter((w) => w.wCategory === selectedCategory);
      }
    } else if (searchQuery) {
      filtered = wastedItems.filter((w) =>
        w.wDate.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre === "All") {
      filtered = wastedItems;
    } else if (selectedGenre) {
      filtered = wastedItems.filter((w) => w.wType === selectedGenre);
    }

    return filtered;
  }

  render() {
    //const [showTaskDialog, setShowTaskDialog] = useState(false);
    const { pageSize } = this.state;
    // alert();
    let currentPage = this.state.currentPage;
    //if (count === 0) return <p>There are no wastedItems in the stock</p>;

    const filtered = this.filteredData();

    //const pagewastedItems = paginate(filtered, currentPage, pageSize);
    const pgData = paginate(filtered, currentPage, pageSize);
    const pagewastedItems = pgData.it;

    console.log(pagewastedItems);

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
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col-2"></div>
            <div className="col">
              <img src={userPic} alt="" width="150" height="150" />
              <img src={userPic2} alt="" width="150" height="150" />
            </div>
            <div className="col">
              <img src={userPic4} alt="" width="150" height="150" />
              <img src={userPic3} alt="" width="150" height="150" />
            </div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col">
              {/* <Table
                filteredwastedItems={pagewastedItems}
                onItemDelete={this.handleDelete}
                onSet={this.setConfirmDialog}
              /> */}
              <h2 className="mt-3">Wasted items</h2>
              <WastedItemTable
                filteredItems={pagewastedItems}
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
          title="Update Wasted Item"
        >
          <EditWastedItemForm
            onSetAndClose={this.closePopAndSetState}
            wastedOb={this.state.wastedItem}
          />
        </FormPopup>
      </React.Fragment>
    );
  }
}

export default WastedItem;
