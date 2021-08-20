import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { EditMaterialCodeModal } from '../Modals/EditMaterialCodeModal';

export class MaterialCodeTable extends Component {
  constructor(props) {
    super(props);
    this.state = { cate: [], editModalShow: false }
  }
  render() {
    const {id, matirialName, materialCode, status } = this.state;
    let EditModelClose = () => this.setState({ editModalShow: false })
  return (
    <div>
       <ButtonToolbar>
      <EditMaterialCodeModal
          show={this.state.editModalShow}
          onHide={EditModelClose}
          id={id}
          matirialName={matirialName}
          materialCode={materialCode}
          status={status}
      />
      </ButtonToolbar>
    <table className="table table-bordered table-sm m-2">
      <thead>
        <tr className="table-secondary">
          <th scope="col">Id</th>
          <th scope="col">Material Name</th>
          <th scope="col">Material Code</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {this.props.filteredItems.map((i) => (
          <tr
            key={i._id}
            className={
              "table-succes table-primary"
            }
          >
            <td>1</td>
            <td>{i.materialName}</td>
            <td>{i.materialCode}</td>
            <td><button 
            className="btn btn-success btn-sm"
            onClick={() => this.setState({ editModalShow: true, id: i._id, matirialName: i.materialName, materialCode: i.materialCode, status: i.status })}
            >Edit</button> 
            <button 
            className="btn btn-warning btn-sm" 
            >Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
  }
};


