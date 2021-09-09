import React, { useState } from "react";

const ProfileTable = ({ userOb, onSetPopup }) => {
  return (
    <React.Fragment>
      <table className="table table-bordered table-sm my-2">
        <thead>
          <tr style={{ backgroundColor: "#7121AD", color: "white" }}>
            <th
              scope="col"
              colSpan="2"
              style={{ textAlign: "center", fontSize: 20 }}
            >
              User Profile
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={{ fontWeight: "bold" }}>Full name</td>
            <td>{userOb.FullName}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Date of birth</td>
            <td>{userOb.BirthDate}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Email address</td>
            <td>{userOb.Email}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Contact number</td>
            <td>{userOb.Contact}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Age</td>
            <td>{userOb.Age}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Gender</td>
            <td>{userOb.Gender}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Address</td>
            <td>{userOb.Address}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Designation</td>
            <td>{userOb.Designation}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Bank Name</td>
            <td>{userOb.BankName}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Account Number</td>
            <td>{userOb.AccountNumber}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Branch</td>
            <td>{userOb.Branch}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Branch code</td>
            <td>{userOb.BranchCode}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Number of Family members</td>
            <td>{userOb.NumberOfFamilyMembers}</td>
          </tr>
        </tbody>
      </table>

      <div className="row">
        <div className="col-4"></div>
        <div className="col">
          <button
            onClick={() => onSetPopup()}
            className=" btn m-1"
            style={{ backgroundColor: "#7121AD", color: "white" }}
          >
            Edit Profile
          </button>

          <button
            className="btn"
            style={{ backgroundColor: "#BA0D32 ", color: "white" }}
          >
            Delete Profile
          </button>
        </div>
        <div className="col-2"></div>
      </div>
    </React.Fragment>
  );
};

export default ProfileTable;
