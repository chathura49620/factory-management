import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';

export class SalariesTable extends Component {
  constructor(props) {
    super(props);
    this.state = { cate: [], editModalShow: false }
  }

  render() {
  return (
    <div>
    <table className="table table-bordered table-sm m-2" style={{width:"1000px"}}>
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" } }>
          <th scope="col">Id</th>
          <th scope="col">Emp No</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        {this.props.filteredItems.map((i) => (
          <tr
            key={i._id}
            
          >
            <td>{}</td>
            <td>{i.empID}</td>
            <td>{i.amount}</td>
          </tr>
        ))}
      </tbody>
     
    </table>
    </div>
  );
};
}


