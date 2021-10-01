import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddNewBillTypeModal } from '../../components/FinanceTeamMember/Modals/AddNewBillTypeModal';
import {BillTypesTable} from "../../components/FinanceTeamMember/Tables/BillTypesTable";
import "./styles.css";
import BillTypeImg from "./assert/img12.jpeg"

class BillType extends Component {
  state = {
    BillType: [],
    addModalShow: false 
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/bill-type")
      .then((result) => {
        const BillType = result.data;

        this.setState({ BillType: BillType });
      })  
      .catch((err) => console.log(err.message));
  }
    

  render() {
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
                    >Add Bill Type
                    </Button>
                    <AddNewBillTypeModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                    />
          </ButtonToolbar>
            <BillTypesTable filteredItems={this.state.BillType} />
            </div>
            </div>
      </React.Fragment>
    );
  }
};

export default BillType;
