import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddCategoryModal } from '../../components/SuperAdmin/Modals/AddCategoryModal';
import {CategoriesTable} from "../../components/SuperAdmin/Tables/CategoriesTable";
import SearchBox from "../../components/FinanceTeamMember/Common/searchBox";
import "./styles.css";
import BillsImg from "./assert/img11.jpeg";


class Categories extends Component {
  state = {
    categories: [],
    searchQuery: "",
    addModalShow: false
  };    
    
  componentDidMount() { 
    axios
      .get("http://localhost:5000/api/categories")
      .then((result) => {
        const categories = result.data;

        this.setState({ categories: categories });
      })
      .catch((err) => console.log(err.message));
  }
  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  filteredData() {
    const { searchQuery, categories } = this.state;

    let filtered = [];

    if (searchQuery) {
      filtered = categories.filter((r) =>
        r.categoryName.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered = categories;
    }

    return filtered;
  }

  render() {
    let filtered = this.filteredData();
    let AddModelClose = () => this.setState({ addModalShow: false })
    return (
      <React.Fragment>
         <div className="row">
          <div className="col-3"></div>

        <div className="col">
        <h1 className="heading">Categories</h1>
            <div className="center">
              <img src={BillsImg} alt="billsPic" />
            </div>
        <ButtonToolbar>
                    <Button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                        onClick={() => this.setState({ addModalShow: true })}
                    >Add Category
                    </Button>
                    <AddCategoryModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                    />
          </ButtonToolbar>
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-5">
                <SearchBox onChange={this.handleSearch} placeHolder="Search" />
            </div>
            <div className="col-md-3"></div>
        </div>
            <CategoriesTable filteredItems={filtered} />
      </div>
      </div>
      </React.Fragment>
    );
  }
};

export default Categories;
