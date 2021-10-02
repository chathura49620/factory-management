import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import "../ProductionManager/dashboard.css";
import hello from "../assets/hello.png";
import clock from "../assets/clock.png";
import Clock from "../../components/ProductionManager/common/clock";
import generatePDF from "../../components/ProductionManager/util/reportGenerator";
import generatePDF from "../../components/storeManager/utils/reportGenerator";

class Dashboard extends Component {
  state = {
    currentDate: moment(new Date()).format("YYYY-MM-DD"),
    user_name: "",
    itemRecords: [],
    numOfProducts: 0,
    numOfMaterials: 0,
    numOfWastedItems: 0,
    numOfReturnedItems: 0,
    noOfRequests: 0,
    tickets: [
      {
        id: "1",
        title: "main",
        request: "myreq",
        status: "ok",
        updated_at: "2021-01-01",
      },
      {
        id: "2",
        title: "main",
        request: "myreq",
        status: "ok",
        updated_at: "2021-01-02",
      },
      {
        id: "3",
        title: "main",
        request: "myreq",
        status: "ok",
        updated_at: "2021-01-03",
      },
      {
        id: "4",
        title: "main",
        request: "myreq",
        status: "ok",
        updated_at: "2021-01-04",
      },
    ],
  };

  componentDidMount() {
    
    axios.get("http://localhost:5000/items/").then((result) => {
      const items = result.data;

      const materials = items.filter((item) => item.iType === "Material");
      const products = items.filter((item) => item.iType === "Product");

      const mCount = materials.length;
      const pCount = products.length;

      this.setState({ numOfProducts: pCount, numOfMaterials: mCount });
      
    
    });
    axios
      .get(
        "http://localhost:5000/items/multiplerecords/" + this.state.currentDate
      )
      .then((result) => {
        const records = result.data;
        this.setState({ itemRecords: records });
        console.log(records);
      });

    axios.get("http://localhost:5000/returned/").then((result) => {
      const rProducts = result.data;
      const rCount = rProducts.length;
      this.setState({ numOfReturnedItems: rCount });
    });

    axios.get("http://localhost:5000/wasted/").then((result) => {
      const wItems = result.data;
      const wCount = wItems.length;
      this.setState({ numOfWastedItems: wCount });
    });

    axios.get("http://localhost:5000/requests/").then((result) => {
      const requests = result.data;
      const reqCount = requests.length;

      this.setState({ noOfRequests: reqCount });
    });
  }

  logout() {
    localStorage.removeItem("user_full_name");
    localStorage.removeItem("user_email");
    localStorage.removeItem("is_login");
    window.location.reload();
  }

  handleMonthlyReports = () => {
    const { currentDate } = this.state;
    if (currentDate.toLocaleLowerCase().endsWith("29")) {
      console.log("monthly");
    } else {
      swal({
        text: "Please wait for end of the month.",
        icon: "warning",
        timer: "1500",
      });
    }
  };

  handleYearlyReports = () => {
    const { currentDate } = this.state;
    if (currentDate.toLocaleLowerCase().endsWith("12-29")) {
    } else {
      swal({
        text: "Please wait for end of the Year.",
        icon: "warning",
        timer: "1500",
      });
    }
  };

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
                  <div className="card3">
                    <button onClick={() => generatePDF(itemRecords, "Today Recieved Stocks")}>
                      <h1>Daily Report</h1>
                    </button>
                    <button onClick={() => this.handleMonthlyReports()}>
                      <h1>Monthly Report</h1>
                    </button>
                    <button onClick={() => this.handleYearlyReports()}>
                      <h1>Yearly Report</h1>
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
                  <p className="text-primary-p">Number Of Items</p>
                  <span className="font-bold text-title">
                    {this.state.numOfProducts}
                  </span>
                </div>
              </div>

              <div className="cardd">
                <div className="card_inner">
                  <p className="text-primary-p">No Of Material</p>
                  <span className="font-bold text-title">
                    {this.state.numOfMaterials}
                  </span>
                </div>
              </div>
              <div className="cardd">
                <div className="card_inner">
                  <p className="text-primary-p">No Of Wasted Items</p>
                  <span className="font-bold text-title">
                    {this.state.numOfWastedItems}
                  </span>
                </div>
              </div>
              <div className="cardd">
                <div className="card_inner">
                  <p className="text-primary-p">No Of Requests</p>
                  <span className="font-bold text-title">
                    {this.state.noOfRequests}
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
