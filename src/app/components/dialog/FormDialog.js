import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { dishActions } from "../../redux/dishSlice";

const FormDialog = ({ open, close, notificationPosition }) => {
  const {
    dish: { dish },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [dishDetails, setDishDetails] = useState({
    name: "",
    ingredients: "",
  });
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formIsValid = dishDetails.name !== "" && dishDetails.ingredients !== "";

  const onAddDish = () => {
    if (!formIsValid) {
      setErrorMessage("please enter a dish");
      setAlertError(true);
      setTimeout(() => setAlertError(false), 5000);
      return;
    } else if (checkIfElementExists(dishDetails)) {
      setErrorMessage("dish already in list!");
      setAlertError(true);
      setTimeout(() => setAlertError(false), 5000);
      return;
    }

    dispatch(dishActions.addDish(dishDetails));
    setDishDetails({});
    close();
    setAlertSuccess(true);
    setTimeout(() => setAlertSuccess(false), 5000);
  };

  const checkIfElementExists = (element) => {
    if (dish.length === 0) {
      return false;
    }

    // const doesContainElement = dish.find(
    //   (singleDish) =>
    //     singleDish.name.toUpperCase().trim() === element.toUpperCase().trim()
    // );

    // return doesContainElement ? true : false;
  };

  return (
    <div>
      <Snackbar
        open={alertError}
        autoHideDuration={6000}
        anchorOrigin={notificationPosition}
      >
        <Alert severity="error">Error, {errorMessage}</Alert>
      </Snackbar>
      <Snackbar
        open={alertSuccess}
        autoHideDuration={6000}
        anchorOrigin={notificationPosition}
      >
        <Alert severity="success">Added dish</Alert>
      </Snackbar>
      <Dialog open={open} onClose={close}>
        <DialogTitle>Add a Dish</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="dish"
            label="Dish"
            type="text"
            fullWidth
            variant="standard"
            name="dish"
            value={dishDetails.name || ""}
            onChange={(e) =>
              setDishDetails({ ...dishDetails, name: e.target.value })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="ingredient"
            label="Ingredients"
            type="text"
            fullWidth
            variant="standard"
            name="dish"
            value={dishDetails.ingredients || ""}
            onChange={(e) =>
              setDishDetails({ ...dishDetails, ingredients: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button disabled={!formIsValid} onClick={onAddDish}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
