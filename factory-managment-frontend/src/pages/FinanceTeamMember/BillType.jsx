import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddNewBillTypeModal } from '../../components/FinanceTeamMember/Modals/AddNewBillTypeModal';
import {BillTypesTable} from "../../components/FinanceTeamMember/Tables/BillTypesTable";


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
        <h1 className="mb-5">Bill Types</h1>
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
      </React.Fragment>
    );
  }
};

export default BillType;
