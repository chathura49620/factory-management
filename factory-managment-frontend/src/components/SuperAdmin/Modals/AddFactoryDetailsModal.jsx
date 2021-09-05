import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';


export class AddFactoryDetailsModal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            snackbaropen: false, 
            snackbarmsg: '',
            companyNameError:'',
            companyAddressError:'',
            ownerNameError:'',
            mainProductError:'',
            startDateError:''

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate(event);
            if(isValid){
                fetch('http://localhost:5000/api/factory-details', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'username': 'chathura'
                },
                body: JSON.stringify({
                    companyName: event.target.companyName.value,
                    companyAddress: event.target.companyAddress.value,
                    ownerName: event.target.ownerName.value,
                    mainProduct: event.target.mainProduct.value,
                    startDate: event.target.startDate.value,
                    is_added:1
                    // companyName: event.target.companyName.value,
                    // companyName: event.target.companyName.value,
                })
            })
                .then(res => res.json())
                .then((result) => {
                    console.log(result);
                    swal({
                        title: "Factory Details Added Succesfully",
                        icon: "success",
                        button: "Done",
                    }); 
                    this.setState({
                        companyNameError:'',
                        companyAddressError:'',
                        ownerNameError:'',
                        mainProductError:'',
                        startDateError:'',
                    })
                    setTimeout(function() {
                        window.location.reload(); 
                      }.bind(this), 1500);
                }, (error) => {
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed' })
                }

                )
        }
    }

    validate(event){
        let companyNameError = "";
        let companyAddressError = "";
        let ownerNameError = "";
        let mainProductError = "";
        let startDateError = "";

        if(!event.target.companyName.value){
            companyNameError = "Company Name  Cannot Be Blank"
        }
        if(!event.target.companyAddress.value){
            companyAddressError = "Company Address  Cannot Be Blank"
        }
        if(!event.target.ownerName.value){
            ownerNameError = "Owner Name  Cannot Be Blank"
        }
        if(!event.target.mainProduct.value){
            mainProductError = "Main Product  Cannot Be Blank"
        }
        if(!event.target.startDate.value){
            startDateError = "start Date  Cannot Be Blank"
        }

        if(companyNameError | companyAddressError | ownerNameError | mainProductError | startDateError){
            this.setState({
                companyNameError:companyNameError,
                companyAddressError:companyAddressError,
                ownerNameError:ownerNameError,
                mainProductError:mainProductError,
                startDateError:startDateError,
            })
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
                            Add Factory Details
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="companyName">
                                        <Form.Label>Company Name</Form.Label>
                                        <Form.Control type="text" name="companyName" required placeholder="Company Name" />
                                        <div style={{background:"#f8d7da"}}>{this.state.companyNameError}</div>
                                    </Form.Group>
                                    <Form.Group controlId="companyAddress">
                                        <Form.Label>Company Address</Form.Label>
                                        <Form.Control type="text" name="companyAddress" required placeholder="Company Address" />
                                        <div style={{background:"#f8d7da"}}>{this.state.companyAddressError}</div>
                                    </Form.Group>
                                    <Form.Group controlId="ownerName">
                                        <Form.Label>Owner Name</Form.Label>
                                        <Form.Control type="text" name="ownerName" required placeholder="Owner Name" />
                                        <div style={{background:"#f8d7da"}}>{this.state.ownerNameError}</div>
                                    </Form.Group>
                                    {/* <Form.Group controlId="companyLogo">
                                        <Form.Label>Company Logo</Form.Label>
                                        <Form.Control type="file" name="companyLogo" required placeholder="Category Name" />
                                    </Form.Group> */}
                                    <Form.Group controlId="mainProduct">
                                        <Form.Label>Main Product</Form.Label>
                                        <Form.Control type="text" name="mainProduct" required placeholder="Main Product" />
                                        <div style={{background:"#f8d7da"}}>{this.state.mainProduct}</div>
                                    </Form.Group>
                                    {/* <Form.Group controlId="br">
                                        <Form.Label>br</Form.Label>
                                        <Form.Control type="file" name="br" required placeholder="Category Name" />
                                    </Form.Group> */}
                                    <Form.Group controlId="startDate">
                                        <Form.Label>startDate</Form.Label>
                                        <Form.Control type="date" name="startDate" required placeholder="Start Date" />
                                        <div style={{background:"#f8d7da"}}>{this.state.startDate}</div>
                                    </Form.Group>
                                    <br />
                                    <Form.Group>
                                        <Button  style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                                            Add Factory Details
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