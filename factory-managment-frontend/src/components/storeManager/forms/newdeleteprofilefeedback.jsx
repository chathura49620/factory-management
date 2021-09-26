import React, { Component } from "react";
import FormSuper from "../reusables/formsuper";
import Joi, { join } from "joi-browser";
import axios from "axios";
import swal from "sweetalert";
import TextArea from "../reusables/textarea";
import moment from "moment";

class NewDeleteProfileFeedback extends FormSuper {
  state = {
    data: {
      Name: "",
      Reason: "",
    },
    errors: {},
  };

  schema = {
    Name: Joi.string(),
    Reason: Joi.string().required(),
  };

  componentDidMount() {
    const fOb = {
      Name: this.props.name,
      Reason: "",
    };

    this.setState({ data: fOb });
    // console.log(fOb);
  }

  doSubmit() {
    const jsonOb = this.state.data;
    console.log(jsonOb);

    axios
      .post("http://localhost:5000/feedbackForDelete/add", jsonOb)
      .then((result) => console.log(result.data));

    swal({
      text: "Profile deleted successfully!.",
      icon: "success",
      timer: "1500",
    });

    this.props.logoutAndClose();
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.renderTextArea("Reason", "Reason For Drop")}

          {this.renderButton("Delete")}
        </form>
      </React.Fragment>
    );
  }
}

export default NewDeleteProfileFeedback;
