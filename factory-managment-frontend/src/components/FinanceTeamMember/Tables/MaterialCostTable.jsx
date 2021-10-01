import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import swal from 'sweetalert';
import { EditMaterialCostBillModal } from '../Modals/EditMaterialCostBillModal';

export class MaterialCostTable extends Component {
  constructor(props) {
    super(props);
    this.state = { cate: [], editModalShow: false }
  }

  deleteBillType(id){
    swal({ 
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Recode!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch('http://localhost:5000/api/material-cost/', {
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
            title: "Material Bill Deleted Succesfully",
            icon: "success",
            button: "Done",
          }); 
          setTimeout(function() {
            window.location.reload(); 
          }.bind(this), 1500);
      });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  render() {
    const {id, matcode, billno , date , amount } = this.state;
    let EditModelClose = () => this.setState({ editModalShow: false })
  return (
    <div>
       <ButtonToolbar>

        <EditMaterialCostBillModal
            show={this.state.editModalShow}
            onHide={EditModelClose}
            id={id}
            matcode={matcode}
            billno={billno}
            date={date}
            amount={amount}
        />
        </ButtonToolbar>
    <table className="table table-bordered table-sm m-2" style={{width:"1000px"}}>
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" } }>
          <th scope="col">Id</th>
          <th scope="col">Material Code</th>
          <th scope="col">Bill No</th>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {this.props.filteredItems.map((i) => (
          <tr
            key={i._id}
            
          >
            <td>{}</td>
            <td>{i.matirialCode}</td>
            <td>{i.matirialBillNo}</td>
            <td>{i.date}</td>
            <td>{i.amount}</td>
            <td><button 
              className="btn-sm"
              style={{ backgroundColor: "#7121AD", color: "white", marginRight:"4px" }}
            onClick={() => this.setState({ editModalShow: true, id: i._id, matcode: i.matirialCode, billno: i.matirialBillNo, date:i.date, amount:i.amount })}
            >Edit</button> 
            <button 
            className="btn-sm"
            style={{ backgroundColor: "#BA0D32 ", color: "white" }} 
            onClick={() => this.deleteBillType(i._id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
     
    </table>
    </div>
  );
};
}
 