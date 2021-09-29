import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddMaterialCodeModal } from '../../components/SuperAdmin/Modals/AddMaterialCodeModal';
import {MaterialCodeTable} from "../../components/SuperAdmin/Tables/MaterialCodeTable";
import SearchBox from "../../components/FinanceTeamMember/Common/searchBox";  

class MaterialCodes extends Component {
  state = {
    MaterialCodes: [],
    searchQuery: "",
    addModalShow: false
  }; 
      
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/meterial-code")
      .then((result) => {
        const MaterialCodes = result.data;

        this.setState({ MaterialCodes: MaterialCodes });
      })
      .catch((err) => console.log(err.message));
  }
  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  filteredData() {
    const { searchQuery, MaterialCodes } = this.state;

    let filtered = [];

    if (searchQuery) {
      filtered = MaterialCodes.filter((r) =>
        r.materialName.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered = MaterialCodes;
    }

    return filtered;
  }
    
  render(){
    let filtered = this.filteredData();
    let AddModelClose = () => this.setState({ addModalShow: false })
  return (
    <React.Fragment>
        <h1 className="mb-5">Material Codes</h1>
        <ButtonToolbar>
                    <Button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                        onClick={() => this.setState({ addModalShow: true })}
                    >Add Material Code
                    </Button>
                    <AddMaterialCodeModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                    />
          </ButtonToolbar>
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
          <div className="col-1"></div>
          <div className="col">
            <MaterialCodeTable filteredItems={filtered} />
          </div>
        </div>
      </React.Fragment>
  );
  }   
};
     
export default MaterialCodes;
