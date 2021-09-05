import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { Redirect } from 'react-router-dom';


export class AddEmployeeModal extends Component {
    constructor(props) {

        console.log("Run");
        super(props);
        this.state = { snackbaropen: false, snackbarmsg: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    


    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    handleSubmit(event) {

        event.preventDefault();
        alert(event.target.name.value);
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
                            Add a Leave Request 
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Reference Number</Form.Label>
                                        <Form.Control type="text" name="refno" required placeholder="Enter a reference ID" />
                                    </Form.Group>
                                    <Form.Group controlId="name">
                                        <Form.Label>Reason for leave</Form.Label>
                                        <Form.Control type="text" name="reasonforleave" required placeholder="Make your reason descriptive.." />
                                    </Form.Group>
                                    <Form.Group controlId="name">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="text" name="date" required placeholder="Enter a date or number of days..." />
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