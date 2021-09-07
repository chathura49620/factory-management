import React, { Component } from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group my-2">
      <label style={{ fontWeight: "bold" }} htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        {...rest}
        className="form-control"
        style={{ border: "1px solid #050139" }}
      >
        <option value="" />

        {options.map((opt) => (
          <option key={opt._id} value={opt.categoryName}>
            {opt.categoryName}
          </option>
        ))}
      </select>
      {error && (
        <div className="alert alert-danger" style={{ padding: 3 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Select;
