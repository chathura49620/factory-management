import React, { Component } from 'react';
import axios from "axios";
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { Redirect } from 'react-router-dom';


export class AddProductCodeModal extends Component {
    constructor(props) {
        super(props);
        this.state = { snackbaropen: false, snackbarmsg: '',categories: [] };
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
        alert(event.target.name.value);
        fetch('http://localhost:5000/api/product-code/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': 'chathura'
            },
            body: JSON.stringify({
                productCode: event.target.productCode.value,
                productCategory: event.target.productCategory.value,
                status: event.target.status.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert("Success");
                console.log("result" , result)
            }, (error) => {
                this.setState({ snackbaropen: true, snackbarmsg: 'Failed' })
            }

            )
    }

    //   handleSubmit = (event) => {

    //       return <Redirect to='/login' />

    //   }

    render() {
        return (
            <div className="container">

                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={6000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="danger" onClick={this.snackbarClose}></IconButton>
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
                            Add Product Code
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Product Code</Form.Label>
                                        <Form.Control type="text" name="productCode" required placeholder="Product Code" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Product Category</Form.Label>
                                        <Form.Control as="select" required name="productCategory">
                                        {this.state.categories.map((i) => (
                                            <option key={i._id}
                                                    >{i.categoryName}</option>
                                        ))}
                                        </Form.Control>  
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control as="select" required name="status">
                                            <option selected>ACTIVE</option>
                                            <option>INACTIVE</option>
                                        </Form.Control>
                                    </Form.Group>
                                    
                                    <Form.Group>
                                        <Button variant="primary" type="submit" >
                                            Add Product Code
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}