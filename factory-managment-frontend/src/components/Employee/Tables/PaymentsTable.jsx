import React, { Component } from "react"; 
import { EditPaymentsModal } from '../Modals/EditPaymentsModal';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import swal from 'sweetalert';
import { ToastContainer, toast, Zoom, Bounce, Flip } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// toast.success("Welcome to your leave requests.", {
//   position: toast.POSITION.TOP_RIGHT,
//   draggable: true,
//   transition: Flip,
//   autoClose: 5000,
//   closeOnClick: true
// });


export class PaymentsTable extends Component{
  constructor(props) {
    super(props);
    this.state = { editModelShow: false }
  }

  deletepayments(id){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch('http://localhost:5000/api/payment-details/', {
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
    const {id, name, bankname, accountnumber, branch } = this.state;
    let EditModelClose = () => this.setState({ editModalShow: false })
  return (
    <React.Fragment>

      <ToastContainer draggable={false} transition={Zoom} autoClose={8000} newestOnTop />
       <ButtonToolbar>
                  <EditPaymentsModal
                      show={this.state.editModelShow}
                      onHide={EditModelClose}
                      empPayments= {this.state.empPayments}
                      id={id}
                      name={name}
                      bankname={bankname}
                      accountnumber={accountnumber}
                      branch={branch}
                    />
                    </ButtonToolbar>
<table className="table table-bordered" style={{overflow: "hidden"}}>
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" }}>
          <th scope="col">Full Name</th>
          <th scope="col">Name of Bank</th>
          <th scope="col">Account Number</th>
          <th scope="col">Branch</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
    <tbody style={{overflow: "hidden"}}>
        {
          this.props.filteredItems.map(payments => (

      <tr key={payments._id}>
        <td>{payments.name}</td>
        <td>{payments.bankname}</td>
        <td>{payments.accountnumber}</td>
        <td>{payments.branch}</td>
        <td>
            <button 
                    style={{ backgroundColor: "#7121AD", color: "white" }} className="btn" 
                    onClick={() => this.setState({ editModelShow: true, id: payments._id, name: payments.name, bankname: payments.bankname, accountnumber: payments.accountnumber, branch: payments.branch })} >Edit</button>
            <button 
                    style={{ backgroundColor: "#BA0D32 ", color: "white" }} className="btn" 
                    onClick={() => this.deletepayments(payments._id)}>Delete</button>

            
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

export default PaymentsTable;
