import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';


export class AddNewBillModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snackbaropen: false, 
            snackbarmsg: '',
            CategoryNameError:'',
            BillType:[],
             
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    componentDidMount() {
        axios
          .get("http://localhost:5000/api/bill-type")
          .then((result) => {
            const BillType = result.data;
    
            this.setState({ BillType: BillType });
          })
          .catch((err) => console.log(err.message));
      }         

    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate();
        // if(isValid){
            fetch('http://localhost:5000/api/bills', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'username': 'chathura'
                },
                body: JSON.stringify({
                    billNo: event.target.billNo.value,
                    billType: event.target.billType.value,
                    amount: event.target.amount.value,
                    billDate: event.target.billDate.value
                })
            })
                .then(res => res.json())
                .then((result) => {
                    swal({
                        title: "Bill  Added Succesfully",
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
                            Add Bill 
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Bill No</Form.Label>
                                        <Form.Control type="text" name="billNo" required placeholder="Bill No"  />
                                          <div style={{background:"#f8d7da"}}>{this.state.CategoryNameError}</div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Bill Type</Form.Label>
                                        <Form.Control as="select" required name="billType">
                                        {this.state.BillType.map((i) => (
                                            <option key={i._id}
                                                    >{i.billType}</option>
                                        ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="name">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control type="text" name="amount" required placeholder="Amount"  />
                                          <div style={{background:"#f8d7da"}}>{this.state.CategoryNameError}</div>
                                    </Form.Group>
                                    <Form.Group controlId="startDate">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="date" name="billDate" required placeholder="Bill Date" />
                                        <div style={{background:"#f8d7da"}}>{this.state.startDate}</div>
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group>
                                        <Button  style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                                            Add Bill
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