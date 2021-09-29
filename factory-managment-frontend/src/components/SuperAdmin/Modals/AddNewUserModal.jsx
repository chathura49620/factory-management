import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';


export default class AddNewUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snackbaropen: false,  
            snackbarmsg: '',
            userRoles:[],
            CategoryNameError:''
             
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    componentDidMount() { 
        axios
          .get("http://localhost:5000/api/user-roles")
          .then((result) => {
            const userRoles = result.data;
    
            this.setState({ userRoles: userRoles });
          })
          .catch((err) => console.log(err.message));
      }

    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate();
        // if(isValid){
            fetch('http://localhost:5000/api/user', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'username': 'chathura'
                },
                body: JSON.stringify({
                    fullName: event.target.fullName.value,
                    email: event.target.email.value,
                    userRole: event.target.userRole.value,
                    password: event.target.password.value,
                    status: event.target.status.value

                })
            })
                .then(res => res.json())
                .then((result) => {
                    swal({
                        title: "User Added Succesfully",
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
                            Add User
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="fullName"  placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group controlId="name">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" name="email"  placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>User Role</Form.Label>
                                        <Form.Control as="select" required name="userRole">
                                           {this.state.userRoles.map((i) => (
                                            <option key={i._id}
                                                    >{i.userRole}</option>
                                        ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control as="select" required name="status">
                                            <option selected>ACTIVE</option>
                                            <option>INACTIVE</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="name">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="text" name="password"  placeholder="Password" />
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group>
                                        <Button  style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                                            Add User
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