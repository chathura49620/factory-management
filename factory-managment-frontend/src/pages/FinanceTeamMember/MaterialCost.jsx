import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddNewMaterialCostBill } from '../../components/FinanceTeamMember/Modals/AddNewMaterialCostBill';
import {MaterialCostTable} from "../../components/FinanceTeamMember/Tables/MaterialCostTable";
import SearchBox from "../../components/FinanceTeamMember/Common/searchBox";


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
        <h1 className="mb-5">Bill Types</h1>
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
            <MaterialCostTable filteredItems={filtered} />
      </React.Fragment>
    );
  }
};

export default MaterialCost;
