import React, { Component } from "react";

const Table = ({ filteredItems, onItemDelete, onSet }) => {
  return (
    <table className="table table-bordered table-sm">
      <thead>
        <tr style={{ backgroundColor: "#2461A7", color: "white" }}>
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
                className="btn-sm"
                style={{ backgroundColor: "#2461A7", color: "white" }}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                onClick={() => onSet(i)}
                className="btn-sm"
                style={{ backgroundColor: "#BA0D32 ", color: "white" }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
