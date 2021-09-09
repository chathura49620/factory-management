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

        <div className="row">

<div className="col-4 my-2">

</div>
<div className="col">
<h1 >View New Production Round Details</h1>

</div>
        </div>
        
        
        <div className="row">
          <div className="col-10"></div>
          <div className="col">
           <ButtonToolbar>
                    <Button 
                    className="btn my-1"
                    style={{ backgroundColor: "#7121AD", color: "white"}}
                    >Add New
                    </Button>
          </ButtonToolbar>
         </div>
        </div >

        <div className="row">
          <div className="col-2"></div>
          <div className="col">
          <ProductonRoundTable productionRound={this.state.productionRound} />

          </div>
        </div>
        
           
      </React.Fragment>
    );
  }
};

export default VIewNewProductionRound;
