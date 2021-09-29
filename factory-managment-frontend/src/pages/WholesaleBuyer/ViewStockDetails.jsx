import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { ProductStockTable } from "../../components/WholeSaleBuyer/Tabales/ProductStockTable";

class ViewStockDetails extends Component {
  state = {
    ProductList: [],
    addModalShow: false,
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

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4"></div>
          <div className="col">
            <h1>View Product List</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <ProductStockTable ProductList={this.state.ProductList} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewStockDetails;
