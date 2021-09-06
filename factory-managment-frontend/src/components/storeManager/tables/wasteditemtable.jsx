import React, { Component } from "react";

const WastedItemTable = ({
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
          <th scope="col">Supplier</th>
          <th scope="col">Wasted date</th>
          <th scope="col">Reason</th>
          <th scope="col">Handle</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>

      <tbody>
        {filteredItems.map((w) => (
          <tr key={w._id}>
            <td>{w.wCode}</td>
            <td
              className={
                w.wType === "Material" ? "table-success" : "table-primary"
              }
              style={{
                border:
                  w.wType === "Material"
                    ? "1px solid black"
                    : "1px solid black",
              }}
            >
              {w.wType}
            </td>
            <td>{w.wCategory}</td>
            <td>{w.wQuantity}</td>
            <td>{w.wSupplier}</td>
            <td>{w.wDate}</td>
            <td>{w.wReason}</td>
            <td>
              <button
                className="btn-sm"
                onClick={() => onSetPopup(w._id)}
                style={{ backgroundColor: "#7121AD", color: "white" }}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                onClick={() => onItemDelete(w)}
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

export default WastedItemTable;
