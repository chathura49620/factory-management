import React, { Component } from "react";
import ProfileTable from "../../components/storeManager/tables/profileTable";
import axios from "axios";
import FormPopup from "../../components/storeManager/reusables/formpopup";
import FormProfileEdit from "../../components/storeManager/forms/formprofileedit";
import userPic from "../../pages/assets/pem56.png";
import NewDeleteProfileFeedback from "../../components/storeManager/forms/newdeleteprofilefeedback";
import swal from "sweetalert";

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
    openReasonDeletePopup: false,
    deleteUserName: "",
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
    this.setState({ user: jsonOb, openPopup: false });
  };

  setReasonDeleteOpenPopup = (name, id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        this.setState({
          openReasonDeletePopup: true,
          deleteUserName: name,
        });
      } //end of if
    });
  };

  closeOpenReasonDeletePopup = () => {
    this.setState({ openReasonDeletePopup: false });
  };

  closeOpenReasonDeletePopupAndLOGOut = () => {
    this.setState({ openReasonDeletePopup: false });
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ marginLeft: "120px" }}>
          <div className="row">
            <div className="col-2"></div>

            <div className="col">
              <h2 className="mt-3">My Profile</h2>
              <ProfileTable
                userOb={this.state.user}
                onSetPopup={this.setOpenPopup}
                onSetReasonDeletePopup={this.setReasonDeleteOpenPopup}
              />
            </div>
          </div>
          <FormPopup
            openPopup={this.state.openPopup}
            onClose={this.closeOpenPopup}
            title="Update My Profile"
          >
            <FormProfileEdit
              userOb={this.state.user}
              onSetAndClose={this.closePopAndSetState}
            />
          </FormPopup>

          <FormPopup
            openPopup={this.state.openReasonDeletePopup}
            onClose={this.closeOpenReasonDeletePopup}
            title="Reason for delete"
          >
            <NewDeleteProfileFeedback
              name={this.state.deleteUserName}
              logoutAndClose={this.closeOpenReasonDeletePopupAndLOGOut}
            />
          </FormPopup>
        </div>
      </React.Fragment>
    );
  }
}

export default MyProfile;
