import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { dishActions } from "../../redux/dishSlice";
import { Alert, Snackbar } from "@mui/material";

const DeleteModal = ({
  deleteModal,
  onDelete,
  dishToDelete,
  notificationPosition,
}) => {
  const dispatch = useDispatch();
  const [alertDelete, setAlertDelete] = useState(false);
  const onDeleteDish = () => {
    dispatch(dishActions.removeDish(dishToDelete));
    setAlertDelete(true);
    setTimeout(() => setAlertDelete(false), 5000);
    onDelete();
  };
  return (
    <div>
      <Snackbar
        open={alertDelete}
        autoHideDuration={6000}
        anchorOrigin={notificationPosition}
      >
        <Alert severity="success">Dish deleted</Alert>
      </Snackbar>
      <Dialog
        open={deleteModal}
        onClose={onDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Click "Yes" to remove this dish from your list
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onDelete}>No</Button>
          <Button autoFocus onClick={onDeleteDish}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
