import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddFactoryDetailsModal } from '../../components/SuperAdmin/Modals/AddFactoryDetailsModal';

class Dashboard extends Component {
  state = {
    factoryDetails: [],
    addModalShow: true
  };

  componentDidMount() {
    axios
    .get("http://localhost:5000/api/factory-details")
    .then((result) => {
      const factoryDetails = result.data;

      this.setState({ factoryDetails: factoryDetails });
    })
    .catch((err) => console.log(err.message));
  }




  render() {
    let AddModelClose = () => this.setState({ addModalShow: false })
    return (
      <React.Fragment>
           <ButtonToolbar>
                    <AddFactoryDetailsModal
                        show={this.state.addModalShow && this.state.factoryDetails.length == 0}
                        onHide={AddModelClose}
                    />
          </ButtonToolbar>
        <h1 className="mb-5">Dashboard</h1>
      </React.Fragment>
    );
  }
};

export default Dashboard;
