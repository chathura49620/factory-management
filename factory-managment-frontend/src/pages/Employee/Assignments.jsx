import React, { Component } from "react";
import axios from "axios";
import { AddAssignmentModal } from "../../components/Employee/Modals/AddAssignmentModal";
import { EditAssignmentModal } from "../../components/Employee/Modals/EditAssignmentModal";
import { AssignmentTable } from "../../components/Employee/Tables/AssignmentTable";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { computeStyles } from "@popperjs/core";

class Assignment extends Component {
  state = {
    Assignment: [],
    addModalShow: false,
    editModelShow: false,
    empass:{}, 
    id: ""
  };
  

  componentDidMount()  {

    axios
      .get("http://localhost:5000/api/assignment-details")
      .then((result) => {
        const Assignment = result.data;
        console.log(Assignment);

        this.setState({ Assignment: Assignment });
      })
      .catch((err) => console.log(err.message));
  }

setNewDetails = (assignment) => {
  
  
  this.setState({addModalShow: true, empass: assignment});


}

setEditPopup = (assignment) => {

  console.log(assignment);
  this.setState({editModelShow: true, empass: assignment});

}

handleAssignmentDelete = (assignment) => {
  // console.log("Delete");
  const Assignment = this.state.Assignment.filter(l => l._id !== assignment._id );
  this.setState({Assignment:Assignment});


}



  render(){
    let AddModelClose = () => this.setState({ addModalShow: false })
  return (
    <React.Fragment>

        <h1 className="mb-5">Assignments Requests</h1>
        <ButtonToolbar>
                    <button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                    onClick={() => this.setState({ addModalShow: true })}
                    >Add Assignment Request
                    </button>
                    <AddAssignmentModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                        
                    />
          </ButtonToolbar>
            <br></br><br></br>

        <div className="row">
          <div className="col-1"></div>
              <div className="col">
            <AssignmentTable filteredItems={this.state.Assignment}  />
          </div>
        </div>
      </React.Fragment>
  );
  }
};

export default Assignment;