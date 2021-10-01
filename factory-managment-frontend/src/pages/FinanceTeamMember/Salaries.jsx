import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddNewBillTypeModal } from '../../components/FinanceTeamMember/Modals/AddNewBillTypeModal';
import {SalariesTable} from "../../components/FinanceTeamMember/Tables/SalariesTable";
import "./styles.css";
import BillTypeImg from "./assert/img5.jpeg"

class Salaries extends Component {
  state = {
    Salaries: [],
    addModalShow: false 
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/temp-salaries/")
      .then((result) => {
        const Salaries = result.data;

        this.setState({ Salaries: Salaries });
      })  
      .catch((err) => console.log(err.message));
  }
    

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3"></div>

        <div className="col">
       
        <h1 className="heading">Salaries</h1>
        <div className="center">
          <img src={BillTypeImg} alt="billsPic" />
        </div>
            <SalariesTable filteredItems={this.state.Salaries} />
            </div>
            </div>
      </React.Fragment>
    );
  }
};

export default Salaries;
