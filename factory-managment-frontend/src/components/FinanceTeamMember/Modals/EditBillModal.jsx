import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import swal from 'sweetalert';
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class EditBillModal extends Component {
    constructor(props) {
        super(props);
        this.state = { snackbaropen: false, snackbarmsg: '',  BillType:[]};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios
          .get("http://localhost:5000/api/bill-type")
          .then((result) => {
            const BillType = result.data;
    
            this.setState({ BillType: BillType });
          })
          .catch((err) => console.log(err.message));
      }

    handleSubmit(event, props) {
        event.preventDefault();
        fetch('http://localhost:5000/api/bill-type/', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': 'chathura'
            },
            body: JSON.stringify({
                id: event.target.id.value,
                billNo: event.target.billNo.value,
                billType: event.target.billType.value,
                amount: event.target.amount.value,
                billDate: event.target.billDate.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                swal({
                    title: "Bill Type Updated Succesfully",
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
                            Edit Bill
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="id">
                                        <Form.Label>ID</Form.Label>
                                        <Form.Control type="text" name="id" required disabled defaultValue={this.props.id} hidden/>
                                    </Form.Group>

                                    <Form.Group controlId="name">
                                        <Form.Label>Bill No</Form.Label>
                                        <Form.Control type="text" name="billNo" required placeholder="Bill No"  defaultValue={this.props.billNo}/>
                                          <div style={{background:"#f8d7da"}}>{this.state.CategoryNameError}</div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Bill Type</Form.Label>
                                        <Form.Control as="select" required name="billType" defaultValue={this.props.billType}>
                                        {this.state.BillType.map((i) => (
                                            <option key={i._id}
                                                    >{i.billType}</option>
                                        ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="name">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control type="text" name="amount" required placeholder="Amount"  defaultValue={this.props.amount}/>
                                          <div style={{background:"#f8d7da"}}>{this.state.CategoryNameError}</div>
                                    </Form.Group>
                                    <Form.Group controlId="startDate">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="date" name="billDate" required placeholder="Bill Date" defaultValue={this.props.billDate}/>
                                        <div style={{background:"#f8d7da"}}>{this.state.startDate}</div>
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group>
                                        <Button style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                                            Edit Bill
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