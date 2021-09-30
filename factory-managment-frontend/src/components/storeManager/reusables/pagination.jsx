import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  //console.log(currentPage);
  if (pagesCount === 1) return null;
  //const pages = [1, 2, 3];
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} style={{ cursor: "pointer" }}>
            <a
              onClick={() => {
                onPageChange(page);
              }}
              className="page-link"
              style={{
                backgroundColor: page === currentPage ? "#7121AD" : "white",
                color: "black",
                borderRadius: "3px",
              }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
