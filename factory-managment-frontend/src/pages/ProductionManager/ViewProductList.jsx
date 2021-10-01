import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { ProductListTable } from "../../components/ProductionManager/Tabales/ProductListTable";
import "./styles.css";
import viewpic from "../../pages/assets/viewpic.png";

class ViewProductList extends Component {
  state = {
    ProductList: [],
    addModalShow: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/product-code/")
      .then((result) => {
        const ProductList = result.data;

        this.setState({ ProductList: ProductList });
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="heading">View Product List</h1>

        <div className="center">
          <img src={viewpic} alt="leavepic" />
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <ProductListTable ProductList={this.state.ProductList} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewProductList;
