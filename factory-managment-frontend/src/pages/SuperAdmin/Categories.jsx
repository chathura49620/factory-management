import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddCategoryModal } from '../../components/SuperAdmin/Modals/AddCategoryModal';
import UserRolesTable from "../../components/SuperAdmin/Tables/CategoriesTable";


class Categories extends Component {
  state = {
    categories: [],
    addModalShow: false
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
    let AddModelClose = () => this.setState({ addModalShow: false })
    return (
      <React.Fragment>
        <h1 className="mb-5">Categories</h1>
        <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}
                    >Add Category
                    </Button>
                    <AddCategoryModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                    />
          </ButtonToolbar>
            <UserRolesTable filteredItems={this.state.categories} />
      </React.Fragment>
    );
  }
};

export default Categories;
