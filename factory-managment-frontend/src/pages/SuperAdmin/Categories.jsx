import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddCategoryModal } from '../../components/SuperAdmin/Modals/AddCategoryModal';
import {CategoriesTable} from "../../components/SuperAdmin/Tables/CategoriesTable";


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


  render() {
    let AddModelClose = () => this.setState({ addModalShow: false })
    return (
      <React.Fragment>
        <h1 className="mb-5">Categories</h1>
        <ButtonToolbar>
                    <Button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                        onClick={() => this.setState({ addModalShow: true })}
                    >Add Category
                    </Button>
                    <AddCategoryModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                    />
          </ButtonToolbar>
            <CategoriesTable filteredItems={this.state.categories} />
      </React.Fragment>
    );
  }
};

export default Categories;
