import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import swal from 'sweetalert';
import { EditProductionRoundDetailsModal } from '../Modals/EditProductionRoundDetailsModal';

export class ProductonRoundTable extends Component {
  constructor(props) {
    super(props);
    this.state = {editModalShow: false }
  }

  deleteCat(id){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Recode!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch('http://localhost:5000/api/newProRound-details', {
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
            title: "New Production Round Deleted Succesfully",
            icon: "success",
            button: "Done",
          }); 
      });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  render() {
    // const {id, name, status, version } = this.state;
    // let EditModelClose = () => this.setState({ editModalShow: false })
  return (
    <div>
       {/* <ButtonToolbar>

        <EditProductionRoundDetailsModal
            show={this.state.editModalShow}
            onHide={EditModelClose}
            id={id}
            name={name}
            status={status}
        />
        </ButtonToolbar> */}
    <table className="table table-bordered table-sm m-2">
      <thead>
        <tr className="table-secondary">
          <th scope="col">Id</th>
          <th scope="col">Product Category</th>
          <th scope="col">Quntity</th>
          <th scope="col">Estimated Days</th>
          <th scope="col">Estimated Employees</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {this.props.productionRound.map((i) => (
          <tr
            key={i._id}
            className={
              "table-succes table-primary"
            }
          >
            <td>{i.productId}</td>
            <td>{i.productCategory}</td>
            <td>{i.quantity}</td>
            <td>{i.esDays}</td>
            <td>{i.esEmployees}</td>
            <td>{i.status}</td>
            <td><button 
            className="btn btn-success btn-sm"
            onClick={() => this.setState({ editModalShow: true, id: i._id, name: i.categoryName, status: i.status })}
            >Edit</button> 
            <button 
            className="btn btn-warning btn-sm" 
            onClick={() => this.deleteCat(i._id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
     
    </table>
    </div>
  );
};
}


