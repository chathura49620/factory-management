import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';



export class AddAssignmentModal extends Component {
    constructor(props) {

        console.log("Run");
        super(props);
        this.state = { snackbaropen: false, snackbarmsg: '', AssignmentError: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    handleSubmit(event) {

        event.preventDefault();
        const isValid = this.validate(event);
        if(isValid){
        alert(event.target.name.value);
        fetch('http://localhost:5000/api/assignment-details/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
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
                alert("Success!");

                window.location.reload();
                this.setState({
                    AssignmentError:'',
                })


                console.log("result" , result)
            }, (error) => {
                this.setState({ snackbaropen: true, snackbarmsg: 'Failed' })
            }

            )
        }
    }


    validate(event){
        let AssignmentError = "";

        if(!event.target.documentid.value){
            AssignmentError = "This Cannot Be Blank."
        }

        if(!event.target.supervisor.value){
            AssignmentError = "This Cannot Be Blank."
        }

        if(!event.target.description.value){
            AssignmentError = "This Cannot Be Blank."
        }

        if(!event.target.status.value){
            AssignmentError = "This Cannot Be Blank."
        }

        if(AssignmentError){
            this.setState({AssignmentError:AssignmentError})
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
                            Add an Assignment. 
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Document ID</Form.Label>
                                        <Form.Control type="text" name="documentid" placeholder="Enter a Document Number for reference." />
                                        <div style={{background:"#f8d7da"}}>{this.state.AssignmentError}</div>
                                    </Form.Group>


                                    <Form.Group controlId="name">
                                        <Form.Label>Supervisor name</Form.Label>
                                        <Form.Control type="text" name="supervisor" placeholder="Supervisor Name" />
                                        <div style={{background:"#f8d7da"}}>{this.state.AssignmentError}</div>
                                    </Form.Group>


                                    <Form.Group controlId="name">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" name="description" placeholder="Assignment Description..." />
                                        <div style={{background:"#f8d7da"}}>{this.state.AssignmentError}</div>
                                    </Form.Group>


                                    <Form.Group controlId="name">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control type="text" name="status" placeholder="Eg. Completed or Pending... " />
                                        <div style={{background:"#f8d7da"}}>{this.state.AssignmentError}</div>
                                    </Form.Group>
                                    
                                    <br></br>

                                    <Form.Group>
                                        <Button style={{ backgroundColor: "#7121AD", color: "white" }} className="btn"  type="submit" >
                                            Submit Assignment Request
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