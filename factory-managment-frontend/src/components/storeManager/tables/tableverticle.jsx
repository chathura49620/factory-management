import React, { Component } from "react";

const TableVertilcle = ({
  records,
  handleDelete,
  onSet,
  onSetPopup,
  onReport,
}) => {
  return (
    <div>
      {records.map((r) => (
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h2>Item record</h2>
            <table
              key={r._id}
              className="table table-bordered table-sm"
              style={{ width: "1000px" }}
            >
              <tbody key={r._id}>
                <tr style={{ backgroundColor: "#7121AD", color: "white" }}>
                  <th scope="col">Record</th>
                  <th scope="col">details</th>
                </tr>

                <tr>
                  <td style={{ fontWeight: "bold" }}>Item Code</td>
                  <td>{r.iCode}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Type</td>
                  <td>{r.iType}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Category</td>
                  <td>{r.iCategory}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>quantity</td>
                  <td>{r.iQuantity}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Supplier Name</td>
                  <td>{r.iSupplier}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Received date</td>
                  <td>{r.iAddedDate}</td>
                </tr>

                <tr>
                  <th scope="col" style={{ fontWeight: "bold" }}>
                    Actions
                  </th>
                  <td>
                    <button
                      style={{ backgroundColor: "#7121AD", color: "white" }}
                      onClick={() => onSetPopup(r._id)}
                      className="btn-sm mx-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(r)}
                      style={{ backgroundColor: "#dc3545 ", color: "white" }}
                      className="btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={() => onReport(r)} className="btn btn-success">
              Generate Report
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableVertilcle;
