import React, { Component } from "react";
import axios from "axios";
import Chart from "../charts/chart";
import "./dashboardelements.css";
import hello from "../assets/hello.png";

class EmployeeDashboard extends Component {
  state = {
    user_name: "",
    assignments:[],
    leavereq:[],
    payments:[]
  }; 

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/assignment-details/")
      .then((result) => {
        const assignments = result.data;

        this.setState({assignments: assignments});
      })
      .catch((err) => console.log(err.message));

    const user_name = localStorage.getItem("user_full_name");
    this.setState({ user_name: user_name });

    axios
      .get("http://localhost:5000/api/leave-details/")
      .then((result) => {
        const leavereq = result.data;

        this.setState({leavereq: leavereq});
      })
      .catch((err) => console.log(err.message));

    axios
      .get("http://localhost:5000/api/payment-details/")
      .then((result) => {
        const payments = result.data;

        this.setState({payments: payments});
      })
      .catch((err) => console.log(err.message));
  }
  logout() {
    localStorage.removeItem("user_full_name");
    localStorage.removeItem("user_email");
    localStorage.removeItem("is_login");
    window.location.reload();
  }

  render(){
  return (
    
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
        <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello, {this.state.user_name}.</h1>
            <p>Welcome to your profile.</p>
          </div>
        </div>
        <button
                style={{
                  backgroundColor: "#7121AD",
                  color: "white",
                  width: "100px",
                }}
                onClick={this.logout}
              >
                Log Out
              </button>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="carda">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Assignments</p>
              <span className="font-bold text-title">{this.state.assignments.length}</span>
            </div>
          </div>

          <div className="cardb">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Leave Requests</p>
              <span className="font-bold text-title">{this.state.leavereq.length}</span>
            </div>
          </div>

          <div className="cardc">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Payments</p>
              <span className="font-bold text-title">{this.state.payments.length}</span>
            </div>
          </div>

          <div className="cardd">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Rejected Assignments</p>
              <span className="font-bold text-title">{this.state.assignments.length}</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Work Chart Statistics</h1>
                <p>For the month of July</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Your Stats</h1>
                <p>As of 2nd July 2021</p> 
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Salary</h1>
                <p>$35,300</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Leaves</h1>
                <p>39</p>
              </div>

              <div className="card4">
                <h1>Assignments</h1>
                <p>181</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
  }
};

export default EmployeeDashboard;
