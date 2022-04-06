import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

const FindDish = ({ open, handleFindDish }) => {
  return (
    <Dialog
      open={open}
      onClose={handleFindDish}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Enter your Ingredients</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="ingredient"
          label="Ingredients"
          type="text"
          fullWidth
          variant="standard"
          name="ingredient"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFindDish}>No</Button>
        <Button autoFocus>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FindDish;
