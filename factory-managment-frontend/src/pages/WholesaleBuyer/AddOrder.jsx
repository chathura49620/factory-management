import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import "./styles.css";
import addorder from "../../pages/assets/addorderpic.png";

class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { snackbaropen: false, snackbarmsg: "", categories: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/categories")
      .then((result) => {
        const categories = result.data;

        this.setState({ categories: categories });
      })
      .catch((err) => console.log(err.message));
  }

  handleSubmit(event, props) {
    console.log(event);
    const isValid = this.validate();
    event.preventDefault();
    //alert(event.target.name.value);

    if (isValid) {
      fetch("http://localhost:5000/api/order-details", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          username: "thirnaya",
        },
        body: JSON.stringify({
          orderId: event.target.orderId.value,
          productCategory: event.target.productCategory.value,
          buyerName: event.target.buyerName.value,
          email: event.target.email.value,
          quantity: event.target.quantity.value,
          paymentMethode: event.target.paymentMethode.value,
          status: event.target.status.value,
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            swal({
              title: "New Production Round Details Added Succesfully",
              icon: "success",
              button: "Done",
            });
            setTimeout(
              function () {
                window.location.reload();
              }.bind(this),
              1500
            );
          },
          (error) => {
            this.setState({ snackbaropen: true, snackbarmsg: "Failed" });
          }
        );
    }
  }

  validate() {
    let validationError = "";

    if (!this.state.validationError) {
      validationError = "This Field Cannot Be Blank";
    }

    if (validationError) {
      this.setState({ validationError: validationError });
      return false;
    }

    return true;
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="heading">Add Order Details</h1>

        <div className="center">
          <img src={addorder} alt="leavepic" />
        </div>

        <div className="row">
          <div className="col-3"></div>

          <div className="col">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Group controlId="orderId">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Order Id
                  </Form.Label>
                  <Form.Control
                    style={{ border: "1px solid #050139" }}
                    type="text"
                    name="orderId"
                    placeholder=" Order Id"
                    required
                  />
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.validationError}
                  </div>
                </Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Product Category
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  as="select"
                  name="productCategory"
                  required
                >
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.validationError}
                  </div>
                  {this.state.categories.map((i) => (
                    <option key={i._id}>{i.categoryName}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="buyerName">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Buyer Name
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="buyerName"
                  placeholder="Buyer Name"
                  required
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.validationError}
                </div>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.validationError}
                </div>
              </Form.Group>
              <Form.Group controlId="quantity">
                <Form.Label style={{ fontWeight: "bold" }}>Quantity</Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  required
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.validationError}
                </div>
              </Form.Group>

              <Form.Group controlId="paymentMethode">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Payment Methode
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="paymentMethode"
                  placeholder="Payment Methode"
                  required
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.validationError}
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>Status</Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  as="select"
                  name="status"
                  required
                >
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.validationError}
                  </div>
                  <option selected>Pending</option>
                  <option>Completed</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Button
                  className="my-1"
                  style={{ backgroundColor: "#7121AD", color: "white" }}
                  type="submit"
                >
                  Add Order
                </Button>
              </Form.Group>
            </Form>
          </div>

          <div className="col-1"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddOrder;
