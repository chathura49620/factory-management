import React, { Component } from "react";

const ListGroup = ({ genres, onGenreSelect, selectedGenre }) => {
  return (
    <ul className="list-group list-group-horizontal m-2">
      {genres.map((g) => (
        <li
          onClick={() => onGenreSelect(g)}
          key={g}
          className="list-group-item"
          className={
            g === selectedGenre ? "list-group-item active" : "list-group-item"
          }
        >
          {g}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
