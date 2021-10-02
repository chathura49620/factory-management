import React, { Component } from "react";

const Radio = ({ label, name, value, onChange, error }) => {
  return (
    <React.Fragment>
      <div style={{ fontWeight: "bold" }}>Gender</div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          value="Male"
          name="Gender"
        />
        <label className="form-check-label" for="inlineRadio1">
          Male
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          className="form-check-input"
          type="radio"
          checked
          value="Female"
          name="Gender"
        />
        <label className="form-check-label" for="inlineRadio2">
          Female
        </label>
      </div>
    </React.Fragment>
  );
};

export default Radio;
