import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import {ProductonRoundTable} from "../../components/ProductionManager/Tabales/ProductonRoundTable";



class VIewNewProductionRound extends Component {
  state = {
    productionRound: [],
    addModalShow: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/newProRound-details")
      .then((result) => {
        const productionRound = result.data;

        this.setState({ productionRound: productionRound });
      })
      .catch((err) => console.log(err.message));
  }


  render() {
    let AddModelClose = () => this.setState({ addModalShow: false })
    return (
      <React.Fragment>
        <h1 className="mb-5">View Production Round Details</h1>
        
        <ButtonToolbar>
                    <Button variant='primary'
                    >Add New Production Round
                    </Button>
          </ButtonToolbar>
            <ProductonRoundTable productionRound={this.state.productionRound} />
      </React.Fragment>
    );
  }
};

export default VIewNewProductionRound;
