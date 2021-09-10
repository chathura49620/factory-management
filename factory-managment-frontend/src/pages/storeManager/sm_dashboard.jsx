import React, { Component } from "react";
import Clock from "../../components/storeManager/reusables/clock";
import axios from "axios";
import hello from "../../pages/assets/hello.png";
import * as IoIcons from "react-icons/io";

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
                    Requestions
                  </div>
                </div>

                <div className="row">
                  <div className="row">
                    <div
                      className="col-11 col--6"
                      style={{ textAlign: "center" }}
                    >
                      Report Generation
                    </div>
                  </div>
                  <div
                    className="col-4 col--6"
                    style={{
                      backgroundColor: "#77BFC7",
                      height: 60,
                      borderTop: "3px solid #050139",
                      borderBottom: "3px solid #050139",
                      borderRight: "3px solid #050139",
                      fontSize: "25px",
                      color: "#307eaf",
                    }}
                  >
                    Daily reports
                    <IoIcons.IoIosPaper />
                  </div>
                  <div
                    className="col-4 col--6"
                    style={{
                      backgroundColor: "#77BFC7",
                      borderTop: "3px solid #050139",
                      borderBottom: "3px solid #050139",
                      borderRight: "3px solid #050139",
                      fontSize: "25px",
                      color: "#307eaf",
                    }}
                  >
                    Monthly reports
                    <IoIcons.IoIosPaper />
                  </div>
                  <div
                    className="col-4 col--6"
                    style={{
                      backgroundColor: "#77BFC7",
                      borderTop: "3px solid #050139",
                      borderRight: "3px solid #050139",
                      borderBottom: "3px solid #050139",
                      fontSize: "25px",
                      color: "#307eaf",
                    }}
                  >
                    Yearly reports
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
              <div
                className="col-3"
                style={{
                  backgroundColor: "#F0B27A",
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
                    display: "block",
                    width: "80px",
                    height: "80px",
                    textAlign: "center",
                    borderRadius: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  <div>{this.state.numOfProducts}</div>
                </span>
              </div>
              <div
                className="col-3"
                style={{
                  backgroundColor: "#06846C",
                  borderRight: "3px solid #050139",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div>Materials</div>
                <span
                  style={{
                    display: "block",
                    width: "80px",
                    height: "80px",
                    textAlign: "center",
                    borderRadius: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  {this.state.numOfMaterials}
                </span>
              </div>
              <div
                className="col-3"
                style={{
                  backgroundColor: "#F0B27A",
                  borderRight: "3px solid #050139",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div>Wasted Items</div>
                <span
                  style={{
                    display: "block",
                    width: "80px",
                    height: "80px",
                    textAlign: "center",
                    borderRadius: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  {this.state.numOfWastedItems}
                </span>
              </div>
              <div
                className="col-3"
                style={{
                  backgroundColor: "#06846C",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div> Returned products</div>
                <span
                  style={{
                    display: "block",
                    width: "80px",
                    height: "80px",
                    textAlign: "center",
                    borderRadius: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
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
                  backgroundColor: "white",
                  height: 150,
                  border: "3px solid white",
                  boxShadow: "1px 1px 1px #77BFC7, -5px -5px 13px #77BFC7",
                }}
              >
                <ol>
                  <li>
                    parm Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Omnis, blanditiis nobis sequi, pariatur dolores iure
                    laboriosam rem corporis repellat fuga harum saepe voluptatem
                    ipsa doloremque aliquam quidem expedita vel unde. loremm
                  </li>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minima delectus dicta culpa deserunt veritatis laboriosam
                    aspernatur nihil placeat, praesentium voluptatum repellendus
                    nisi fuga voluptates, sapiente sunt! Nulla quia deleniti
                    nesciunt.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia assumenda aliquam, id illum facere tempora provident
                    temporibus molestias repellat nobis dicta unde, veritatis,
                    eos cum. Reprehenderit consectetur iusto quos neque.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SMDashBoard;
