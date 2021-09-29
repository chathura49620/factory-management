import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import UserListTable from "../../components/SuperAdmin/Tables/UserListTable";
import AddNewUserModal from "../../components/SuperAdmin/Modals/AddNewUserModal";
import RejectUsersTable from "../../components/SuperAdmin/Tables/RejectUsersTable";

class UserList extends Component {
  state = {
    Users: [],
    addModalShow: false,
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
    let AddModelClose = () => this.setState({ addModalShow: false })
    
  return (
    <React.Fragment>
         <h1 className="mb-5">User Lists</h1>
         <ButtonToolbar>
                    <Button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                        onClick={() => this.setState({ addModalShow: true })}
                    >Add User
                    </Button>
                    <AddNewUserModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                    />
          </ButtonToolbar>
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
            <h1>User List</h1>
              <UserListTable filteredItems={this.state.Users} />
            </div>
          </div>
      </React.Fragment>
  );
  }
};

export default UserList;
