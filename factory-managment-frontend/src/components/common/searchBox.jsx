import React, { Component } from "react";

const SearchBox = ({ value, onChange, placeHolder }) => {
  return (
    <input
      type="text"
      name="query"
      autoComplete="off"
      className="form-control my-2"
      placeholder={placeHolder}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};
export default SearchBox;
