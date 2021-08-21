import React, { Component } from "react";
import {EditEmployeeModal} from '../Modals/EditEmployeeModal';import { Table, Button, ButtonToolbar } from 'react-bootstrap';



export class LeaveTable extends Component{
  constructor(props) {
    super(props);
    this.state = { editModalShow: false }
  }
  render(){
    const {id, refno, reasonforleave, date } = this.state;
    let EditModelClose = () => this.setState({ editModalShow: false })
  return (
    <React.Fragment>
       <ButtonToolbar>
  <EditEmployeeModal
                      show={this.state.editModelShow}
                      empleave= {this.state.empLeave}
                      id={id}
                      refno={refno}
                      reasonforleave={reasonforleave}
                      date={date}
                    />
                    </ButtonToolbar>
<table className="table table-bordered" style={{overflow: "hidden"}}>
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" }}>
          <th scope="col">Ref No</th>
          <th scope="col">Reason for leave</th>
          <th scope="col">Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
    <tbody style={{overflow: "hidden"}}>
        {
          this.props.filteredItems.map(leave => (

      <tr key={leave._id}>
        <td>{leave.refno}</td>
        <td>{leave.reasonforleave}</td>
        <td>{leave.date}</td>
        <td>
            <button onClick={() => this.setState({ editModalShow: true, id: leave._id, refno: leave.refno, reasonforleave: leave.reasonforleave, date: leave.date })} 
                    style={{ backgroundColor: "#7121AD", color: "white" }} className="btn" 
                        >Edit</button>
            <button style={{ backgroundColor: "#BA0D32 ", color: "white" }} className="btn" >Delete</button>
        </td>

      </tr>              
            
          ))
        }


     
    </tbody>
    </table>

    </React.Fragment>
  );
      }
};

export default LeaveTable;
