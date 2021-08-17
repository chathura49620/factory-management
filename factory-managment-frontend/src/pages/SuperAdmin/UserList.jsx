import React, { Component } from "react";
import axios from "axios";
import UserListTable from "../../components/SuperAdmin/Tables/UserListTable";
import ApprovedUsersTable from "../../components/SuperAdmin/Tables/ApprovedUsersTable";
import RejectUsersTable from "../../components/SuperAdmin/Tables/RejectUsersTable";

class UserList extends Component {
  state = {
    Users: [],
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
      .get("http://localhost:5000/api/meterial-code")
      .then((result) => {
        const Users = result.data;

        this.setState({ Users: Users });
      })
      .catch((err) => console.log(err.message));
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
         <h1 className="mb-5">User Lists</h1>
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
          <h1>Pending Approve Users</h1>
            <UserListTable filteredItems={this.state.Users} />
          </div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col">
          <h1>Approved Users</h1>
            <ApprovedUsersTable filteredItems={this.state.Users} />
          </div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col">
          <h1>Rejected Users</h1>
            <RejectUsersTable filteredItems={this.state.Users} />
          </div>
        </div>
      </React.Fragment>
  );
  }
};

export default UserList;
