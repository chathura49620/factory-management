import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";
import axios from "axios";

export class AddOrderDetailsModal extends Component {
  constructor(props) {
    super(props);
    this.state = { snackbaropen: false, snackbarmsg: "", categories: [] };
    // this.state = {
    //   snackbaropen: false,
    //   snackbarmsg: "",
    //   //   CategoryNameError: "",
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  snackbarClose = (event) => {
    this.setState({ snackbaropen: false });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/categories")
      .then((result) => {
        const categories = result.data;

        this.setState({ categories: categories });
      })
      .catch((err) => console.log(err.message));
  }

  handleSubmit(event) {
    console.log(event);
    const isValid = this.validate();
    event.preventDefault();

    if (isValid) {
      fetch("http://localhost:5000/api/order-details", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          username: "thiranya",
        },
        body: JSON.stringify({
          orderId: event.target.orderId.value,
          buyerName: event.target.buyerName.value,
          email: event.target.email.value,
          productCategory: event.target.productCategory.value,
          quantity: event.target.quantity.value,
          paymentMethode: event.target.paymentMethode.value,
          status: event.target.status.value,
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            swal({
              title: "Order Details Added Succesfully",
              icon: "success",
              button: "Done",
            });
            this.setState({ CategoryNameError: "" });
            setTimeout(
              function () {
                window.location.reload();
              }.bind(this),
              1000
            );
          },
          (error) => {
            this.setState({ snackbaropen: true, snackbarmsg: "Failed" });
          }
        );
    }
  }
  render() {
    return (
      <div className="container">
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.snackbaropen}
          autoHideDuration={6000}
          onClose={this.snackbarClose}
          message={<span id="message-id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="danger"
              onClick={this.snackbarClose}
            ></IconButton>,
          ]}
        />
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          //centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Order Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Label>Order ID</Form.Label>
                  <Form.Group controlId="orderId">
                    <Form.Control
                      type="text"
                      name="id"
                      required
                      placeholder="id"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Product Category</Form.Label>
                    <Form.Control as="select" required name="productCategory">
                      {this.state.categories.map((i) => (
                        <option key={i._id}>{i.categoryName}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="buyerName">
                    <Form.Label>Buyer Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="buyerName"
                      placeholder="Buyer Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="text"
                      name="quantity"
                      placeholder="Quantity"
                    />
                    <Form.Group>
                      <Form.Label>Payment Methode</Form.Label>
                      <Form.Control as="select" required name="paymentMethode">
                        <option selected>Cash</option>
                        <option>Card</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Status
                      </Form.Label>
                      <Form.Control
                        style={{ border: "1px solid #050139" }}
                        as="select"
                        name="status"
                      >
                        <div style={{ background: "#f8d7da" }}>
                          {this.state.validationError}
                        </div>
                        <option selected>Pending</option>
                        <option>Accepted</option>
                        <option>Rejected</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Group>
                  <br></br>
                  <Form.Group>
                    <Button
                      style={{ backgroundColor: "#7121AD", color: "white" }}
                      variant="primary"
                      type="submit"
                    >
                      Add Category
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
