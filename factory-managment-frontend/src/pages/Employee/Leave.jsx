import React, { Component } from "react";
import axios from "axios";
import { AddEmployeeModal } from "../../components/Employee/Modals/AddEmployeeModal";
import { EditEmployeeModal } from "../../components/Employee/Modals/EditEmployeeModal";
import {LeaveTable} from "../../components/Employee/Tables/LeaveTable";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { computeStyles } from "@popperjs/core";

class Leave extends Component {
  state = {
    Leave: [],
    addModalShow: false,
    editModelShow: false,
    empLeave:{}, 
    id: ""
  };

  componentDidMount()  {

    axios
      .get("http://localhost:5000/api/leave-details")
      .then((result) => {
        const Leave = result.data;
        console.log(Leave);

        this.setState({ Leave: Leave });
      })
      .catch((err) => console.log(err.message));
  }

setNewDetails = (leave) => {
  this.setState({addModalShow: true, empLeave: leave});
}

setEditPopup = (leave) => {

  console.log(leave);
  this.setState({editModelShow: true, empLeave: leave});

}

handleLeaveDelete = (leave) => {
  // console.log("Delete");
  const Leave = this.state.Leave.filter(l => l._id !== leave._id );
  this.setState({Leave:Leave});
}

  render(){
    let AddModelClose = () => this.setState({ addModalShow: false })
  return (
    <React.Fragment>

        <h1 className="mb-5">Leave Requests</h1>
        <ButtonToolbar>
                    <button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                    onClick={() => this.setState({ addModalShow: true })}
                    >Add Leave Request
                    </button>
                    <AddEmployeeModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                        
                    />
          </ButtonToolbar>
            <br></br><br></br>

        <div className="row">
          <div className="col-1"></div>
              <div className="col">
            <LeaveTable filteredItems={this.state.Leave}  />
          </div>
        </div>
      </React.Fragment>
  );
  }
};

export default Leave;