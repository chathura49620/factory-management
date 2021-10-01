import React, { Component } from "react";

const SearchBox = ({ value, onChange, placeHolder }) => {
  return (
    <input
      style={{ border: "2px solid #050139" }}
      type="text"
      name="query"
      autoComplete="off"
      className="form-control my-4"
      placeholder={placeHolder}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};
export default SearchBox; 