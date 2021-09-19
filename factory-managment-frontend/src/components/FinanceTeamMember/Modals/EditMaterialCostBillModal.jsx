import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class EditMaterialCostBillModal extends Component {
    constructor(props) {
        super(props);
        this.state = { snackbaropen: false, snackbarmsg: '' , MaterialCodes:[] };
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

    handleSubmit(event, props) {
        event.preventDefault();
        fetch('http://localhost:5000/api/material-cost/', {
            method: 'PUT',
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
                    title: "Material Bill Updated Succesfully",
                    icon: "success",
                    button: "Done",
                  });
            }, (error) => {
                
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
                            Edit Material Bill Cost
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    
                        <Row>
                            <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Material Code</Form.Label>
                                        <Form.Control as="select" required name="materialcode" defaultValue={this.props.matcode}>
                                        {this.state.MaterialCodes.map((i) => (
                                            <option key={i._id}
                                                    >{i.materialCode}</option>
                                        ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="billno">
                                        <Form.Label>Bill No</Form.Label>
                                        <Form.Control type="text" name="billno" required placeholder="Bill No" defaultValue={this.props.billno} />
                                          {/* <div style={{background:"#f8d7da"}}>{this.state.CategoryNameError}</div> */}
                                    </Form.Group>
                                    <Form.Group controlId="date">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="text" name="billdate" required placeholder="Date"  defaultValue={this.props.date}/>
                                          {/* <div style={{background:"#f8d7da"}}>{this.state.CategoryNameError}</div> */}
                                    </Form.Group>
                                    <Form.Group controlId="date">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control type="text" name="amount" required placeholder="Amount" defaultValue={this.props.amount} />
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