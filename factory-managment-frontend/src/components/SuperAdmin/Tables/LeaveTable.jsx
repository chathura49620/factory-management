import React, { Component } from "react";
const LeaveTable = ({ filteredItems, onDelete}) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr className="table-secondary">
          <th scope="col">Ref No</th>
          <th scope="col">Reason for leave</th>
          <th scope="col">Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
    <tbody>
        {
          filteredItems.map(leave => (

      <tr key={leave._id}>
        <td>{leave.refno}</td>
        <td>{leave.reasonforleave}</td>
        <td>{leave.date}</td>
        <td>
            <button class="btn btn-success">Edit</button>
            <button class="btn btn-danger" onClick={() => onDelete(leave)}>Delete</button>
        </td>

      </tr>              
            
          ))
        }


     
    </tbody>
    </table>
  );
};

export default LeaveTable;
