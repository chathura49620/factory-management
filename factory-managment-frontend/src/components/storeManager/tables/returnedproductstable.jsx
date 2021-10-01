import React, { Component } from "react";

const ReturnedProductsTable = ({
  filteredItems,
  onItemDelete,
  onSet,
  onSetPopup,
}) => {
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
          <th scope="col">Buyer</th>
          <th scope="col">Returned date</th>
          <th scope="col">Reason</th>
          <th scope="col">Handle</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>

      <tbody>
        {filteredItems.map((r) => (
          <tr key={r._id}>
            <td>{r.rCode}</td>
            <td
              className={
                r.rType === "Material" ? "table-success" : "table-primary"
              }
              style={{
                border:
                  r.rType === "Material"
                    ? "1px solid black"
                    : "1px solid black",
              }}
            >
              {r.rType}
            </td>
            <td>{r.rCategory}</td>
            <td>{r.rQuantity}</td>
            <td>{r.rBuyer}</td>
            <td>{r.rDate}</td>
            <td>{r.rReason}</td>
            <td>
              <button
                className="btn-sm"
                onClick={() => onSetPopup(r._id)}
                style={{ backgroundColor: "#7121AD", color: "white" }}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                onClick={() => onItemDelete(r)}
                className="btn-sm"
                style={{ backgroundColor: "#dc3545 ", color: "white" }}
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

export default ReturnedProductsTable;
