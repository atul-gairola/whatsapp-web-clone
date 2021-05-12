import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function AlertPopup(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Alert({ severity, message, open, handleClose }) {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <AlertPopup onClose={handleClose} severity={severity}>
          {message}
        </AlertPopup>
      </Snackbar>
    </div>
  );
}


