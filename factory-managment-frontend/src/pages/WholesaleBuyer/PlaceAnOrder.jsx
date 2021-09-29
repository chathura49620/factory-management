import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { StockTable } from "../../components/WholeSaleBuyer/Tabales/StockTable";
import SearchBox from "../../components/WholeSaleBuyer/common/searchBox";

class PlaceAnOrder extends Component {
  state = {
    productStock: [],
    addModalShow: false,
    searchQuery: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/proStock-details")
      .then((result) => {
        const productStock = result.data;

        this.setState({ productStock: productStock });
      })
      .catch((err) => console.log(err.message));
  }

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  filteredData() {
    const { searchQuery, productStock } = this.state;

    let filtered = [];

    if (searchQuery) {
      filtered = productStock.filter((r) =>
        r.productCategory.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered = productStock;
    }

    return filtered;
  }

  render() {
    //take the filtered list
    let filtered = this.filteredData();

    console.log(filtered);

    let AddModelClose = () => this.setState({ addModalShow: false });
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4 my-2"></div>
          <div className="col">
            <h1>View Production Details</h1>
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
            {/**pass the filtered data */}
            <StockTable productStock={filtered} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PlaceAnOrder;
