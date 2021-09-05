import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddProductCodeModal } from '../../components/SuperAdmin/Modals/AddProductCodeModal';
import {ProductCodesTable} from "../../components/SuperAdmin/Tables/ProductCodesTable";


class ProductCodes extends Component {
  state = {
    ProductCodes: [],
    addModalShow: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/product-code")
      .then((result) => {
        const ProductCodes = result.data;

        this.setState({ ProductCodes: ProductCodes });
      })
      .catch((err) => console.log(err.message));
  }

  render(){
    let AddModelClose = () => this.setState({ addModalShow: false })
  return (
    <React.Fragment>
        <h1 className="mb-5">Product Codes</h1>
        <ButtonToolbar>
                    <Button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                        onClick={() => this.setState({ addModalShow: true })}
                    >Add Product Code
                    </Button>
                    <AddProductCodeModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                    />
        </ButtonToolbar>
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <ProductCodesTable filteredItems={this.state.ProductCodes} />
          </div>
        </div>
      </React.Fragment>
  );
  }
};

export default ProductCodes;
