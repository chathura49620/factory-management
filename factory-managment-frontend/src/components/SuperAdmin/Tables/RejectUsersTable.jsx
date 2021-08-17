import React, { Component } from "react";
const RejectUsersTable = ({ filteredItems}) => {
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
        {filteredItems.map((i) => (
          <tr
            key={i._id}
            className={
              "table-succes table-primary"
            }
          >
            <td>{i.userRoleNo}</td>
            <td>{i.categoryName}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RejectUsersTable;
