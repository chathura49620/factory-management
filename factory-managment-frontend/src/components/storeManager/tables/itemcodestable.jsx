import React, { Component } from "react";

const ItemCodeTable = ({ materialCodeObs }) => {
  return (
    <table
      className="table table-bordered table-sm my-1"
      style={{ width: "550px" }}
    >
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" }}>
          <th>Name</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        {materialCodeObs.map((ob) => (
          <tr key={ob._id}>
            <td>{ob.materialName}</td>
            <td>{ob.materialCode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemCodeTable;
