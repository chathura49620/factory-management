import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import swal from 'sweetalert';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class EditEmployeeModal extends Component {
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

        fetch('http://localhost:5000/api/leave-details/', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': 'chathura'
            },
            body: JSON.stringify({
                id: event.target.id.value,
                refno: event.target.refno.value,
                reasonforleave: event.target.reasonforleave.value,
                date: event.target.date.value,
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
                                    <Form.Label>Reference No</Form.Label>  
                                    <Form.Control  value= {this.state.refno} type="text" name="refno" required placeholder="Reference Number" defaultValue={this.props.refno} />
                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.Label>Reason for Leave</Form.Label>
                                    <Form.Control  value= {this.state.reasonforleave} type="text" name="reasonforleave" required placeholder="Reason for Leave" defaultValue={this.props.reasonforleave} />
                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control  value= {this.state.date} type="text" name="date" required placeholder="Date" defaultValue={this.props.date} />
                                </Form.Group>

                                <Form.Group>
                                    <Button style={{ backgroundColor: "#7121AD", color: "white" }} className="table table-bordered table-sm my-2" type="submit" >
                                        Edit Leave Request
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