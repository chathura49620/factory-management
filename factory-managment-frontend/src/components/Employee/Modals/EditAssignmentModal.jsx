import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import swal from 'sweetalert';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class EditAssignmentModal extends Component {
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

        fetch('http://localhost:5000/api/assignment-details/', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': 'chathura'
            },
            body: JSON.stringify({
                id: event.target.id.value,
                documentid: event.target.documentid.value,
                supervisor: event.target.supervisor.value,
                description: event.target.description.value,
                status: event.target.status.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                swal({
                    title: "Assignment Updated Succesfully",
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
                            Edit Category
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>      
                                <Form.Group controlId="id">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text" name="id" required disabled  defaultValue={this.props.id}/>
                                </Form.Group>

                                <Form.Group controlId="name">
                                    <Form.Label>Document ID</Form.Label>  
                                    <Form.Control  value= {this.state.documentid} type="text" name="documentid" required placeholder="Reference Number" defaultValue={this.props.documentid} />
                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.Label>Supervisor</Form.Label>
                                    <Form.Control  value= {this.state.supervisor} type="text" name="supervisor" required placeholder="Reason for Leave" defaultValue={this.props.supervisor} />
                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control  value= {this.state.description} type="text" name="description" required placeholder="Date" defaultValue={this.props.description} />
                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control  value= {this.state.status} type="text" name="status" required placeholder="Date" defaultValue={this.props.status} />
                                </Form.Group>

                                <Form.Group>
                                    <Button style={{ backgroundColor: "#7121AD", color: "white" }} className="table table-bordered table-sm my-2" type="submit" >
                                        Edit Assignment
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