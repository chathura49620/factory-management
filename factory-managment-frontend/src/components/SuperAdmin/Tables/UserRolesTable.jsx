import React, { Component } from "react";
const UserRolesTable = ({ filteredItems}) => {
  return (
    <table className="table table-bordered table-sm m-2" style={{width:"1000px"}}>
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" } }>
          <th scope="col">Id</th>
          <th scope="col">User Role</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {filteredItems.map((i) => (
          <tr
            key={i._id}
           
          >
            <td>{i.userRoleNo}</td>
            <td>{i.userRole}</td>
            <td>{i.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserRolesTable;
