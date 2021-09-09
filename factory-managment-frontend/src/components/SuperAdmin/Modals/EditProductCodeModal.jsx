import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import swal from 'sweetalert';
import axios from "axios";

export class EditProductCodeModal extends Component {
    constructor(props) {
        super(props);
        this.state = { snackbaropen: false, snackbarmsg: '', categories:[] };
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

    handleSubmit(event, props) {
        event.preventDefault();
        //alert(event.target.name.value);

        fetch('http://localhost:5000/api/product-code/', { 
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': 'chathura'
            },
            body: JSON.stringify({
                id: event.target.id.value,
                productCode: event.target.productCode.value,
                productCategory: event.target.productCategory.value,
                status: event.target.status.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                swal({
                    title: "Product Code Updated Succesfully",
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
            <div className="container">

                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={6000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}></IconButton>
                    ]}
                />
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"

                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Product Code
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="id">
                                        <Form.Label>ID</Form.Label>
                                        <Form.Control type="text" name="id" required disabled defaultValue={this.props.id} hidden/>
                                    </Form.Group>
                                    <Form.Group controlId="name">
                                        <Form.Label>Product Code</Form.Label>
                                        <Form.Control type="text" name="productCode" required placeholder="Product Code" defaultValue={this.props.productCode} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Product Category</Form.Label>
                                        <Form.Control as="select" required name="productCategory" defaultValue={this.props.productCategory}>
                                        {this.state.categories.map((i) => (
                                            <option key={i._id}
                                                    >{i.categoryName}</option>
                                        ))}
                                        </Form.Control>  
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control as="select" required name="status" defaultValue={this.props.status}>
                                            <option selected>ACTIVE</option>
                                            <option>INACTIVE</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <br />
                                    <Form.Group>
                                        <Button style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                                            Edit Product Code
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