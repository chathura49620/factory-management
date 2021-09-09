import React, { Component } from "react";


export class UserListTable  extends Component {

  constructor(props) {
    super(props);
    this.state = { cate: [], editModalShow: false }
  }

  render(){
  return (
    <table className="table table-bordered table-sm m-2" style={{width:"1000px"}}>
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" } }>
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
           
          >
            <td></td>
            <td>{i.fullName}</td>
            <td>{i.email}</td> 
            <td>{i.userRole}</td>
            <td><button 
              className="btn-sm"
              style={{ backgroundColor: "#7121AD", color: "white", marginRight:"4px" }}
            >Approve</button> 
            <button 
             className="btn-sm"
             style={{ backgroundColor: "#BA0D32 ", color: "white" }} 
            >Reject</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  }
};

export default UserListTable;
