import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { FeedbackTable } from "../../components/ProductionManager/Tabales/FeedbackTable";

class ViewFeedback extends Component {
  state = {
    FeedbackList: [],
    addModalShow: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/apifeedback-details/")
      .then((result) => {
        const FeedbackList = result.data;

        this.setState({ FeedbackList: FeedbackList });
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4"></div>
          <div className="col">
            <h1>View Product List</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <FeedbackTable FeedbackList={this.state.FeedbackList} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewFeedback;
