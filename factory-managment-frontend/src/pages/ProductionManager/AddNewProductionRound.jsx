import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import "./styles.css";
import addorder from "../../pages/assets/addorderpic.png";
class AddNewProductionRound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbaropen: false,
      snackbarmsg: "",
      categories: [],
      productCodeError: "",
      productCategoryError: "",
      quantityError: "",
      esDaysError: "",
      esEmployeesError: "",
      statusError: ""
    };
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
    console.log(event.target.proId.value);
    event.preventDefault();
    const isValid = this.validate(event);
    console.log(this.state)

    if (isValid) {
      fetch("http://localhost:5000/api/newProRound-details", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          username: "thirnaya",
        },
        body: JSON.stringify({
          productId: event.target.proId.value,
          productCategory: event.target.productCategory.value,
          quantity: event.target.quntity.value,
          esDays: event.target.estDays.value,
          esEmployees: event.target.estEmp.value,
          status: event.target.status.value,
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(this.state);
            swal({
              title: "New Production Round Details Added Succesfully",
              icon: "success",
              button: "Done",
            });
            setTimeout(
              function () {
                // window.location.reload();
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

  validate(event){
    let productCodeError = "";
    let productCategoryError = "";
    let quantityError = "";
    let esDaysError = "";
    let esEmployeesError = "";
    let statusError = "";

    if(!event.target.proId.value){
      productCodeError = "Product Id Field Can Not Be Blank";
    }
    if(!event.target.productCategory.value){
      productCategoryError = "Product Category Field Can Not Be Blank";
    }
    if(!event.target.quntity.value){
      quantityError = "Quantity Field Can Not Be Blank";
    }
    if(!event.target.estDays.value){
      esDaysError = "Estimated Days Field Can Not Be Blank";
    }
    if(!event.target.estEmp.value){
      esEmployeesError = "Esatimated Employess Field Can Not Be Blank";
    }
    if(!event.target.status.value){
      statusError = "Status Field Can Not Be Blank";
    }

    if(productCodeError || quantityError || esEmployeesError ||  esDaysError){
      this.setState({
        productCodeError: productCodeError,
        quantityError: quantityError,
        esDaysError: esDaysError,
        esEmployeesError: esEmployeesError,
      });
      return false;
    }

    return true;
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="heading">Add New Production Round Details</h1>

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
                  />
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.productCodeError}
                  </div>
                </Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Product Category
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  as="select"
                  name="productCategory"
                >
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.productCategoryError}
                  </div>
                  {this.state.categories.map((i) => (
                    <option key={i._id}>{i.categoryName}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="quntity">
                <Form.Label style={{ fontWeight: "bold" }}>Quantity</Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="quntity"
                  placeholder="Quantity"
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.quantityError}
                </div>
              </Form.Group>
              <Form.Group controlId="estDays">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Estimated Days
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="estDays"
                  placeholder="Estimated Days"
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.esDaysError}
                </div>
              </Form.Group>
              <Form.Group controlId="estEmp">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Estimated Employees
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="estEmp"
                  placeholder="Estimated Employees"
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.esEmployeesError}
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>Status</Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  as="select"
                  name="status"
                >
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.statusError}
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
                  Add Production Round
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

export default AddNewProductionRound;
