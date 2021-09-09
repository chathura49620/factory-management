import React, { Component } from "react";
import Clock from "./common/clock";
import axios from "axios";

class SMDashBoard extends Component {
  state = {
    numOfProducts: 0,
    numOfMaterials: 0,
    numOfWastedItems: 0,
    numOfReturnedItems: 0,
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
  }

  render() {
    return (
      <React.Fragment>
        <div className="row my-2">
          <div className="col-2"></div>
          <div className="col">
            <div className="row m-2" style={{ border: "3px solid #050139" }}>
              <div
                className="col-4"
                style={{
                  backgroundColor: "#6EEA65",
                  height: 170,
                  borderRight: "3px solid #050139",
                }}
              >
                <Clock />
              </div>

              <div className="col-8" style={{ backgroundColor: "#6E24A7" }}>
                <div className="row">
                  <div
                    className="col-12 col--6"
                    style={{
                      backgroundColor: "white",
                      height: 70,
                      fontSize: "20px",
                      borderBottom: "3px solid #050139",
                    }}
                  >
                    Requestions
                  </div>
                </div>

                <div className="row">
                  <div className="row">
                    <div
                      className="col-11 col--6"
                      style={{ textAlign: "center" }}
                    >
                      Generate Reports
                    </div>
                  </div>
                  <div
                    className="col-4 col--6"
                    style={{
                      backgroundColor: "white",
                      height: 60,
                      borderTop: "3px solid #050139",
                      borderBottom: "3px solid #050139",
                      borderRight: "3px solid #050139",
                    }}
                  >
                    Daily reports
                  </div>
                  <div
                    className="col-4 col--6"
                    style={{
                      backgroundColor: "white",
                      borderTop: "3px solid #050139",
                      borderBottom: "3px solid #050139",
                      borderRight: "3px solid #050139",
                    }}
                  >
                    Monthly reports
                  </div>
                  <div
                    className="col-4 col--6"
                    style={{
                      backgroundColor: "white",
                      borderTop: "3px solid #050139",
                      borderRight: "3px solid #050139",
                      borderBottom: "3px solid #050139",
                    }}
                  >
                    Yearly reports
                  </div>
                </div>
              </div>
            </div>

            <div className="row m-2" style={{ border: "3px solid #050139" }}>
              <div
                className="col-3"
                style={{
                  backgroundColor: "white",
                  height: 130,
                  borderRight: "3px solid #050139",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div>Products</div>
                <span
                  style={{
                    backgroundColor: "blueviolet",
                    display: "block",
                    width: "80px",
                    height: "80px",
                    textAlign: "center",
                    borderRadius: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>{this.state.numOfProducts}</div>
                </span>
              </div>
              <div
                className="col-3"
                style={{
                  backgroundColor: "white",
                  borderRight: "3px solid #050139",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div>Materials</div>
                <span
                  style={{
                    backgroundColor: "blueviolet",
                    display: "block",
                    width: "80px",
                    height: "80px",
                    textAlign: "center",
                    borderRadius: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.numOfMaterials}
                </span>
              </div>
              <div
                className="col-3"
                style={{
                  backgroundColor: "white",
                  borderRight: "3px solid #050139",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div>Wasted Items</div>
                <span
                  style={{
                    backgroundColor: "blueviolet",
                    display: "block",
                    width: "80px",
                    height: "80px",
                    textAlign: "center",
                    borderRadius: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.numOfWastedItems}
                </span>
              </div>
              <div
                className="col-3"
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div> Returned products</div>
                <span
                  style={{
                    backgroundColor: "blueviolet",
                    display: "block",
                    width: "80px",
                    height: "80px",
                    textAlign: "center",
                    borderRadius: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {this.state.numOfReturnedItems}
                </span>
              </div>
            </div>

            <div className="row m-2">
              <div
                className="col-12"
                style={{
                  backgroundColor: "#6EEA65",
                  height: 50,
                  border: "3px solid #050139",
                }}
              >
                Notifications
              </div>
            </div>

            <div className="row m-2">
              <div
                className="col-12"
                style={{
                  backgroundColor: "white",
                  height: 150,
                  border: "3px solid #050139",
                }}
              >
                Notifications
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SMDashBoard;
