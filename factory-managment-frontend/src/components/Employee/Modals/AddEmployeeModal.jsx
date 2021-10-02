import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';


export class AddEmployeeModal extends Component {
    constructor(props) {

        console.log("Run");
        super(props);
        this.state = { snackbaropen: false, snackbarmsg: '',LeaveError:'' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    handleSubmit(event) {

        event.preventDefault();
        const isValid = this.validate(event);
        if(isValid){
            fetch('http://localhost:5000/api/leave-details/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    
                },
                body: JSON.stringify({
                    refno: event.target.refno.value,
                    reasonforleave: event.target.reasonforleave.value,
                    date: event.target.date.value
                })
            })
                .then(res => res.json())
                .then((result) => {
                    alert("Success!");
                   
                        // window.location.reload();
                        this.setState({
                            LeaveError:'',
                        })
                    console.log("result" , this.state.LeaveError)
                }, (error) => {
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed' })
                }

                )
       }
    }

  validate(event){
        let LeaveError = "";

        if(!event.target.refno.value){
            LeaveError = "This Cannot Be Blank."
        }

        if(LeaveError){
            this.setState({LeaveError:LeaveError})
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
                            Add a Leave Request 
                        </Modal.Title>
                    </Modal.Header>

                    <div class="alert alert-info" role="alert">
                            Note: Your leave request will take a few days to be approved by the admin. 
                    </div>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Reference Number</Form.Label>
                                        <Form.Control type="text" name="refno"  placeholder="Enter a reference ID" className="form-field"/>
                                        <div style={{background:"#f8d7da"}}>{this.state.LeaveError}</div>
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group controlId="name">
                                        <Form.Label>Reason for leave</Form.Label>
                                        
                                        <Form.Control type="text" name="reasonforleave"  placeholder="Make your reason descriptive.." />
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group controlId="name">
                                        <Form.Label>Day Range</Form.Label>
                                        <Form.Control type="text" name="date"  placeholder="Enter a date or number of days..." />
                                    </Form.Group>
                                    
                                    <br></br>
                                    <Form.Group>
                                        <Button  style={{ backgroundColor: "#7121AD", color: "white" }} className="btn"  type="submit" >
                                            Submit Leave Request
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