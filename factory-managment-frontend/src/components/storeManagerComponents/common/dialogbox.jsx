import React, { Component } from "react";

const DialogBox = ({ show, deleteOrNot }) => {
  if (!show) return <React.Fragment />;

  return (
    <React.Fragment>
      <div className="overlay">
        <div className="dialog">
          <div className="dialog__content">
            <h2 className="dialog__title">Delete a Item?</h2>
            <p className="dialog__description">
              Are you sure you want to delete this Item?
            </p>
          </div>

          <hr />

          <div className="dialog__footer">
            <button
              onClick={() => deleteOrNot("no")}
              className="dialog__cancel"
            >
              Cancel
            </button>
            <button
              onClick={() => deleteOrNot("yes")}
              className="dialog__confirm"
            >
              Yes, delete it
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DialogBox;
