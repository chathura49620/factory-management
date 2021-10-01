import React, { Component } from "react";
import Clock from "../../components/storeManager/reusables/clock";
import axios from "axios";
import hello from "../../pages/assets/hello.png";
import * as IoIcons from "react-icons/io";
import generatePDF from "../../components/storeManager/utils/reportGenerator";
import moment from "moment";
import swal from "sweetalert";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

class SMDashBoard extends Component {
  state = {
    currentDate: moment(new Date()).format("YYYY-MM-DD"),
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
    const { tickets, itemRecords } = this.state;
    console.log(this.state.currentDate);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <div className="row">
              <div className="col">
                <img
                  src={hello}
                  alt="hello"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="col">
                <h1>Hello, {this.state.user_name}</h1>
                <p style={{ color: "#16A085" }}>Welcome to your profile.</p>
              </div>
              <div className="col-9"></div>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-2"></div>
          <div className="col">
            <div
              className="row m-2"
              style={{
                border: "3px solid white",
                boxShadow: "1px 1px 1px #77BFC7, -5px -5px 13px #77BFC7",
              }}
            >
              <div
                className="col-4"
                style={{
                  backgroundColor: "white",
                  height: 170,
                  borderRight: "3px solid #050139",
                }}
              >
                <Clock />
              </div>

              <div className="col-8" style={{ backgroundColor: "white" }}>
                <div className="row">
                  <div
                    className="col-12 col--6"
                    style={{
                      backgroundColor: "#F0B27A",
                      height: 70,
                      fontSize: "30px",
                      borderBottom: "3px solid #307eaf",
                      color: "#307eaf",
                    }}
                  >
                    <div>
                      Requestions
                      <span className="badge rounded-pill bg-primary">
                        {this.state.noOfRequests}
                      </span>
                      <Button size="large">
                        <Link to="/requests/for/items">Go and check</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="row">
                    <div
                      className="col-11 col--6"
                      style={{ textAlign: "center", fontSize: "20px" }}
                    >
                      Report Generation
                    </div>
                  </div>
                  <div
                    className="col-4 col--6"
                    style={{
                      backgroundColor: "#77BFC7",
                      height: 60,
                      borderTop: "2px solid #050139",
                      borderBottom: "2px solid #050139",
                      borderRight: "2px solid #050139",
                      fontSize: "25px",
                      color: "#307eaf",
                    }}
                  >
                    <button
                      onClick={() =>
                        generatePDF(itemRecords, "Today Recieved Stocks")
                      }
                    >
                      Daily reports
                    </button>

                    <IoIcons.IoIosPaper />
                  </div>
                  <div
                    className="col-4 col--6"
                    style={{
                      backgroundColor: "#77BFC7",
                      borderTop: "2px solid #050139",
                      borderBottom: "2px solid #050139",
                      borderRight: "2px solid #050139",
                      fontSize: "25px",
                      color: "#307eaf",
                    }}
                  >
                    <button onClick={this.handleMonthlyReports}>
                      Monthly reports
                    </button>
                    <IoIcons.IoIosPaper />
                  </div>
                  <div
                    className="col-4 col--6"
                    style={{
                      backgroundColor: "#77BFC7",
                      borderTop: "2px solid #050139",
                      borderRight: "2px solid #050139",
                      borderBottom: "2px solid #050139",
                      fontSize: "25px",
                      color: "#307eaf",
                    }}
                  >
                    <button onClick={this.handleYearlyReports}>
                      Yearly reports
                    </button>
                    <IoIcons.IoIosPaper />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row m-4"
              style={{
                border: "3px solid white",
              }}
            >
              <div className="col-3">
                <Card
                  sx={{
                    minWidth: 10,
                    backgroundColor: "#167092",
                    maxWidth: 300,
                  }}
                >
                  <CardContent>
                    <div style={{ color: "white", fontSize: "20px" }}>
                      Products
                    </div>
                    <div style={{ color: "white", fontSize: "20px" }}>
                      {this.state.numOfProducts}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="col-3">
                <Card
                  sx={{
                    minWidth: 10,
                    backgroundColor: "#06846C",
                    maxWidth: 300,
                  }}
                >
                  <CardContent>
                    <div style={{ color: "white", fontSize: "20px" }}>
                      Materials
                    </div>
                    <div style={{ color: "white", fontSize: "20px" }}>
                      {this.state.numOfMaterials}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="col-3">
                <Card
                  sx={{
                    minWidth: 10,
                    backgroundColor: "#DE6F27",
                    maxWidth: 300,
                  }}
                >
                  <CardContent>
                    <div style={{ color: "white", fontSize: "20px" }}>
                      Returned products
                    </div>
                    <div style={{ color: "white", fontSize: "20px" }}>
                      {this.state.numOfReturnedItems}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="col-3">
                <Card
                  sx={{
                    minWidth: 10,
                    backgroundColor: "#AF2356 ",
                    maxWidth: 300,
                  }}
                >
                  <CardContent>
                    <div style={{ color: "white", fontSize: "20px" }}>
                      Wasted Items
                    </div>
                    <div style={{ color: "white", fontSize: "20px" }}>
                      {this.state.numOfWastedItems}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="row m-2">
              <div
                className="col-12"
                style={{
                  backgroundColor: "#F2F3F4",
                  height: 50,
                  border: "3px solid white",
                }}
              >
                Notifications
              </div>
            </div>

            <div className="row m-2">
              <div
                className="col-12"
                style={{
                  backgroundColor: "#F4F6F7",
                  height: 150,
                  boxShadow: "1px 1px 1px #77BFC7, -5px -5px 13px #77BFC7",
                  border: "2px solid black",
                  borderRadius: "6px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SMDashBoard;
