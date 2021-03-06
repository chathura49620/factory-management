import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddNewBillModal } from '../../components/FinanceTeamMember/Modals/AddNewBillModal';
import {BillTables} from "../../components/FinanceTeamMember/Tables/BillTables";
import SearchBox from "../../components/FinanceTeamMember/Common/searchBox";
import "./styles.css";
import BillsImg from "./assert/img4.jpeg";

class Bills extends Component {
  state = {
    bill: [],
    searchQuery: "",
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

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  filteredData() {
    const { searchQuery, bill } = this.state;

    let filtered = [];

    if (searchQuery) {
      filtered = bill.filter((r) =>
        r.billNo.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered = bill;
    }

    return filtered;
  }

  render() {
    let filtered = this.filteredData();
    console.log(filtered);
    let AddModelClose = () => this.setState({ addModalShow: false })
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3"></div>

        <div className="col">
        <h1 className="heading">Bill</h1>
        <div className="center">
          <img src={BillsImg} alt="billsPic" />
        </div>
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
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-5">
                <SearchBox onChange={this.handleSearch} placeHolder="Search" />
            </div>
            <div className="col-md-3"></div>
        </div>
            <BillTables filteredItems={filtered} />
            </div>
            </div>
      </React.Fragment>
    );
  }
};     

export default Bills;
