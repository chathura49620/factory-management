import React, { Component } from "react";
import axios from "axios";
import { AddEmployeeModal } from "../../components/Employee/Modals/AddEmployeeModal";
import { LeaveTable } from "../../components/Employee/Tables/LeaveTable";
import { ButtonToolbar } from 'react-bootstrap';
import leavepic from "../../pages/assets/leavepic.jpg"
import "./styles.css"
import generatePDF from "../../components/Employee/utills/reportGenerator";

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
    const {Leave} = this.state;
  return (
    <React.Fragment>

        

        <br></br>
        <h2 className="heading">My Leave Requests</h2>

        <div className="center">
            <img src={leavepic} alt="leavepic"/>
         </div>
        
        <ButtonToolbar>
                    <button style={{ backgroundColor: "#7121AD", color: "white" }}
                            className="btn btn-lg"
                            onClick={() => this.setState({ addModalShow: true })}
                    >       Add your Leave Request
                    </button>
                    <AddEmployeeModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                        
                    />
        </ButtonToolbar>
        <br></br>


        <ButtonToolbar>
              <button 
                  style={{ backgroundColor: "#7121AD", color: "white" }}
                  className="btn btn-lg"
                  onClick={() => generatePDF(this.state.Leave)}> 
                        Generate Monthly Report
              </button>
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