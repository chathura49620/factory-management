import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import "../SuperAdmin/dashboard.css";
import hello from "../assets/hello.png";
import clock from "../assets/clock.png";
import Clock from "../../components/ProductionManager/common/clock";


class Dashboard extends Component {
  state = {
    factoryDetails: [],
    user_name:'',
    addModalShow: true
  };

//   componentDidMount() {
//     axios
//     .get("http://localhost:5000/api/factory-details")
//     .then((result) => {
//       const factoryDetails = result.data;

//       this.setState({ factoryDetails: factoryDetails });
//     })
//     .catch((err) => console.log(err.message));

//     const user_name = localStorage.getItem("user_full_name");
//     this.setState({ user_name: user_name });

//   }




  render() {
    let AddModelClose = () => this.setState({ addModalShow: false })
    return (
      <React.Fragment>
           <ButtonToolbar>
                    {/* <AddFactoryDetailsModal
                        show={this.state.addModalShow && this.state.factoryDetails.length == 0}
                        onHide={AddModelClose}
                    /> */}
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
                      <Clock/>
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
                 
                 
                      <div className="card1">
                      <h1>Production Round Details Report</h1>
                    </div>
                    
                   
                      <div className="card2">
                      <h1>Accepted Order Details Report</h1>
                    </div>
                     
                     
                        <div className="card3">
                        <h1>Rejected Order Details Report</h1>
                        </div>
                       
                  
                  </div>
                </div>
              </div>
              
              {/* <!-- MAIN TITLE ENDS HERE --> */}

              {/* <!-- MAIN CARDS STARTS HERE --> */}
              <div className="main__cards">

                
                <div className="carda">
                  <div className="card_inner">
                    <p className="text-primary-p">Number of Orders</p>
                    <span className="font-bold text-title">300</span>
                  </div>
                </div>
                
                <div className="cardd">
                  <div className="card_inner">
                    <p className="text-primary-p">No of Completed Production Rounds</p>
                    <span className="font-bold text-title">445</span>
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
