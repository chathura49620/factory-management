import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar, Form } from 'react-bootstrap';
import { AddNewBillTypeModal } from '../../components/FinanceTeamMember/Modals/AddNewBillTypeModal';
import {SalariesTable} from "../../components/FinanceTeamMember/Tables/SalariesTable";
import {Line} from 'react-chartjs-2';


class Profit extends Component {
  state = {
    Salaries: '0',
    bill:'0',
    materialCost:'0',
    totalProfit: 0,
    graphdata:{
      labels: ['January', 'February', 'March',
      'April', 'May'],
      datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
      ]
    },
    addModalShow: false 
  };

  componentDidMount(){
    axios
      .get("http://localhost:5000/api/material-cost/")
      .then((result) => {
        const materialCost = result.data;
       
        materialCost.forEach(matCost => {
          // this.setState({ materialCost: matCost.amount });
          this.setState(prevState => ({
            materialCost: parseFloat(prevState.materialCost) + parseFloat(matCost.amount)
          }));
        });
        // console.log(this.state.materialCost);
      })  
      .catch((err) => console.log(err.message));
  
      axios
      .get("http://localhost:5000/api/temp-salaries/")
      .then((result) => {
        const Salaries = result.data;
        
        Salaries.forEach(sal => {
          this.setState(prevState => ({
            Salaries: parseFloat(prevState.Salaries) + parseFloat(sal.amount)
          }));
        });
        // console.log(this.state.Salaries);
      })  
      .catch((err) => console.log(err.message));

      axios
      .get("http://localhost:5000/api/bills")
      .then((result) => {
        const bill = result.data;
        bill.forEach(bills => {
          this.setState(prevState => ({
            bill: parseFloat(prevState.bill) + parseFloat(bills.amount)
          }));
        });
        // console.log(this.state.bill);
      })
      .catch((err) => console.log(err.message));
  }
    

  render() {
    return (
      <div>
      <React.Fragment>
      <div className="row">
          <div className="col-3"></div>

        <div className="col">
        <h1 className="mb-5">Profit</h1>
        
        Profit For the Last Month : Rs. {(this.state.Salaries + this.state.materialCost) - this.state.bill}/=

        <Line
          data={this.state.graphdata}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        </div>
      </React.Fragment>
      
      </div>
    );
  }
};

export default Profit;
