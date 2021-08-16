import React, { Component } from "react";

const Table = ({ filteredItems, onItemDelete }) => {
  return (
    <table className="table table-bordered table-sm m-2">
      <thead>
        <tr className="table-secondary">
          <th scope="col">Item Code</th>
          <th scope="col">Item Type</th>
          <th scope="col">Category</th>
          <th scope="col">Quantity</th>
          <th scope="col">Receive date</th>
          <th scope="col">Handle</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {filteredItems.map((i) => (
          <tr
            key={i._id}
            className={
              i.iType === "Material" ? "table-success" : "table-primary"
            }
          >
            <td>{i.iCode}</td>
            <td>{i.iType}</td>
            <td>{i.iCategory}</td>
            <td>1</td>
            <td>{i.iAddedDate}</td>
            <td>
              <button
                onClick={() => onItemDelete(i)}
                className="btn btn-success btn-sm"
              >
                Delete
              </button>
            </td>
            <td>
              <button className="btn btn-success btn-sm">Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
