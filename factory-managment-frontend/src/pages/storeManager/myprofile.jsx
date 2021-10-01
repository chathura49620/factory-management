import React, { Component } from "react";
import ProfileTable from "../../components/storeManager/tables/profileTable";
import axios from "axios";
import FormPopup from "../../components/storeManager/reusables/formpopup";
import FormProfileEdit from "../../components/storeManager/forms/formprofileedit";
import userPic from "../../pages/assets/pem56.png";

class MyProfile extends Component {
  state = {
    userObjectId: "611a4e2e4710cdbb4ee14fb2",

    user: {
      _id: "",
      FullName: "",
      BirthDate: "",
      Email: "",
      Contact: "",
      Age: "",
      Gender: "",
      Address: "",
      Designation: "",
      BankName: "",
      AccountNumber: "",
      Branch: "",
      BranchCode: "", 
      NumberOfFamilyMembers: "",
    },

    openPopup: false,
  };

  componentDidMount() {
    //get user details from database and set them to the state and tableprofile
    axios
      .get("http://localhost:5000/users/" + this.state.userObjectId)
      .then((result) => {
        const user = result.data;

        const id = user._id;
        const fName = user.fullName;
        const bDate = user.dob;
        const email = user.email;
        const contact = user.contact;
        const age = user.age;
        const gender = user.gender;
        const address = user.address;
        const designation = user.designation;
        const bName = user.bankName;
        const accountNumber = user.accountNumber;
        const branch = user.branch;
        const branchCode = user.branchCode;
        const numberOfFamily = user.numberOfFamilyMembers;

        const ob = {
          _id: id,
          FullName: fName,
          BirthDate: bDate,
          Email: email,
          Contact: contact,
          Age: age,
          Gender: gender,
          Address: address,
          Designation: designation,
          BankName: bName,
          AccountNumber: accountNumber,
          Branch: branch,
          BranchCode: branchCode,
          NumberOfFamilyMembers: numberOfFamily,
        };

        console.log(user);
        this.setState({ user: ob });
      });
  }

  setOpenPopup = () => {
    this.setState({ openPopup: true });
  };

  closeOpenPopup = () => {
    this.setState({ openPopup: false });
  };

  closePopAndSetState = (jsonOb) => {
    //console.log("close and set", jsonOb);
    this.setState({ user: jsonOb, openPopup: false });
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ marginLeft: "120px" }}>
          <div className="row">
            <div className="col-2"></div>

            <div className="col">
              <ProfileTable
                userOb={this.state.user}
                onSetPopup={this.setOpenPopup}
              />
            </div>
          </div>
          <FormPopup
            openPopup={this.state.openPopup}
            onClose={this.closeOpenPopup}
            title="Edit My Profile"
          >
            <FormProfileEdit
              userOb={this.state.user}
              onSetAndClose={this.closePopAndSetState}
            />
          </FormPopup>
        </div>
      </React.Fragment>
    );
  }
}

export default MyProfile;
