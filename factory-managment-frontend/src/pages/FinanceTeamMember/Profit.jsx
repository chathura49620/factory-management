import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddNewBillTypeModal } from '../../components/FinanceTeamMember/Modals/AddNewBillTypeModal';
import {SalariesTable} from "../../components/FinanceTeamMember/Tables/SalariesTable";


class Profit extends Component {
  state = {
    Salaries: [],
    addModalShow: false 
  };

  
    

  render() {
    return (
      <React.Fragment>
        <h1 className="mb-5">Profit</h1>
            
      </React.Fragment>
    );
  }
};

export default Profit;
