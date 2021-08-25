import React, { Component } from "react";


export class RejectUsersTable extends Component {

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
          </tr>
        ))}
      </tbody>
    </table>
  );
  }
};

export default RejectUsersTable;
