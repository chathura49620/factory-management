import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar,Row,Col, Card,Form} from 'react-bootstrap';
import { AddNewBillTypeModal } from '../../components/FinanceTeamMember/Modals/AddNewBillTypeModal';
import {SalariesTable} from "../../components/FinanceTeamMember/Tables/SalariesTable";
import GenarateSalesReport from "./services/GenarateSalesReport";

class SalesReports extends Component {
  state = {
    Bills:[],
    CashBills:[],
    CredirBills:[],
    addModalShow: false 
  };

  handleSubmitforCredit(event) {
    event.preventDefault();
    axios
    .get("http://localhost:5000/api/bills")
    .then((result) => {
      const Bills = result.data;
      Bills.forEach(bills => {
        if(bills.billType == 'Credit Bills' && bills.month == event.target.monthCredit.value) {
          const CredirBills  =  [];
          this.setState({ CredirBills: CredirBills });
        } 
      });
      
    })
    .catch((err) => console.log(err.message));

  }
  handleSubmitforCash(event) {
    event.preventDefault();
    
    axios
          .get("http://localhost:5000/api/bills")
          .then((result) => {
            const Bills = result.data;
            const CashBills = [];
            Bills.forEach(bills => {
              if(bills.billType == 'Cash Bills' && bills.month == event.target.monthCash.value) {
                GenarateSalesReport(bills)
              }
              
            });
            console.log(this.state.CashBills);
            
          })
          .catch((err) => console.log(err.message));
  }
    

  render() {
    return (
      <React.Fragment>
        <h1 className="">Sales Reports</h1>
        <h2>Please Select Month and Genarate Reports</h2>

        <Row>
            <Col sm={6}> 
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Text>
                  <h2 style={{alignContent:"center"}}>Credit <br /> Sale <br /> Report </h2>
                   <Form onSubmit={this.handleSubmitforCredit}>
                   <Form.Group>
                        <Form.Label>Month</Form.Label>
                         <Form.Control as="select" required name="monthCredit">
            
                                <option value="January" >January</option>
                                <option value="February" >February</option>
                                <option value="February" >February</option>
                                <option value="April" >April</option>
                                <option value="May" >May</option>
                                <option value="June" >June </option>
                                <option value="July" >July</option>
                                <option value="August" >August</option>
                                <option value="September" >September</option>
                                <option value="October" >October</option>
                                <option value="November" >November</option>
                                <option value="December" >December</option>
                          </Form.Control>
                    </Form.Group>
                    <br /><br />
                    <Form.Group>
                        <Button  style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                          Genarate
                        </Button>
                    </Form.Group>
                   </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}> 
              <Card style={{ width: '18rem' , alignContent: 'center' }}>
                  <Card.Body>
                  <Card.Text>
                  <h2>Cash <br /> Sale <br /> Report </h2>
                   <Form onSubmit={this.handleSubmitforCash}>
                   <Form.Group>
                        <Form.Label>Month</Form.Label>
                         <Form.Control as="select" required name="monthCash">
            
                                <option value="January" >January</option>
                                <option value="February" >February</option>
                                <option value="February" >February</option>
                                <option value="April" >April</option>
                                <option value="May" >May</option>
                                <option value="June" >June </option>
                                <option value="July" >July</option>
                                <option value="August" >August</option>
                                <option value="September" >September</option>
                                <option value="October" >October</option>
                                <option value="November" >November</option>
                                <option value="December" >December</option>
                          </Form.Control>
                    </Form.Group>
                    <br /><br />
                    <Form.Group>
                        <Button  style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                          Genarate
                        </Button>
                    </Form.Group>
                   </Form>
                  </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>    
            
      </React.Fragment>
    );
  }
};

export default SalesReports;
