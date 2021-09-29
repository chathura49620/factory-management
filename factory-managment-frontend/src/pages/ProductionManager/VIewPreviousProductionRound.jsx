import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { PreviousProductionRoundTable } from "../../components/ProductionManager/Tabales/PreviousProductionRoundTable";
import SearchBox from "../../components/ProductionManager/common/searchBox";

class VIewPreviousProductionRound extends Component {
  state = {
    preproductionRound: [],
    addModalShow: false,
    searchQuery: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/prevProRound-details")
      .then((result) => {
        const preproductionRound = result.data;

        this.setState({ preproductionRound: preproductionRound });
      })
      .catch((err) => console.log(err.message));
  }

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  filteredData() {
    const { searchQuery, preproductionRound } = this.state;

    let filtered = [];

    if (searchQuery) {
      filtered = preproductionRound.filter((r) =>
        r.productCategory.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered = preproductionRound;
    }

    return filtered;
  }

  render() {
    //take the filtered list
    let filtered = this.filteredData();

    console.log(filtered);

    let AddModelClose = () => this.setState({ addModalShow: false });
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4 my-2"></div>
          <div className="col">
            <h1>View Previous Production Round Details</h1>
          </div>
        </div>

        <div className="row">
          <div className="row">
            <div className="col-4"></div>
            <div className="col">
              <SearchBox onChange={this.handleSearch} placeHolder="Search" />
            </div>
            <div className="col-3"></div>
          </div>
          <div className="col-10"></div>
          <div className="col"></div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            {/**pass the filtered data */}
            <PreviousProductionRoundTable preproductionRound={filtered} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VIewPreviousProductionRound;
