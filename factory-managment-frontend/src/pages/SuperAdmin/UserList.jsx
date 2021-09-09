import React, { Component } from "react";
import axios from "axios";
import UserListTable from "../../components/SuperAdmin/Tables/UserListTable";
import ApprovedUsersTable from "../../components/SuperAdmin/Tables/ApprovedUsersTable";
import RejectUsersTable from "../../components/SuperAdmin/Tables/RejectUsersTable";

class UserList extends Component {
  state = {
    Users: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/users")
      .then((result) => {
        const Users = result.data;

        this.setState({ Users: Users });
      })
      .catch((err) => console.log(err.message));
  }

  render(){
  return (
    <React.Fragment>
         <h1 className="mb-5">User Lists</h1>
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
          <h1>Pending Approve Users</h1>
            <UserListTable filteredItems={this.state.Users} />
          </div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col">
          <h1>Approved Users</h1>
            <ApprovedUsersTable filteredItems={this.state.Users} />
          </div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col">
          <h1>Rejected Users</h1>
            <RejectUsersTable filteredItems={this.state.Users} />
          </div>
        </div>
      </React.Fragment>
  );
  }
};

export default UserList;
