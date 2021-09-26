import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const FormPopup = ({ title, children, openPopup, onClose }) => {
  return (
    <div>
      <Dialog
        open={openPopup}
        fullWidth="200"
        style={{
          maxHeight: 1000,
          overflow: "hidden",
        }}
      >
        <DialogTitle
          style={{
            height: 56,
          }}
        >
          <div
            style={{ display: "flex", textAlign: "center", color: "#7121AD" }}
          >
            <h5 style={{ flexGrow: 1 }}>{title}</h5>
            <button
              className="btn-danger"
              onClick={() => onClose()}
              style={{
                color: "white",
                borderRadius: "2px",
                borderColor: "#BA0D32",
                padding: "2px",
                width: "30px",
                height: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>x</div>
            </button>
          </div>
        </DialogTitle>

        <DialogContent dividers>
          <div>{children}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormPopup;
