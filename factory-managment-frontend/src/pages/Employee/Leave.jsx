import React, { Component } from "react";
import axios from "axios";

import LeaveTable from "../../components/SuperAdmin/Tables/LeaveTable";

class Leave extends Component {
  state = {
    Leave: [],
    currentPage: 1,
    pageSize: 4,
    genres: ["All", "Product", "Material"], //array of genre
    categories: ["clothes", "plastic", "anything"],
    selectedGenre: "All",
    searchQuery: "",
    selectedCategory: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/leave-details")
      .then((result) => {
        const Leave = result.data;
        console.log(Leave);

        this.setState({ Leave: Leave });
      })
      .catch((err) => console.log(err.message));
  }

handleLeaveDelete = (leave) => {
  // console.log("Delete");
  const Leave = this.state.Leave.filter(l => l._id !== leave._id );
  this.setState({Leave:Leave});
}



  render(){
  return (
    <React.Fragment>

        {/* <div className="row">
          <div className="col">
            <ListGroup
              genres={this.state.genres}
              onGenreSelect={this.handleGenreSelect}
              selectedGenre={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <SelectSearch
              categories={this.state.categories}
              onChange={this.handleSelectChange}
              categoryValue={this.state.selectedCategory}
            />
          </div>
          <div className="col">
            <SearchBox
              onChange={this.handleSearch}
              value={this.state.searchQuery}
              placeHolder="Search date and time"
            />
          </div>
          <div className="col">
            <Link to="/items/new" className="btn btn-primary mt-2">
              New Item
            </Link>
          </div>
        </div> */}
        <h1 className="mb-5">Leave Requests</h1>
            <button class="btn btn-info">Add a New Leave Request</button>

            <br></br><br></br>

        <div className="row">
          <div className="col-1"></div>
              <div className="col">
            <LeaveTable onDelete={this.handleLeaveDelete} filteredItems={this.state.Leave} />
          </div>
        </div>
      </React.Fragment>
  );
  }
};

export default Leave;