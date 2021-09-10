import React, { Component } from "react";

const ItemRequestTable = ({ filteredItems, onItemDelete }) => {
  return (
    <table
      className="table table-bordered table-sm"
      style={{ width: "1200px" }}
    >
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" }}>
          <th scope="col">Item Code</th>
          <th scope="col">Item Type</th>
          <th scope="col">Category</th>
          <th scope="col">Quantity</th>
          <th scope="col">Request date</th>
          <th scope="col">Status</th>
          <th scope="col">Handle</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>

      <tbody>
        {filteredItems.map((request) => (
          <tr key={request._id}>
            <td>{request.reqCode}</td>
            <td
              className={
                request.reqType === "Material"
                  ? "table-success"
                  : "table-primary"
              }
              style={{
                border:
                  request.reqType === "Material"
                    ? "1px solid black"
                    : "1px solid black",
              }}
            >
              {request.reqType}
            </td>
            <td>{request.reqCategory}</td>
            <td>{request.reqQuantity}</td>
            <td>{request.reqDate}</td>
            <td>{request.reqStatus}</td>

            <td>
              <button
                className="btn-sm"
                style={{ backgroundColor: "#7121AD", color: "white" }}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                onClick={() => onItemDelete(request)}
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

export default ItemRequestTable;
