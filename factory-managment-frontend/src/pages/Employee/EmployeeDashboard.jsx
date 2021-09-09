import React, { Component } from "react";
// import hello from "../../assets/hello.svg";
import Chart from "../charts/chart";
import "./dashboard.css";
import hello from "../assets/hello.png";

class EmployeeDashboard extends Component {
  render(){
  return (
    
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
        <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello, Hanna Rahman.</h1>
            <p>Welcome to your profile.</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="carda">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Projects</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="cardb">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Completed</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="cardc">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Process</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>

          <div className="cardd">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Pending</p>
              <span className="font-bold text-title">645</span>
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
