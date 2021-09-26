import React, { Component } from "react";

const SelectSearch = ({ categories, categoryValue, onChange }) => {
  return (
    <select
      value={categoryValue}
      onChange={(e) => onChange(e.currentTarget.value)}
      style={{ border: "2px solid #050139" }}
      className="form-select form-select-sm mt-3"
      aria-label=".form-select-sm example"
    >
      <option value={"first"}>Open the category menu</option>
      {categories.map((cat) => (
        <option key={cat._id} value={cat.categoryName}>
          {cat.categoryName}
        </option>
      ))}
    </select>
  );
};

export default SelectSearch;
