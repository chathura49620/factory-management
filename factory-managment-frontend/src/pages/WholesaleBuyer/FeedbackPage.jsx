import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import "./styles.css";
import addorder from "../../pages/assets/addorderpic.png";

class FeedbackPage extends Component {
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
      fetch("http://localhost:5000/api/feedback-details", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          username: "thirnaya",
        },
        body: JSON.stringify({
          email: event.target.email.value,
          mobileNumber: event.target.mobileNumber.value,
          feedback: event.target.feedback.value,
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
        <h1 className="heading">Add Feedback</h1>

        <div className="center">
          <img src={addorder} alt="leavepic" />
        </div>

        <div className="row">
          <div className="col-3"></div>

          <div className="col">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.validationError}
                </div>
              </Form.Group>

              <Form.Group controlId="mobileNumber">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Mobile Number
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.validationError}
                </div>
              </Form.Group>
              <Form.Group controlId="feedback">
                <Form.Label style={{ fontWeight: "bold" }}>Feedback</Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="feedback"
                  placeholder="Feedback"
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
                  Add Feedback
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

export default FeedbackPage;
