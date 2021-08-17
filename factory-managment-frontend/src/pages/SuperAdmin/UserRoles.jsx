import React, { Component } from "react";
import axios from "axios";
import UserRolesTable from "../../components/SuperAdmin/Tables/UserRolesTable";

class UserRoles extends Component {
  
  state = {
    userRoles: [],
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
      .get("http://localhost:5000/api/user-roles")
      .then((result) => {
        const userRoles = result.data;

        this.setState({ userRoles: userRoles });
      })
      .catch((err) => console.log(err.message));
  }

  // handleGenreSelect = (g) => {
  //   this.setState({ selectedGenre: g, searchQuery: "", currentPage: 1 });
  // };

  // // handleSearch = (query) => {
  // //   this.setState({
  // //     searchQuery: query,
  // //     selectedCategory: "",
  // //     selectedGenre: "All",
  // //     currentPage: 1,
  // //   });
  // // };
  // // handleSelectChange = (category) => {
  // //   this.setState({
  // //     selectedCategory: category,
  // //     selectedGenre: "All",
  // //     searchQuery: "",
  // //     currentPage: 1,
  // //   });
  // // };

  // filteredData() {
  //   const { searchQuery, items, selectedGenre } = this.state;

  //   let filtered = [];
  //   if (searchQuery) {
  //     filtered = items.filter((i) =>
  //       i.iAddedDate.toLowerCase().startsWith(searchQuery.toLowerCase())
  //     );
  //   } else if (selectedGenre === "All") {
  //     filtered = items;
  //   } else if (selectedGenre) {
  //     filtered = items.filter((i) => i.iType === selectedGenre);
  //   }

  //   return filtered;
  // }

  render() {
  

    //if (count === 0) return <p>There are no Items in the stock</p>;

    // const filtered = this.filteredData();
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
        <h1 className="mb-5">User Roles</h1>
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <UserRolesTable filteredItems={this.state.userRoles} />
          </div>
        </div>
      
      </React.Fragment>
    );
  }
  
};

export default UserRoles;
