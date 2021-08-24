import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import {ProductListTable} from "../../components/ProductionManager/Tabales/ProductListTable";



class ViewProductList extends Component {
  state = {
    ProductList: [],
    addModalShow: false
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
        <h1 className="mb-5">View Producti List</h1>
            <ProductListTable ProductList={this.state.ProductList} />
      </React.Fragment>
    );
  }
};

export default ViewProductList;
