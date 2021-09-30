import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { ProductStockTable } from "../../components/WholeSaleBuyer/Tabales/ProductStockTable";
import SearchBox from "../../components/WholeSaleBuyer/common/searchBox";
class ViewStockDetails extends Component {
  state = {
    ProductList: [],
    addModalShow: false,
    searchQuery: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/proStock-details")
      .then((result) => {
        const ProductList = result.data;

        this.setState({ ProductList: ProductList });
      })
      .catch((err) => console.log(err.message));
  }

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  filteredData() {
    const { searchQuery, ProductList } = this.state;

    let filtered = [];

    if (searchQuery) {
      filtered = ProductList.filter((r) =>
        r.productCategory.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered = ProductList;
    }

    return filtered;
  }

  render() {
    //take the filtered list
    let filtered = this.filteredData();

    console.log(filtered);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4"></div>
          <div className="col">
            <h1>View Product List</h1>
          </div>
        </div>

        <div className="row">
          <div className="row">
            <div className="col-4"></div>
            <div className="col">
              <SearchBox onChange={this.handleSearch} placeHolder="Search" />
            </div>
            <div className="col-3"></div>
          </div>
          <div className="col-10"></div>
          <div className="col"></div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <ProductStockTable ProductList={filtered} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewStockDetails;
