import React, { Component } from "react";
import axios from "axios";
import UserRolesTable from "../../components/SuperAdmin/Tables/UserRolesTable";
import "./styles.css";
import BillsImg from "./assert/img7.jpeg";

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
        <div className="row">
          <div className="col-3"></div>

        <div className="col">
        <h1 className="heading">User Roles</h1>
         <div className="center">
              <img src={BillsImg} alt="billsPic" />
            </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <UserRolesTable filteredItems={this.state.userRoles} />
          </div>
        </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
  
};

export default UserRoles;
