import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import Chart from "../charts/chart";
import "./dashboard.css";
import hello from "../assets/hello.png";
import clock from "../assets/clock.png";
import { AddFactoryDetailsModal } from '../../components/SuperAdmin/Modals/AddFactoryDetailsModal';
import Clock from "./clock";
import jsPDF from "jspdf";
import "jspdf-autotable";
   
class Dashboard extends Component {    
  state = {
    factoryDetails: [],
    category:[],
    matCode:[],
    proCode:[],
    users:[],
    user_name:'',
    addModalShow: true
  };

  componentDidMount() {
    axios
    .get("http://localhost:5000/api/factory-details")
    .then((result) => {
      const factoryDetails = result.data;

      this.setState({ factoryDetails: factoryDetails });
    })
    .catch((err) => console.log(err.message));

    const user_name = localStorage.getItem("user_full_name");
    this.setState({ user_name: user_name });
   
    axios
    .get("http://localhost:5000/api/categories")
    .then((result) => {
      const category = result.data;

      this.setState({ category: category });
    })
    .catch((err) => console.log(err.message));

    axios
    .get("http://localhost:5000/api/meterial-code")
    .then((result) => {
      const matCode = result.data;

      this.setState({ matCode: matCode });
    })
    .catch((err) => console.log(err.message));
   
    axios
    .get("http://localhost:5000/api/product-code")
    .then((result) => {
      const proCode = result.data;

      this.setState({ proCode: proCode });
    })
    .catch((err) => console.log(err.message));

    axios
    .get("http://localhost:5000/users")
    .then((result) => {
      const users = result.data;

      this.setState({ users: users });
    })
    .catch((err) => console.log(err.message));

  }

   
  logout(){
    localStorage.removeItem('user_full_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('is_login');
    window.location.reload();
  }

  genarateUserReport(){
    const doc = new jsPDF();
    const tableColumn = [ "fullName", "email", "contact", "userRole"];
    const tableRows = [];
    axios
    .get("http://localhost:5000/api/users")
    .then((result) => {
      const User = result.data;
            User.forEach(ticket => {
              const ticketData = [
                ticket.fullName,
                ticket.email,
                ticket.contact,
                ticket.userRole,
                // called date-fns to format the date on the ticket
              //   format(new Date(), "yyyy-MM-dd")
              ];
              // push each tickcet's info into a row
              tableRows.push(ticketData);
              
            });
            // startY is basically margin-top
            doc.autoTable(tableColumn, tableRows, { startY: 20 });
            const date = Date().split(" ");
            // we use a date string to generate our filename.
            const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
            // ticket title. and margin-top + margin-left
            doc.text("User List ", 14, 15);
            // we define the name of our PDF file.
            doc.save(`report_user_list.pdf`);
    })
    .catch((err) => console.log(err.message));
  }


  genarateCostReport(){
    const doc = new jsPDF();
    const tableColumn = [ "matirial Code", "matirial BillNo", "date", "amount"];
    const tableRows = [];
    axios
    .get("http://localhost:5000/api/material-cost/")
    .then((result) => {
      const matCost = result.data;
            matCost.forEach(ticket => {
              const ticketData = [
                ticket.matirialCode,
                ticket.matirialBillNo,
                ticket.date,
                ticket.amount,
                // called date-fns to format the date on the ticket
              //   format(new Date(), "yyyy-MM-dd")
              ];
              // push each tickcet's info into a row
              tableRows.push(ticketData);
              
            });
            // startY is basically margin-top
            doc.autoTable(tableColumn, tableRows, { startY: 20 });
            const date = Date().split(" ");
            // we use a date string to generate our filename.
            
            // ticket title. and margin-top + margin-left
            doc.text("Material Cost Report ", 14, 15);
            // we define the name of our PDF file.
            doc.save(`report_cost.pdf`);
    })
    .catch((err) => console.log(err.message));
  }
 
  render() {
    let AddModelClose = () => this.setState({ addModalShow: false })
    return (
      <React.Fragment>
           <ButtonToolbar>
                    <AddFactoryDetailsModal
                        show={this.state.addModalShow && this.state.factoryDetails.length == 0}
                        onHide={AddModelClose}
                    />
          </ButtonToolbar>
          <main>
            <div className="main__container">
              {/* <!-- MAIN TITLE STARTS HERE --> */}

              <div className="main__title">
              <img src={hello} alt="hello" />
                <div className="main__greeting">
                  <h1>Hello, {this.state.user_name}</h1>
                  <p>Welcome to your profile.</p>
                </div>
                <button style={{ backgroundColor: "#7121AD", color: "white" ,width:"100px"}} onClick={this.logout}>Log Out</button>
              </div>

              <div className="charts">
                <div className="charts__left">
                  <div className="charts__left__title">
                    <div>
                      <h1>Date and Time</h1>
                    </div>
                    <i className="fa fa-usd" aria-hidden="true"></i>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <img src={clock} alt="clock" />
                    </div>
                    <div className="col-md-6">
                      <Clock />
                    </div>
                  </div>
                 
                </div>

                <div className="charts__right">
                  <div className="charts__right__title">
                    <div>
                      <h1>Report Genaration</h1>
                    </div>
                    <i className="fa fa-usd" aria-hidden="true"></i>
                  </div>

                  <div className="charts__right__cards">
              
                      <div className="card2">
                      <button onClick={() => this.genarateUserReport()}>User Report</button>
                    </div>
                     
                     
                        <div className="card3">
                        <button onClick={() => this.genarateCostReport()}>Cost Report</button>
                        </div>
                       
                  
                  </div>
                </div>
              </div>
              
              {/* <!-- MAIN TITLE ENDS HERE --> */}

              {/* <!-- MAIN CARDS STARTS HERE --> */}
              <div className="main__cards">

                
                <div className="carda">
                  <div className="card_inner">
                    <p className="text-primary-p">Number of Users</p>
                    <span className="font-bold text-title">{this.state.users.length}</span>
                  </div>
                </div>
                
                <div className="cardd">
                  <div className="card_inner">
                    <p className="text-primary-p">No of Categories</p>
                    <span className="font-bold text-title">{this.state.category.length}</span>
                  </div>
                </div>
                <div className="carda">
                  <div className="card_inner">
                    <p className="text-primary-p">Number of Product Codes</p>
                    <span className="font-bold text-title">{this.state.proCode.length}</span>
                  </div>
                </div>
                
                <div className="cardd">
                  <div className="card_inner">
                    <p className="text-primary-p">No of Metirial Codes</p>
                    <span className="font-bold text-title">{this.state.matCode.length}</span>
                  </div>
                </div>
              </div>
              {/* <!-- MAIN CARDS ENDS HERE --> */}

              {/* <!-- CHARTS STARTS HERE --> */}
              
              {/* <!-- CHARTS ENDS HERE --> */}
            </div>
          </main>
      </React.Fragment>
    );
  }
};

export default Dashboard;
