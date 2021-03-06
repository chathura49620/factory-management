import React, { Component } from "react";

export class ProductListTable extends Component {
  constructor(props) {
    super(props);
    this.state = { editModalShow: false };
  }

  render() {
    return (
      <div>
        <table
          className="table table-bordered table-sm m-2"
          style={{ width: "1200px" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#7121AD", color: "white" }}>
              <th scope="col">Product Id</th>
              <th scope="col">Product Category</th>
              <th scope="col">Stock Count</th>
            </tr>
          </thead>
          <tbody>
            {this.props.ProductList.map((i) => (
              <tr key={i._id}>
                <td>{i.productCode}</td>
                <td>{i.productCategory}</td>
                <td>{i.stockCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
