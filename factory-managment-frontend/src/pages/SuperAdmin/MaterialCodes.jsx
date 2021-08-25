import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddMaterialCodeModal } from '../../components/SuperAdmin/Modals/AddMaterialCodeModal';
import {MaterialCodeTable} from "../../components/SuperAdmin/Tables/MaterialCodeTable";

class MaterialCodes extends Component {
  state = {
    MaterialCodes: [],
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

  render(){
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
          <div className="col-1"></div>
          <div className="col">
            <MaterialCodeTable filteredItems={this.state.MaterialCodes} />
          </div>
        </div>
      </React.Fragment>
  );
  }
};

export default MaterialCodes;
