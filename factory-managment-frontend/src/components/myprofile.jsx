import React, { Component } from "react";
import ProfileTable from "./common/profileTable";

class MyProfile extends Component {
  state = {
    userObjectId: "611a36dacccc2691bf88ad1e",
  };

  componentDidMount() {
    //get user details from database and set them to the state and tableprofile
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <ProfileTable />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyProfile;
