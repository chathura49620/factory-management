import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddNewMaterialCostBill } from '../../components/FinanceTeamMember/Modals/AddNewMaterialCostBill';
import {MaterialCostTable} from "../../components/FinanceTeamMember/Tables/MaterialCostTable";
import SearchBox from "../../components/FinanceTeamMember/Common/searchBox";
import "./styles.css";
import BillTypeImg from "./assert/img11.jpeg"

class MaterialCost extends Component {
  state = {
    materialCost: [],
    searchQuery: "",
    addModalShow: false 
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/material-cost/")
      .then((result) => {
        const materialCost = result.data;

        this.setState({ materialCost: materialCost });
      })  
      .catch((err) => console.log(err.message));
  }
  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  filteredData() {
    const { searchQuery, materialCost } = this.state;

    let filtered = [];

    if (searchQuery) {
      filtered = materialCost.filter((r) =>
        r.matirialCode.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered = materialCost;
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
        <h1 className="heading">Bill Types</h1>
        <div className="center">
          <img src={BillTypeImg} alt="billsPic" />
        </div>
        <ButtonToolbar>
                    <Button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                        onClick={() => this.setState({ addModalShow: true })}
                    >Add New Material Cost
                    </Button>
                    <AddNewMaterialCostBill
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
            <MaterialCostTable filteredItems={filtered} />
            </div>
            </div>
      </React.Fragment>
    );
  }
};

export default MaterialCost;
