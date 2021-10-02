import React, { Component } from "react";

const TextArea = ({ label, name, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label style={{ fontWeight: "bold" }} htmlFor={name}>
        {label}
      </label>
      <textarea
        cols="30"
        rows="3"
        className="form-control"
        style={{ border: "1px solid #050139" }}
        value={value}
        name={name}
        autoComplete="off"
        onChange={onChange}
      ></textarea>

      {error && (
        <div className="alert alert-danger" style={{ padding: 3 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default TextArea;
