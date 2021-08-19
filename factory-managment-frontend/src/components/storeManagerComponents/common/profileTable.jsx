import React, { useState } from "react";

const ProfileTable = ({ userOb, onSetPopup }) => {
  return (
    <table className="table table-bordered table-sm m-2">
      <thead>
        <tr style={{ backgroundColor: "#2461A7", color: "white" }}>
          <th scope="col" colSpan="2">
            User Profile
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Full name</td>
          <td>{userOb.FullName}</td>
        </tr>
        <tr>
          <td>Date of birth</td>
          <td>{userOb.BirthDate}</td>
        </tr>
        <tr>
          <td>Email address</td>
          <td>{userOb.Email}</td>
        </tr>
        <tr>
          <td>Contact number</td>
          <td>{userOb.Contact}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{userOb.Age}</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>{userOb.Gender}</td>
        </tr>

        <tr>
          <td>Address</td>
          <td>{userOb.Address}</td>
        </tr>

        <tr>
          <td>Designation</td>
          <td>{userOb.Designation}</td>
        </tr>

        <tr>
          <td>Bank Name</td>
          <td>{userOb.BankName}</td>
        </tr>

        <tr>
          <td>Account Number</td>
          <td>{userOb.AccountNumber}</td>
        </tr>

        <tr>
          <td>Branch</td>
          <td>{userOb.Branch}</td>
        </tr>

        <tr>
          <td>Branch code</td>
          <td>{userOb.BranchCode}</td>
        </tr>

        <tr>
          <td>Number of Family members</td>
          <td>{userOb.NumberOfFamilyMembers}</td>
        </tr>

        <tr>
          <td scope="col">Actions</td>
          <td>
            <button
              onClick={() => onSetPopup()}
              className=" btn-sm mx-2"
              style={{ backgroundColor: "#2461A7", color: "white" }}
            >
              Edit Profile
            </button>
            <button
              className="btn-sm"
              style={{ backgroundColor: "#BA0D32 ", color: "white" }}
            >
              Delete Profile
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProfileTable;
