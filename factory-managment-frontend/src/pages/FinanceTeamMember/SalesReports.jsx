import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar,Row,Col, Card,Form} from 'react-bootstrap';
import { AddNewBillTypeModal } from '../../components/FinanceTeamMember/Modals/AddNewBillTypeModal';
import {SalariesTable} from "../../components/FinanceTeamMember/Tables/SalariesTable";
import GenarateSalesReport from "./services/GenarateSalesReport";
import jsPDF from "jspdf";
import "jspdf-autotable";

class SalesReports extends Component {
  state = {
    Bills:[],
    CashBills:[],
    CredirBills:[],
    addModalShow: false 
  };

  handleSubmitforCredit(event) {
    event.preventDefault();
    const doc = new jsPDF();
    const tableColumn = [ "Bill No", "Bill Type", "Amount", "Date"];
    // define an empty array of rows
    const tableRows = [];
    axios
          .get("http://localhost:5000/api/bills")
          .then((result) => {
            const Bills = result.data;
            // console.log(Bills);
            const CashBills = [];
            Bills.forEach(ticket => {
              if(ticket.billType == 'Credit Bills' && ticket.month == event.target.monthCredit.value) {
              const ticketData = [
                ticket.billNo,
                ticket.billType,
                ticket.amount,
                ticket.billDate,
                // called date-fns to format the date on the ticket
              //   format(new Date(), "yyyy-MM-dd")
              ];
              // push each tickcet's info into a row
              tableRows.push(ticketData);
              }
            });
            // startY is basically margin-top
            doc.autoTable(tableColumn, tableRows, { startY: 20 });
            const date = Date().split(" ");
            // we use a date string to generate our filename.
            const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
            // ticket title. and margin-top + margin-left
            doc.text("Credit Bills For Month "+event.target.monthCredit.value, 14, 15);
            // we define the name of our PDF file.
            doc.save(`report_${dateStr}.pdf`);
            
          })
          .catch((err) => console.log(err.message));
  }

  handleSubmitforCash(event) {
    event.preventDefault();
    const doc = new jsPDF();
    const tableColumn = [ "Bill No", "Bill Type", "Amount", "Date"];
    // define an empty array of rows
    const tableRows = [];
    axios
          .get("http://localhost:5000/api/bills")
          .then((result) => {
            const Bills = result.data;
            console.log(Bills);
            const CashBills = [];
            Bills.forEach(ticket => {
              if(ticket.billType == 'Cash Bills' && ticket.month == event.target.monthCash.value) {
              const ticketData = [
                ticket.billNo,
                ticket.billType,
                ticket.amount,
                ticket.billDate,
                // called date-fns to format the date on the ticket
              //   format(new Date(), "yyyy-MM-dd")
              ];
              // push each tickcet's info into a row
              tableRows.push(ticketData);
              }
            });
            // startY is basically margin-top
            doc.autoTable(tableColumn, tableRows, { startY: 20 });
            const date = Date().split(" ");
            // we use a date string to generate our filename.
            const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
            // ticket title. and margin-top + margin-left
            doc.text("Cash Bills For Month "+event.target.monthCash.value, 14, 15);
            // we define the name of our PDF file.
            doc.save(`report_${dateStr}.pdf`);
            
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
              <Card style={{ width: '36rem',height: '20rem', background: 'yellow', margin: '20px' }}>
                <Card.Body>
                  <Card.Text>
                  <h2 style={{textAlign:"center"}}>Credit <br /> Sale <br /> Report </h2>
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
                        <Button  style={{ backgroundColor: "#7121AD", color: "white", marginLeft: 'center' }} variant="primary" type="submit"  className ="btn-lg">
                          Genarate
                        </Button>
                    </Form.Group>
                   </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}> 
              <Card style={{ width: '36rem',height: '20rem', background: 'yellow', margin: '20px' }}>
                  <Card.Body>
                  <Card.Text>
                  <h2 style={{textAlign:"center"}} >Cash <br /> Sale <br /> Report </h2>
                   <Form onSubmit={this.handleSubmitforCash}>
                   <Form.Group>
                        <Form.Label>Month</Form.Label>
                         <Form.Control as="select" required name="monthCash">
            
                                <option value="January" >January</option>
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
                        <Button  style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit"  className ="btn-lg">
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
