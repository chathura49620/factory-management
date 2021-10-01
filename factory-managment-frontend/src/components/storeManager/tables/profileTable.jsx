import React, { useState } from "react";
import userPic from "../../../pages/assets/pem56.png";

const ProfileTable = ({ userOb, onSetPopup, onSetReasonDeletePopup }) => {
  return (
    <React.Fragment>
      <table
        className="table table-bordered table-sm my-3"
        style={{ width: "1000px" }}
      >
        <thead></thead>

        <tbody>
          <tr>
            <td colSpan="2" style={{ textAlign: "center", fontSize: 20 }}>
              <img src={userPic} alt="" width="150" height="150" />
            </td>
          </tr>
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
            style={{ backgroundColor: "#dc3545 ", color: "white" }}
            onClick={() => onSetReasonDeletePopup(userOb.FullName, userOb._id)}
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
