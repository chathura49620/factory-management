import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import swal from "sweetalert";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class EditOrderDetailsMoadal extends Component {
  constructor(props) {
    super(props);
    this.state = { snackbaropen: false, snackbarmsg: "", categories: [] };
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
    event.preventDefault();

    fetch("http://localhost:5000/api/order-details", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        username: "thiranya",
      },
      body: JSON.stringify({
        id: event.target.id.value,
        productCategory: event.target.productCategory.value,
        quantity: event.target.quantity.value,
        paymentMethode: event.target.paymentMethode.value,
        //status: event.target.status.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          swal({
            title: "Order Status Changed Successfully",
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

  //   handleSubmit = (event) => {

  //       return <Redirect to='/login' />

  //   }

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
              Update Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Group controlId="orderId">
                      <Form.Control
                        type="text"
                        name="id"
                        required
                        placeholder="id"
                        defaultValue={this.props.id}
                      />
                    </Form.Group>

                    <Form.Label>Product Category</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      name="productCategory"
                      defaultValue={this.props.productCategory}
                    >
                      {this.state.categories.map((i) => (
                        <option key={i._id}>{i.categoryName}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="quantity">
                    <Form.Label>Quntity</Form.Label>
                    <Form.Control
                      type="text"
                      name="quantity"
                      required
                      placeholder="Quntity"
                      defaultValue={this.props.quantity}
                    />
                  </Form.Group>
                  <Form.Group controlId="paymentMethode">
                    <Form.Label>Payment Methode</Form.Label>
                    <Form.Control
                      type="text"
                      name="paymentMethode"
                      required
                      placeholder="Payment Methode"
                      defaultValue={this.props.paymentMethode}
                    />
                    <div style={{ background: "#f8d7da" }}>
                      {this.state.validationError}
                    </div>
                    <option selected>Cash</option>
                    <option>Card</option>
                  </Form.Group>
                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Edit Details
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
