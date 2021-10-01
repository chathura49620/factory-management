import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import "./styles.css";
import addorder from "../../pages/assets/addorderpic.png";

class AddStockDetails extends Component {
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
      fetch("http://localhost:5000/api/proStock-details", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          username: "thirnaya",
        },
        body: JSON.stringify({
          productId: event.target.proId.value,
          productCategory: event.target.productCategory.value,
          //productImage: event.target.filename.value,
          instock: event.target.instock.value,
          quantity: event.target.quantity.value,
          price: event.target.price.value,
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            swal({
              title: "Order Added Succesfully",
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
        <h1 className="heading">Add Stock Details</h1>

        <div className="center">
          <img src={addorder} alt="leavepic" />
        </div>

        <div className="row">
          <div className="col-3"></div>

          <div className="col">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Group controlId="proId">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Product Id
                  </Form.Label>
                  <Form.Control
                    style={{ border: "1px solid #050139" }}
                    type="text"
                    name="proId"
                    placeholder="Product Id"
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

              <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>Instock</Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  as="select"
                  name="instock"
                  required
                >
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.validationError}
                  </div>
                  <option selected>Instock</option>
                  <option>Out Of Stock</option>
                </Form.Control>
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

              <Form.Group controlId="price">
                <Form.Label style={{ fontWeight: "bold" }}>Price</Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="price"
                  placeholder="Price"
                  required
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.validationError}
                </div>
              </Form.Group>

              <Form.Group>
                <Button
                  className="my-1"
                  style={{ backgroundColor: "#7121AD", color: "white" }}
                  type="submit"
                >
                  Add Stock Details
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

export default AddStockDetails;
