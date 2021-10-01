import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { OrderDetailsTable } from "../../components/ProductionManager/Tabales/OrderDetailsTable";
import SearchBox from "../../components/ProductionManager/common/searchBox";
import "./styles.css";
import viewpic from "../../pages/assets/viewpic.png";

class ViewOrderDetails extends Component {
  state = {
    orderDetails: [],
    addModalShow: false,
    searchQuery: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/order-details")
      .then((result) => {
        const orderDetails = result.data;

        this.setState({ orderDetails: orderDetails });
      })
      .catch((err) => console.log(err.message));
  }

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  filteredData() {
    const { searchQuery, orderDetails } = this.state;

    let filtered = [];

    if (searchQuery) {
      filtered = orderDetails.filter((r) =>
        r.productCategory.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered = orderDetails;
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
        <h1 className="heading">View Order Details</h1>

        <div className="center">
          <img src={viewpic} alt="leavepic" />
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
            <OrderDetailsTable orderDetails={filtered} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewOrderDetails;
