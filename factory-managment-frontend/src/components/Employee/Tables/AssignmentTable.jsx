import React, { Component } from "react"; 
import { EditAssignmentModal } from '../Modals/EditAssignmentModal';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import swal from 'sweetalert';
import { ToastContainer, toast, Zoom, Bounce, Flip } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

toast.success("Welcome to your assignments.", {
  position: toast.POSITION.TOP_RIGHT,
  draggable: true,
  transition: Flip,
  autoClose: 5000,
  closeOnClick: true
});


export class AssignmentTable extends Component{
  constructor(props) {
    super(props);
    this.state = { editModelShow: false }
  }

  deleteassignment(id){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch('http://localhost:5000/api/assignment-details', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': 'chathura'
            },
            body: JSON.stringify({
                id: id
               
            })
        }).then(res => res.json())
        .then((result) => {
          swal({
            title: "Employee assignment Deleted Succesfully",
            icon: "success",
            button: "Done",
          }); 
      });
      } else {
        swal("Assignment was not submitted.");
      }
    });
  }
  render(){
    const {id, documentid, supervisor, description, status } = this.state;
    let EditModelClose = () => this.setState({ editModalShow: false })
  return (
    <React.Fragment>

      <ToastContainer draggable={false} transition={Zoom} autoClose={8000} newestOnTop />
       <ButtonToolbar>
                  <EditAssignmentModal
                      show={this.state.editModelShow}
                      onHide={EditModelClose}
                      empass= {this.state.empass}
                      id={id}
                      documentid={documentid}
                      supervisor={supervisor}
                      description={description}
                      status={status}
                    
                    />
                    </ButtonToolbar>
<table className="table table-bordered" style={{overflow: "hidden"}}>
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" }}>
          <th scope="col">Document ID</th>
          <th scope="col">Supervisor</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
    <tbody style={{overflow: "hidden"}}>
        {
          this.props.filteredItems.map(assignment => (

      <tr key={assignment._id}>
        <td>{assignment.documentid}</td>
        <td>{assignment.supervisor}</td>
        <td>{assignment.description}</td>
        <td>{assignment.status}</td>
        <td>
            <button 
                    style={{ backgroundColor: "#7121AD", color: "white" }} className="btn" 
                    onClick={() => this.setState({ editModelShow: true, id: assignment._id, documentid: assignment.documentid, supervisor: assignment.supervisor, description: assignment.description, status : assignment.status })} >Edit</button>
            <button 
                    style={{ backgroundColor: "#BA0D32 ", color: "white" }} className="btn" 
                    onClick={() => this.deleteassignment(assignment._id)}>Delete</button>
        </td>

      </tr>              
            
          ))
        }


     
    </tbody>
    </table>

    </React.Fragment>
  );
      }
};

export default AssignmentTable;
