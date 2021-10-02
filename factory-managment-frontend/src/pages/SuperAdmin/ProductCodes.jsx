import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddProductCodeModal } from '../../components/SuperAdmin/Modals/AddProductCodeModal';
import {ProductCodesTable} from "../../components/SuperAdmin/Tables/ProductCodesTable";
import SearchBox from "../../components/FinanceTeamMember/Common/searchBox";  
import "./styles.css";
import BillsImg from "./assert/img9.jpeg";


class ProductCodes extends Component {   
  state = {
    ProductCodes: [],
    searchQuery: "",
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
  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  filteredData() {
    const { searchQuery, ProductCodes } = this.state;

    let filtered = [];

    if (searchQuery) {
      filtered = ProductCodes.filter((r) =>
        r.productCategory.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered = ProductCodes;
    }

    return filtered;
  }

  render(){
    let filtered = this.filteredData();
    let AddModelClose = () => this.setState({ addModalShow: false })
  return (
    <React.Fragment>
       <div className="row">
          <div className="col-3"></div>

        <div className="col">
        <h1 className="heading">Product Codes</h1>
        <div className="center">
              <img src={BillsImg} alt="billsPic" />
            </div>
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
            <div className="col-md-4">
            </div>
            <div className="col-md-5">
                <SearchBox onChange={this.handleSearch} placeHolder="Search" />
            </div>
            <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <ProductCodesTable filteredItems={filtered} />
          </div>
        </div> 
        </div>
        </div>
      </React.Fragment>
      
  );
  }
}; 
  
export default ProductCodes;
