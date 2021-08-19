import React, { Component } from "react";

const SelectSearch = ({ categories, categoryValue, onChange }) => {
  return (
    <select
      value={categoryValue}
      onChange={(e) => onChange(e.currentTarget.value)}
      className="form-select form-select-sm my-3"
      aria-label=".form-select-sm example"
    >
      <option>Open the category menu</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default SelectSearch;
