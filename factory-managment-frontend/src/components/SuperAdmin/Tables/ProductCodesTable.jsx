import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { EditProductCodeModal } from '../Modals/EditProductCodeModal';


export class ProductCodesTable extends Component {
  constructor(props) {
    super(props);
    this.state = { cate: [], editModalShow: false }
  }


  render(){
    const {id, productCode, productCategory, status } = this.state;
    let EditModelClose = () => this.setState({ editModalShow: false })
  return (
    <div>
      <ButtonToolbar>
      <EditProductCodeModal
          show={this.state.editModalShow} 
          onHide={EditModelClose}
          id={id}
          productCode={productCode}
          productCategory={productCategory}
          status={status}
      />
      </ButtonToolbar>
    <table className="table table-bordered table-sm m-2">
      <thead>
        <tr className="table-secondary">
          <th scope="col">Id</th>
          <th scope="col">Product Code</th>
          <th scope="col">Product Category</th>
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
            <td></td>
            <td>{i.productCode}</td>
            <td>{i.productCategory}</td>
            <td><button 
            className="btn btn-success btn-sm"
            onClick={() => this.setState({ editModalShow: true, id: i._id, productCode: i.productCode, productCategory: i.productCategory, status: i.status })}
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
};
};

