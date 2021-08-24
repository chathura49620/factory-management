import React, { Component } from "react";


export class UserListTable  extends Component {

  constructor(props) {
    super(props);
    this.state = { cate: [], editModalShow: false }
  }

  render(){
  return (
    <table className="table table-bordered table-sm m-2">
      <thead>
        <tr className="table-secondary">
          <th scope="col">Id</th>
          <th scope="col">User Name</th>
          <th scope="col">Email</th>
          <th scope="col">User Role</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {this.props.filteredItems.map((i) => (
          <tr
            key={i._id}
            className={
              "table-succes table-primary"
            }
          >
            <td></td>
            <td>{i.fullName}</td>
            <td>{i.email}</td> 
            <td>{i.userRole}</td>
            <td><button 
            className="btn btn-success btn-sm"
            >Approve</button> 
            <button 
            className="btn btn-warning btn-sm" 
            >Reject</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  }
};

export default UserListTable;
