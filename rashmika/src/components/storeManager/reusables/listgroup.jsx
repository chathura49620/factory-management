import React, { Component } from "react";

const ListGroup = ({ genres, onGenreSelect, selectedGenre }) => {
  return (
    <ul className="list-group list-group-horizontal mt-3">
      {genres.map((g) => (
        <li
          onClick={() => onGenreSelect(g)}
          key={g}
          style={{
            backgroundColor: g === selectedGenre ? "#7121AD" : "white",
            borderRadius: "2px",
            cursor: "pointer",
          }}
          className="list-group-item"
        >
          {g}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
