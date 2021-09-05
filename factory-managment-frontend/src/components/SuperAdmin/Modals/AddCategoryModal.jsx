import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';


export class AddCategoryModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snackbaropen: false, 
            snackbarmsg: '',
            CategoryNameError:''
             
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            fetch('http://localhost:5000/api/categories', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'username': 'chathura'
                },
                body: JSON.stringify({
                    categoryName: event.target.categoryName.value,
                    status: event.target.status.value
                })
            })
                .then(res => res.json())
                .then((result) => {
                    swal({
                        title: "Category Added Succesfully",
                        icon: "success",
                        button: "Done",
                    }); 
                    this.setState({CategoryNameError:''})
                    setTimeout(function() {
                        window.location.reload(); 
                      }.bind(this), 1000);
                }, (error) => {
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed' })
                }

                )
        }
    }

    validate(){
        let CategoryNameError = "";

        if(!this.state.CategoryNameError){
            CategoryNameError = "Category Name Cannot Be Blank"
        }

        if(CategoryNameError){
            this.setState({CategoryNameError:CategoryNameError})
            return false;
        }

        return true;
    }

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
                            Add Category
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="categoryName"  placeholder="Category Name" />
                                          <div style={{background:"#f8d7da"}}>{this.state.CategoryNameError}</div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control as="select" required name="status">
                                            <option selected>ACTIVE</option>
                                            <option>INACTIVE</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group>
                                        <Button  style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                                            Add Category
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