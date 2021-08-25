import React, { Component } from "react"; 
import {EditEmployeeModal} from '../Modals/EditEmployeeModal';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import swal from 'sweetalert';
import { ToastContainer, toast, Zoom, Bounce, Flip } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

toast.success("Welcome to your leave requests.", {
  position: toast.POSITION.TOP_RIGHT,
  draggable: true,
  transition: Flip,
  autoClose: 5000,
  closeOnClick: true
});


export class LeaveTable extends Component{
  constructor(props) {
    super(props);
    this.state = { editModelShow: false }
  }

  deleteleave(id){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch('http://localhost:5000/api/leave-details', {
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
            title: "Employee Leave Deleted Succesfully",
            icon: "success",
            button: "Done",
          }); 
      });
      } else {
        swal("Record was not submitted.");
      }
    });
  }
  render(){
    const {id, refno, reasonforleave, date } = this.state;
    let EditModelClose = () => this.setState({ editModalShow: false })
  return (
    <React.Fragment>

      <ToastContainer draggable={false} transition={Zoom} autoClose={8000} newestOnTop />
       <ButtonToolbar>
                  <EditEmployeeModal
                      show={this.state.editModelShow}
                      onHide={EditModelClose}
                      empleave= {this.state.empLeave}
                      id={id}
                      refno={refno}
                      reasonforleave={reasonforleave}
                      date={date}
                    />
                    </ButtonToolbar>
<table className="table table-bordered" style={{overflow: "hidden"}}>
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" }}>
          <th scope="col">Ref No</th>
          <th scope="col">Reason for leave</th>
          <th scope="col">Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
    <tbody style={{overflow: "hidden"}}>
        {
          this.props.filteredItems.map(leave => (

      <tr key={leave._id}>
        <td>{leave.refno}</td>
        <td>{leave.reasonforleave}</td>
        <td>{leave.date}</td>
        <td>
            <button 
                    style={{ backgroundColor: "#7121AD", color: "white" }} className="btn" 
                    onClick={() => this.setState({ editModelShow: true, id: leave._id, refno: leave.refno, reasonforleave: leave.reasonforleave, date: leave.date })} >Edit</button>
            <button style={{ backgroundColor: "#BA0D32 ", color: "white" }} className="btn" 
            onClick={() => this.deleteleave(leave._id)}>Delete</button>
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

export default LeaveTable;
