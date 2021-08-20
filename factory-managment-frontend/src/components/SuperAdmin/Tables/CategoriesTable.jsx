import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { EditCategoryModal } from '../Modals/EditCategoryModal';

export class CategoriesTable extends Component {
  constructor(props) {
    super(props);
    this.state = { cate: [], editModalShow: false }
  }

  render() {
    const {id, name, status, version } = this.state;
    let EditModelClose = () => this.setState({ editModalShow: false })
  return (
    <div>
       <ButtonToolbar>

        <EditCategoryModal
            show={this.state.editModalShow}
            onHide={EditModelClose}
            id={id}
            name={name}
            status={status}
        />
        </ButtonToolbar>
    <table className="table table-bordered table-sm m-2">
      <thead>
        <tr className="table-secondary">
          <th scope="col">Id</th>
          <th scope="col">Category</th>
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
            <td>{i.userRoleNo}</td>
            <td>{i.categoryName}</td>
            <td><button 
            className="btn btn-success btn-sm"
            onClick={() => this.setState({ editModalShow: true, id: i._id, name: i.categoryName, status: i.status })}
            >Edit</button> 
            <button 
            className="btn btn-warning btn-sm" 
            onClick={() => this.deleteCat(i.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
     
    </table>
    </div>
  );
};
}


