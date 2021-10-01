import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';


export class AddNewMaterialCostBill extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            MaterialCodes:[],
            snackbaropen: false, 
            snackbarmsg: '',
            CategoryNameError:''
             
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        axios
          .get("http://localhost:5000/api/meterial-code")
          .then((result) => {
            const MaterialCodes = result.data;
    
            this.setState({ MaterialCodes: MaterialCodes });
          })
          .catch((err) => console.log(err.message));
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate();
        // if(isValid){
            fetch('http://localhost:5000/api/material-cost/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'username': 'chathura'
                },
                body: JSON.stringify({
                    matirialCode: event.target.materialcode.value,
                    matirialBillNo: event.target.billno.value,
                    date: event.target.billdate.value,
                    amount: event.target.amount.value,
                })
            })
                .then(res => res.json())
                .then((result) => {
                    swal({
                        title: "Material Cost Added Succesfully",
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
        // }
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
                            Add Material Bill Cost
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Material Code</Form.Label>
                                        <Form.Control as="select" required name="materialcode">
                                        {this.state.MaterialCodes.map((i) => (
                                            <option key={i._id}
                                                    >{i.materialCode}</option>
                                        ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="billno">
                                        <Form.Label>Bill No</Form.Label>
                                        <Form.Control type="text" name="billno" required placeholder="Bill No"  />
                                          {/* <div style={{background:"#f8d7da"}}>{this.state.CategoryNameError}</div> */}
                                    </Form.Group>
                                    <Form.Group controlId="date">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="text" name="billdate" required placeholder="Date"  />
                                          {/* <div style={{background:"#f8d7da"}}>{this.state.CategoryNameError}</div> */}
                                    </Form.Group>
                                    <Form.Group controlId="date">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control type="text" name="amount" required placeholder="Amount"  />
                                          {/* <div style={{background:"#f8d7da"}}>{this.state.CategoryNameError}</div> */}
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group>
                                        <Button  style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                                            Add Material Cost Bill
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