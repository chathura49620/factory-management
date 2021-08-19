import React, { Component } from "react";

const MaterialCodeTable = ({ filteredItems}) => {
  
  return (
    <table className="table table-bordered table-sm m-2">
      <thead>
        <tr className="table-secondary">
          <th scope="col">Id</th>
          <th scope="col">Material Name</th>
          <th scope="col">Material Code</th>
          <th scope="col">Action</th>
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
            <td>1</td>
            <td>{i.materialName}</td>
            <td>{i.materialCode}</td>
            <td><button className="btn btn-success btn-sm">Edit</button> <button className="btn btn-warning btn-sm" >Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MaterialCodeTable;
