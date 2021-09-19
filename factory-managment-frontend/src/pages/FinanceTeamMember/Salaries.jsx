import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddNewBillTypeModal } from '../../components/FinanceTeamMember/Modals/AddNewBillTypeModal';
import {SalariesTable} from "../../components/FinanceTeamMember/Tables/SalariesTable";


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
        <h1 className="mb-5">Salaries</h1>
            <SalariesTable filteredItems={this.state.Salaries} />
      </React.Fragment>
    );
  }
};

export default Salaries;
