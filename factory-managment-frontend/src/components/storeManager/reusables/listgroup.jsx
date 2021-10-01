import React, { Component } from "react";

const ListGroup = ({ genres, onGenreSelect, selectedGenre }) => {
  return (
    <ul className="list-group list-group-horizontal my-4">
      {genres.map((g) => (
        <li
          onClick={() => onGenreSelect(g)}
          key={g}
          style={{ backgroundColor: g === selectedGenre ? "#7121AD" : "white" }}
          className="list-group-item"
        >
          {g}
        </li>
      ))}
    </ul>
  );
}; 

export default ListGroup;
