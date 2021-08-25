import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import swal from 'sweetalert';
import axios from "axios";

class AddNewProductionRound extends Component  {
  constructor(props) {
    super(props);
    this.state = { snackbaropen: false, snackbarmsg: '',  categories: [], };
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
    event.preventDefault();
    //alert(event.target.name.value);

    fetch('http://localhost:5000/api/newProRound-details', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'username': 'thirnaya'
        },
        body: JSON.stringify({
            productId: event.target.proId.value,
            productCategory: event.target.productCategory.value,
            quantity: event.target.quntity.value,
            esDays: event.target.estDays.value,
            esEmployees: event.target.estEmp.value,
            status: event.target.status.value,
        })
    })
        .then(res => res.json())
        .then((result) => {
            swal({
                title: "New Production Round Details Added Succesfully",
                icon: "success",
                button: "Done",
              });
        }, (error) => {
            this.setState({ snackbaropen: true, snackbarmsg: 'Failed' })
        }

        )
}

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <h1>Basic Info</h1>
        
            <Form onSubmit={this.handleSubmit} >
                                    <Form.Group>
                                    <Form.Group controlId="proId">
                                        <Form.Label>Product Id</Form.Label>
                                        <Form.Control type="text" name="proId" required placeholder="PRoduct Id"  />
                                    </Form.Group>
                                        <Form.Label>Product Category</Form.Label>
                                        <Form.Control as="select" required name="productCategory">
                                        {this.state.categories.map((i) => (
                                            <option key={i._id}
                                                    >{i.categoryName}</option>
                                        ))}
                                        </Form.Control>  
                                    </Form.Group>
                                    <Form.Group controlId="quntity">
                                        <Form.Label>Quntity</Form.Label>
                                        <Form.Control type="text" name="quntity" required placeholder="Quntity"  />
                                    </Form.Group>
                                    <Form.Group controlId="estDays">
                                        <Form.Label>Estimated Days</Form.Label>
                                        <Form.Control type="text" name="estDays" required placeholder="Estimated Days" />
                                    </Form.Group>
                                    <Form.Group controlId="estEmp">
                                        <Form.Label>Estimated Employees</Form.Label>
                                        <Form.Control type="text" name="estEmp" required placeholder="Estimated Employees"  />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control as="select" required name="status">
                                            <option selected>PENDING</option>
                                            <option>ACTIVE</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button  variant="primary" type="submit" >
                                            Add New Production Round
                                        </Button>
                                    </Form.Group>
              </Form>

          </div>

          

            
        </div>
      </React.Fragment>
    );
  }
};

export default AddNewProductionRound;
