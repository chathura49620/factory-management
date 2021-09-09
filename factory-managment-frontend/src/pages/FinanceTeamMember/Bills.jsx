import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddNewBillModal } from '../../components/FinanceTeamMember/Modals/AddNewBillModal';
import {BillTables} from "../../components/FinanceTeamMember/Tables/BillTables";


class Bills extends Component {
  state = {
    bill: [],
    addModalShow: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/bills")
      .then((result) => {
        const bill = result.data;
  
        this.setState({ bill: bill });
      })
      .catch((err) => console.log(err.message));
  }


  render() {
    let AddModelClose = () => this.setState({ addModalShow: false })
    return (
      <React.Fragment>
        <h1 className="mb-5">Bill</h1>
        <ButtonToolbar>
                    <Button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                        onClick={() => this.setState({ addModalShow: true })}
                    >Add Bill
                    </Button>
                    <AddNewBillModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                    />
          </ButtonToolbar>
            <BillTables filteredItems={this.state.bill} />
      </React.Fragment>
    );
  }
};

export default Bills;
