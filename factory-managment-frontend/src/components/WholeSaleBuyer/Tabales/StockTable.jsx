import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import swal from "sweetalert";
import { AddOrderDetailsModal } from "../Modals/AddOrderDetailsModal";

export class StockTable extends Component {
  constructor(props) {
    super(props);
    this.state = { AddOrderDetailsModalShow: false };
  }

  // deleteCat(id) {
  //   swal({
  //     title: "Are you sure?",
  //     text: "Once deleted, you will not be able to recover this Recode!",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //       fetch("http://localhost:5000/api/prevProRound-details", {
  //         method: "DELETE",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           username: "thiranya",
  //         },
  //         body: JSON.stringify({
  //           id: id,
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then((result) => {
  //           swal({
  //             title: "Previous Production Round Deleted Succesfully",
  //             icon: "success",
  //             button: "Done",
  //           });
  //         });
  //     } else {
  //       swal("Your imaginary file is safe!");
  //     }
  //   });
  // }

  render() {
    let EditModelClose = () =>
      this.setState({ AddOrderDetailsModalShow: false });
    return (
      <div>
        <ButtonToolbar>
          <AddOrderDetailsModal
            show={this.state.AddOrderDetailsModalShow}
            onHide={EditModelClose}
          />
        </ButtonToolbar>
        <table
          className="table table-bordered table-sm"
          style={{ width: "1200px" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#7121AD", color: "white" }}>
              <th scope="col">Product Id</th>
              <th scope="col">Product Category</th>
              <th scope="col">Stock Status</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              {/* <th scope="col">Status</th> */}
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.productStock.map((i) => (
              <tr key={i._id} className={"table-succes table-primary"}>
                <td>{i.productId}</td>
                <td>{i.productCategory}</td>
                <td>{i.instock}</td>
                <td>{i.price}</td>
                <td>{i.status}</td>

                <td>
                  <button
                    className="btn-sm"
                    style={{
                      backgroundColor: "#7121AD",
                      color: "white",
                      marginRight: "4px",
                    }}
                    onClick={() =>
                      this.setState({
                        AddOrderDetailsModalShow: true,
                      })
                    }
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
