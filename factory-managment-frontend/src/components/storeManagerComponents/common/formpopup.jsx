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
          <div style={{ display: "flex", textAlign: "center" }}>
            <h5 style={{ flexGrow: 1 }}>Edit My Profile</h5>
            <button onClick={() => onClose()} style={{ color: "#0E0104" }}>
              X
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
