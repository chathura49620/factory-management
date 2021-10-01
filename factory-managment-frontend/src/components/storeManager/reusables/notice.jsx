import React, { Component } from "react";

const Notice = () => {
  return (
    <div
      style={{
        height: 150,
        fontSize: 40,
        backgroundColor: "white",
        color: "black",
        textAlign: "center",
        border: "3px solid black",
      }}
    >
      <div
        style={{
          height: 40,
          fontSize: 20,
          color: "black", 
          textAlign: "center",
          borderBottom: "2px solid black",
        }}
      >
        Notices
      </div>
      Search records using date.
    </div>
  );
};

export default Notice;
