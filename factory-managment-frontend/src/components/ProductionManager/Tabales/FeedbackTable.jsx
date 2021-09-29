import React, { Component } from "react";

export class FeedbackTable extends Component {
  constructor(props) {
    super(props);
    this.state = { editModalShow: false };
  }

  render() {
    return (
      <div>
        <table
          className="table table-bordered table-sm m-2"
          style={{ width: "1200px" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#7121AD", color: "white" }}>
              <th scope="col">Email</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {this.props.FeedbackList.map((i) => (
              <tr key={i._id} className={"table-succes table-primary"}>
                <td>{i.email}</td>
                <td>{i.mobileNumber}</td>
                <td>{i.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
