import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import swal from 'sweetalert';
import { EditCategoryModal } from '../Modals/EditCategoryModal';

export class CategoriesTable extends Component {
  constructor(props) {
    super(props);
    this.state = { cate: [], editModalShow: false }
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
        fetch('http://localhost:5000/api/categories', {
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
            title: "Category Deleted Succesfully",
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
    const {id, name, status, version } = this.state;
    let EditModelClose = () => this.setState({ editModalShow: false })
  return (
    <div>
       <ButtonToolbar>

        <EditCategoryModal
            show={this.state.editModalShow}
            onHide={EditModelClose}
            id={id}
            name={name}
            status={status}
        />
        </ButtonToolbar>
    <table className="table table-bordered table-sm m-2" style={{width:"1000px"}}>
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" } }>
          <th scope="col">Id</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {this.props.filteredItems.map((i) => (
          <tr
            key={i._id}
            
          >
            <td>{i.userRoleNo}</td>
            <td>{i.categoryName}</td>
            <td><button 
              className="btn-sm"
              style={{ backgroundColor: "#7121AD", color: "white", marginRight:"4px" }}
            onClick={() => this.setState({ editModalShow: true, id: i._id, name: i.categoryName, status: i.status })}
            >Edit</button> 
            <button 
            className="btn-sm"
            style={{ backgroundColor: "#BA0D32 ", color: "white" }} 
            onClick={() => this.deleteCat(i._id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
     
    </table>
    </div>
  );
};
}


