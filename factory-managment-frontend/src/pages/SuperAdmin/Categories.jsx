import React, { Component } from "react";
import axios from "axios";
import UserRolesTable from "../../components/SuperAdmin/Tables/CategoriesTable";

class Categories extends Component {
  state = {
    categories: [],
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
      .get("http://localhost:5000/api/categories")
      .then((result) => {
        const categories = result.data;

        this.setState({ categories: categories });
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
        <div className='home'>
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <UserRolesTable filteredItems={this.state.categories} />
          </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
};

export default Categories;
