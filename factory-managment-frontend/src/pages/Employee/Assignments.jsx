import React, { Component } from "react";
import axios from "axios";
import { AddAssignmentModal } from "../../components/Employee/Modals/AddAssignmentModal";
import { EditAssignmentModal } from "../../components/Employee/Modals/EditAssignmentModal";
import { AssignmentTable } from "../../components/Employee/Tables/AssignmentTable";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { computeStyles } from "@popperjs/core";
import "./styles.css"
import assignmentpic from "../../pages/assets/assignmentpic.jpg"
import generatePDF from "../../components/Employee/utills/reportGeneratorAssignments";

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

        <br></br>

        <h2 className="heading">My Submitted Assignments</h2>

        <div className="center">
            <img src={assignmentpic} alt="assignmentpic"/>
         </div>

          <ButtonToolbar>
                    <button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                    onClick={() => this.setState({ addModalShow: true })}
                    >Add a Complete Assignment 
                    </button>
                    <AddAssignmentModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                        
                    />
          </ButtonToolbar>

            <br></br>

            <ButtonToolbar>
              <button 
                  style={{ backgroundColor: "#7121AD", color: "white" }}
                  className="btn btn-lg"
                  onClick={() => generatePDF(this.state.Assignment)}> 
                        Generate Monthly Report
              </button>
        </ButtonToolbar>

        <br></br>

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