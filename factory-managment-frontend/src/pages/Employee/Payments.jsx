import React, { Component } from "react";
import axios from "axios";
import { AddPaymentsModal } from "../../components/Employee/Modals/AddPaymentsModal";
import { PaymentsTable } from "../../components/Employee/Tables/PaymentsTable";
import { ButtonToolbar } from 'react-bootstrap';
import paymentspic from "../../pages/assets/paymentspic.jpg"
import "./styles.css"
import SearchBox from "../../components/FinanceTeamMember/Common/searchBox";


class Payments extends Component {
  state = {
    Payments: [],
    addModalShow: false,
    editModelShow: false,
    empPayments:{}, 
    id: "",
    searchQuery: ""
  };

  componentDidMount()  {

    axios
      .get("http://localhost:5000/api/payment-details/")
      .then((result) => {
        const Payments = result.data;
        console.log(Payments);

        this.setState({ Payments: Payments });
      })
      .catch((err) => console.log(err.message));
  }


  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  filteredData() {
    const { searchQuery, Payments } = this.state;

    let filtered = [];

    if (searchQuery) {
      filtered = Payments.filter((r) =>
        r.bankname.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered = Payments;
    }
    return filtered;
  }

setNewDetails = (payments) => {
  this.setState({addModalShow: true, empPayments: payments});
}

setEditPopup = (payments) => {

  console.log(payments);
  this.setState({editModelShow: true, empPayments: payments});

}

handlePaymentsDelete = (payments) => {
  // console.log("Delete");
  const Payments = this.state.Payments.filter(l => l._id !== payments._id );
  this.setState({Payments:Payments});
}

  render(){
    let filtered = this.filteredData();
    let AddModelClose = () => this.setState({ addModalShow: false })
  return (
    <React.Fragment>

        

        <br></br>
        <h2 className="heading">My Saved Bank Details</h2>

        <div className="center">
            <img src={paymentspic} alt="paymentspic"/>
         </div>
        
        <ButtonToolbar>
                    <button style={{ backgroundColor: "#7121AD", color: "white" }}
                            className="btn btn-lg"
                            onClick={() => this.setState({ addModalShow: true })}
                    >       Add your Payments
                    </button>
                    <AddPaymentsModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                        
                    />
        </ButtonToolbar>
        <br></br>

        <div className="col-md-5">
                <SearchBox onChange={this.handleSearch} placeHolder="Search by Bank Name" />
        </div>

        <div className="row">
          <div className="col-1"></div>
              <div className="col">
            <PaymentsTable filteredItems={filtered}  />
          </div>
        </div>
      </React.Fragment>
  );
  }
};

export default Payments;