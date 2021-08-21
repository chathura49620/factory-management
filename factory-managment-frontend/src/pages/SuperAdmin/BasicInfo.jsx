import React, { Component } from "react";

import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import swal from 'sweetalert';
import axios from "axios";

class BasicInfo extends Component  {
  constructor(props) {
    super(props);
    this.state = { snackbaropen: false, snackbarmsg: '',  factoryDetails: [], };
    this.handleSubmit = this.handleSubmit.bind(this);
}

  componentDidMount() {
    axios
    .get("http://localhost:5000/api/factory-details")
    .then((result) => {
      const factoryDetails = result.data;
      console.log(factoryDetails)

      this.setState({ factoryDetails: factoryDetails });
    })
    .catch((err) => console.log(err.message));
  }

  handleSubmit(event, props) {
    event.preventDefault();
    //alert(event.target.name.value);

    fetch('http://localhost:5000/api/factory-details', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'username': 'chathura'
        },
        body: JSON.stringify({
            id: event.target.id.value,
            companyName: event.target.companyName.value,
            companyAddress: event.target.companyAddress.value,
            ownerName: event.target.ownerName.value,
            mainProduct: event.target.mainProduct.value,
            startDate: event.target.startDate.value,
            is_added:1
        })
    })
        .then(res => res.json())
        .then((result) => {
            swal({
                title: "Factory Details Updated Succesfully",
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
            {this.state.factoryDetails.map((i) => (
            <Form onSubmit={this.handleSubmit}  key={i._id}>
                                      <Form.Group controlId="id">
                                        {/* <Form.Label>ID</Form.Label> */}
                                        <Form.Control type="text" name="id" required disabled defaultValue={i._id} hidden/>
                                    </Form.Group>
                                    <Form.Group controlId="companyName">
                                        <Form.Label>Company Name</Form.Label>
                                        <Form.Control type="text" name="companyName" required placeholder="Company Name" defaultValue={i.companyName} />
                                    </Form.Group>
                                    <Form.Group controlId="companyAddress">
                                        <Form.Label>Company Address</Form.Label>
                                        <Form.Control type="text" name="companyAddress" required placeholder="Company Address" defaultValue={i.companyAddress} />
                                    </Form.Group>
                                    <Form.Group controlId="ownerName">
                                        <Form.Label>Owner Name</Form.Label>
                                        <Form.Control type="text" name="ownerName" required placeholder="Owner Name" defaultValue={i.ownerName} />
                                    </Form.Group>
                                    {/* <Form.Group controlId="companyLogo">
                                        <Form.Label>Company Logo</Form.Label>
                                        <Form.Control type="file" name="companyLogo" required placeholder="Category Name" />
                                    </Form.Group> */}
                                    <Form.Group controlId="mainProduct">
                                        <Form.Label>Main Product</Form.Label>
                                        <Form.Control type="text" name="mainProduct" required placeholder="Main Product" defaultValue={i.mainProduct} />
                                    </Form.Group>
                                    {/* <Form.Group controlId="br">
                                        <Form.Label>br</Form.Label>
                                        <Form.Control type="file" name="br" required placeholder="Category Name" />
                                    </Form.Group> */}
                                    <Form.Group controlId="startDate">
                                        <Form.Label>startDate</Form.Label>
                                        <Form.Control type="date" name="startDate" required placeholder="Start Date" defaultValue={i.startDate} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button  variant="primary" type="submit" >
                                            Update Factory Details
                                        </Button>
                                    </Form.Group>
              </Form>
            ))}
          </div>

          

            
        </div>
      </React.Fragment>
    );
  }
};

export default BasicInfo;
