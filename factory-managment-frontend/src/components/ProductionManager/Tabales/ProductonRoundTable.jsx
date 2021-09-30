import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import swal from "sweetalert";
import { EditProductionRoundDetailsModal } from "../Modals/EditProductionRoundDetailsModal";

export class ProductonRoundTable extends Component {
  constructor(props) {
    super(props);
    this.state = { editModalShow: false };
  }

  deleteCat(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Recode!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch("http://localhost:5000/api/newProRound-details", {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            username: "chathura",
          },
          body: JSON.stringify({
            id: id,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            swal({
              title: "New Production Round Deleted Succesfully",
              icon: "success",
              button: "Done",
            });
            setTimeout(
              function () {
                window.location.reload();
              }.bind(this),
              1500
            );
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  render() {
    const { id, productCategory, quantity, esDays, esEmployees } = this.state;
    let EditModelClose = () => this.setState({ editModalShow: false });
    return (
      <div>
        <ButtonToolbar>
          <EditProductionRoundDetailsModal
            show={this.state.editModalShow}
            onHide={EditModelClose}
            id={id}
            productCategory={productCategory}
            quantity={quantity}
            esDays={esDays}
            esEmployees={esEmployees}
          />
        </ButtonToolbar>
        <table
          className="table table-bordered table-sm"
          style={{ width: "1200px" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#7121AD", color: "white" }}>
              <th scope="col">Id</th>
              <th scope="col">Product Category</th>
              <th scope="col">Quntity</th>
              <th scope="col">Estimated Days</th>
              <th scope="col">Estimated Employees</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.productionRound.map((i) => (
              <tr key={i._id}>
                <td>{i.productId}</td>
                <td>{i.productCategory}</td>
                <td>{i.quantity}</td>
                <td>{i.esDays}</td>
                <td>{i.esEmployees}</td>
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
                        editModalShow: true,
                        id: i._id,
                        productCategory: i.productCategory,
                        quantity: i.quantity,
                        esDays: i.esDays,
                        esEmployees: i.esEmployees,
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="btn-sm"
                    style={{ backgroundColor: "#dc3545", color: "white" }}
                    onClick={() => this.deleteCat(i._id)}
                  >
                    Delete
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
