import React, { Component } from "react";

const Table = ({
  filteredItems,
  onItemDelete,
  onSet,
  onSetPopup,
  onSetWastedPop,
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
          <th scope="col">Receive date</th>
          <th scope="col">Handle</th>
          <th scope="col">Handle</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {filteredItems.map((i) => (
          <tr key={i._id}>
            <td>{i.iCode}</td>
            <td
              className={
                i.iType === "Material" ? "table-success" : "table-primary"
              }
              style={{
                border:
                  i.iType === "Material"
                    ? "1px solid black"
                    : "1px solid black",
              }}
            >
              {i.iType}
            </td>
            <td>{i.iCategory}</td>
            <td>1</td>
            <td>{i.iAddedDate}</td>
            <td>
              <button
                className="btn-sm"
                onClick={() => onSetPopup(i._id)}
                style={{ backgroundColor: "#7121AD", color: "white" }}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                onClick={() => onItemDelete(i)}
                className="btn-sm"
                style={{ backgroundColor: "#dc3545 ", color: "white" }}
              >
                Delete
              </button>
            </td>

            <td>
              <button
                onClick={() => onSetWastedPop(i._id)}
                className="btn-sm"
                style={{ backgroundColor: "#dc3545 ", color: "white" }}
              >
                Wasted
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
