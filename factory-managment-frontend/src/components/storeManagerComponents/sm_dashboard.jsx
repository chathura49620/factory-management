import React, { Component } from "react";

class SMDashBoard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row m-2">
          <div
            className="col-4"
            style={{ backgroundColor: "#2461A7", height: 170 }}
          >
            Clock here
          </div>

          <div className="col-8" style={{ backgroundColor: "#6E24A7" }}>
            <div className="row">
              <div
                className="col-12 col--6"
                style={{ backgroundColor: "#1BE51A", height: 70 }}
              >
                Requestions
              </div>
            </div>

            <div className="row">
              <div className="row">
                <div className="col-4 col--6">Generate Reports</div>
              </div>
              <div
                className="col-4 col--6"
                style={{ backgroundColor: "#247AA7", height: 60 }}
              >
                Daily reports
              </div>
              <div
                className="col-4 col--6"
                style={{ backgroundColor: "#9C0D4C" }}
              >
                Monthly reports
              </div>
              <div
                className="col-4 col--6"
                style={{ backgroundColor: "#11317B" }}
              >
                Yearly reports
              </div>
            </div>
          </div>
        </div>

        <div className="row m-2">
          <div
            className="col-3"
            style={{ backgroundColor: "#11317B", height: 130 }}
          >
            Products
          </div>
          <div className="col-3" style={{ backgroundColor: "#11317B" }}>
            Materials
          </div>
          <div className="col-3" style={{ backgroundColor: "#11317B" }}>
            Wasted Items
          </div>
          <div className="col-3" style={{ backgroundColor: "#11317B" }}>
            Reurned products
          </div>
        </div>

        <div className="row m-2">
          <div
            className="col-12"
            style={{ backgroundColor: "#6E24A7", height: 50 }}
          >
            Notifications
          </div>
        </div>

        <div className="row m-2">
          <div
            className="col-12"
            style={{ backgroundColor: "#116E7B", height: 150 }}
          >
            Notifications
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SMDashBoard;
