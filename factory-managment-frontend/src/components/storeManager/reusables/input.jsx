import React, { Component } from "react";

const Input = ({ name, label, value, onChange, error, type }) => {
  return (
    <div className="form-group my-2">
      <label style={{ fontWeight: "bold" }} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        className="form-control"
        value={value}
        name={name}
        autoComplete="off"
        onChange={onChange}
        style={{ border: "1px solid #050139" }}
      /> 
      {error && (
        <div className="alert alert-danger" style={{ padding: 3 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
