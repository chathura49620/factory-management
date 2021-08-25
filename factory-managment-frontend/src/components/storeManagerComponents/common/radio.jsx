import React, { Component } from "react";

const Radio = ({ rValue, onChange }) => {
  return (
    <React.Fragment>
      <div style={{ fontWeight: "bold" }}>Gender</div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
          checked
        />
        <label className="form-check-label" for="inlineRadio1">
          Male
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="Male"
        />
        <label className="form-check-label" for="inlineRadio2">
          Female
        </label>
      </div>
    </React.Fragment>
  );
};

export default Radio;
