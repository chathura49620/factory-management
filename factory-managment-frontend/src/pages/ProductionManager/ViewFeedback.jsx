import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { FeedbackTable } from "../../components/ProductionManager/Tabales/FeedbackTable";
import "./styles.css";
import viewpic from "../../pages/assets/viewpic.png";

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
        <h1 className="heading">View Feedback List</h1>

        <div className="center">
          <img src={viewpic} alt="leavepic" />
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
