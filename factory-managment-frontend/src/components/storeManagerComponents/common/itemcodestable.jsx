import React, { Component } from "react";

const ItemCodeTable = ({ materialCodeObs }) => {
  return (
    <table className="table table-bordered table-sm m-2">
      <thead>
        <tr className="table-secondary">
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
