import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import swal from 'sweetalert';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class EditPaymentsModal extends Component {
    constructor(props) {
        super(props);
        this.state = { snackbaropen: false, snackbarmsg: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    handleSubmit(event, props) {
        event.preventDefault();
        //alert(event.target.name.value);

        fetch('http://localhost:5000/api/payment-details/', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': 'chathura'
            },
            body: JSON.stringify({
                id: event.target.id.value,
                name: event.target.name.value,
                bankname: event.target.bankname.value,
                accountnumber: event.target.accountnumber.value,
                branch: event.target.branch.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                swal({
                    title: "Employee Leave Updated Succesfully",
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
                            Edit Bank Details
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>      
                                <Form.Group controlId="id">
                                    <Form.Label>Bank ID</Form.Label>
                                    <Form.Control type="text" name="id" required disabled  defaultValue={this.props.id}/>
                                </Form.Group>

                                <Form.Group controlId="name">
                                    <Form.Label>Full Name</Form.Label>  
                                    <Form.Control  value= {this.state.name} type="text" name="name" required placeholder="Your Full Name" defaultValue={this.props.name} />
                                </Form.Group>


                                <Form.Group controlId="name">
                                    <Form.Label>Name of Bank</Form.Label>
                                    <Form.Control  value= {this.state.bankname} type="text" name="bankname" required placeholder="Eg. Commercial Bank" defaultValue={this.props.bankname} />
                                </Form.Group>


                                <Form.Group controlId="name">
                                    <Form.Label>Account Number</Form.Label>
                                    <Form.Control  value= {this.state.accountnumber} type="text" name="accountnumber" required placeholder="Account Number" defaultValue={this.props.accountnumber} />
                                </Form.Group>

                                <Form.Group controlId="name">
                                    <Form.Label>Bank Branch</Form.Label>
                                    <Form.Control  value= {this.state.branch} type="text" name="branch" required placeholder="Bank Branch" defaultValue={this.props.branch} />
                                </Form.Group>

                                <Form.Group>
                                    <Button style={{ backgroundColor: "#7121AD", color: "white" }} className="table table-bordered table-sm my-2" type="submit" >
                                        Edit Bank Details
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