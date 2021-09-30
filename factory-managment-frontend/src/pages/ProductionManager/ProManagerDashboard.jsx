import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import "../SuperAdmin/dashboard.css";
import hello from "../assets/hello.png";
import clock from "../assets/clock.png";
import Clock from "../../components/ProductionManager/common/clock";
import generatePDF from "../../components/ProductionManager/util/reportGenerator";
import generateacceptedPDF from "../../components/ProductionManager/util/acceprtedreportGenerator";

class Dashboard extends Component {
  state = {
    factoryDetails: [],
    user_name: "",
    addModalShow: true,
    productionRound: [],
    acceptedRounds: [],
    rejectedRounds: [],
    orderCount: [],
    productionRoundCount: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/newProRound-details")
      .then((result) => {
        const productionRound = result.data;

        this.setState({ productionRound: productionRound });
      })
      .catch((err) => console.log(err.message));

    const user_name = localStorage.getItem("user_full_name");
    this.setState({ user_name: user_name });

    axios
      .get("http://localhost:5000/api/order-details")
      .then((result) => {
        const orders = result.data;

        const accepted = orders.filter((order) => order.status === "Accepted");
        const rejected = orders.filter((order) => order.status === "Rejected");

        console.log(accepted);
        console.log(rejected);
        this.setState({ acceptedRounds: accepted, rejectedRounds: rejected });
      })
      .catch((err) => console.log(err.message));

    axios
      .get("http://localhost:5000/api/order-details")
      .then((result) => {
        const orderCount = result.data;

        this.setState({ orderCount: orderCount });
      })
      .catch((err) => console.log(err.message));

    axios
      .get("http://localhost:5000/api/newProRound-details")
      .then((result) => {
        const productionRoundCount = result.data;

        this.setState({ productionRoundCount: productionRoundCount });
      })
      .catch((err) => console.log(err.message));
  }

  logout() {
    localStorage.removeItem("user_full_name");
    localStorage.removeItem("user_email");
    localStorage.removeItem("is_login");
    window.location.reload();
  }

  render() {
    const { productionRound, acceptedRounds, rejectedRounds } = this.state;
    let AddModelClose = () => this.setState({ addModalShow: false });
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
                  <div className="card1">
                    <button onClick={() => generatePDF(productionRound)}>
                      <h1>Production Round Details Report</h1>
                    </button>
                  </div>

                  <div className="card2">
                    <button onClick={() => generateacceptedPDF(acceptedRounds)}>
                      <h1>Accepted Order Details Report</h1>
                    </button>
                  </div>

                  <div className="card3">
                    <button onClick={() => generateacceptedPDF(rejectedRounds)}>
                      <h1>Rejected Order Details Report</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- MAIN TITLE ENDS HERE --> */}

            {/* <!-- MAIN CARDS STARTS HERE --> */}
            <div className="main__cards">
              <div className="carda">
                <div className="card_inner">
                  <p className="text-primary-p">Number Of Orders</p>
                  <span className="font-bold text-title">
                    {this.state.orderCount.length}
                  </span>
                </div>
              </div>

              <div className="cardd">
                <div className="card_inner">
                  <p className="text-primary-p">No Of Production Rounds</p>
                  <span className="font-bold text-title">
                    {this.state.productionRoundCount.length}
                  </span>
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
}

export default Dashboard;
