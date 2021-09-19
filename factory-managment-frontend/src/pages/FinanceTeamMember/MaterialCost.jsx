import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddNewMaterialCostBill } from '../../components/FinanceTeamMember/Modals/AddNewMaterialCostBill';
import {MaterialCostTable} from "../../components/FinanceTeamMember/Tables/MaterialCostTable";


class MaterialCost extends Component {
  state = {
    materialCost: [],
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
    

  render() {
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
            <MaterialCostTable filteredItems={this.state.materialCost} />
      </React.Fragment>
    );
  }
};

export default MaterialCost;
