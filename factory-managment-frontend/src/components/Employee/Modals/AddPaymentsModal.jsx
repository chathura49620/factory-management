import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';



export class AddPaymentsModal extends Component {
    constructor(props) {

        console.log("Run");
        super(props);
        this.state = { snackbaropen: false, snackbarmsg: '', PaymentsError:''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    handleSubmit(event) {

        event.preventDefault();
        // alert(event.target.name.value);
        const isValid = this.validate(event);
        if(isValid){
        fetch('http://localhost:5000/api/payment-details/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                id: event.target.id.value,
                name: event.target.namecus.value,
                bankname: event.target.bankname.value,
                accountnumber: event.target.accountnumber.value,
                branch: event.target.branch.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert("Success!");

                window.location.reload();
                this.setState({
                    PaymentsError:'',
                })

                console.log("result" , result)
            }, (error) => {
                this.setState({ snackbaropen: true, snackbarmsg: 'Failed' })
            }

            )
        }
    }



    validate(event){
        let PaymentsError = "";

        if(!event.target.namecus.value){
            PaymentsError = "This Cannot Be Blank."
        }

        if(!event.target.bankname.value){
            PaymentsError = "This Cannot Be Blank."
        }

        if(!event.target.accountnumber.value){
            PaymentsError = "This Cannot Be Blank."
        }

        if(!event.target.branch.value){
            PaymentsError = "This Cannot Be Blank."
        }

        if(PaymentsError){
            this.setState({PaymentsError:PaymentsError})
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
                            Add your Bank Details 
                        </Modal.Title>
                    </Modal.Header>

                    <div class="alert alert-info" role="alert">
                            Note: Your bank details will be verified by the Finance Department, therefore please make sure to enter the correct information. 
                    </div>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="namecus" 
                                             
                                            placeholder="Your full name.." 
                                            className="form-field"/>

                                        <div style={{background:"#f8d7da"}}>{this.state.PaymentsError}</div>
                                    </Form.Group>

                                    <br></br>

                                    <Form.Group controlId="name">
                                        <Form.Label>Bank Name</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="bankname" 
                                             
                                            placeholder="Eg. Commercial Bank.." />

                                        <div style={{background:"#f8d7da"}}>{this.state.PaymentsError}</div>
                                    </Form.Group>

                                    <br></br>

                                    <Form.Group controlId="name">
                                        <Form.Label>Account Number</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="accountnumber" 
                                             
                                            placeholder="Account Number" />
                                            <div style={{background:"#f8d7da"}}>{this.state.PaymentsError}</div>
                                    </Form.Group>

                                    <br></br>

                                    <Form.Group controlId="name">
                                        <Form.Label>Account Branch</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="branch" 
                                             
                                            placeholder="Account Branch" />
                                            <div style={{background:"#f8d7da"}}>{this.state.PaymentsError}</div>
                                    </Form.Group>
                                    
                                    <br></br>

                                    <Form.Group>
                                        <Button 
                                            style={{ backgroundColor: "#7121AD", color: "white" }} 
                                            className="btn"  
                                            type="submit" >
                                                Add Bank Details
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