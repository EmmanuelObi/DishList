import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Header from "./app/components/header/Header";
import MainTable from "./app/components/table/Table";
import AddIcon from "@mui/icons-material/Add";
import FormDialog from "./app/components/dialog/FormDialog";
import FindDish from "./app/components/dialog/FindDish";

function App() {
  const [open, setOpen] = useState(false);
  const notificationPosition = { vertical: "top", horizontal: "center" };
  const handleDishForm = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const [openFindDish, setOpenFindDish] = useState(false);
  const handleFindDish = () => {
    openFindDish ? setOpenFindDish(false) : setOpenFindDish(true);
  };

  return (
    <div className="App">
      <Header />
      <div className="pageContent">
        <h2>My Dish List</h2>
        <Button
          onClick={handleDishForm}
          className="button"
          variant="outlined"
          endIcon={<AddIcon />}
        >
          Add Dish
        </Button>
        <Button
          onClick={handleFindDish}
          className="button"
          variant="outlined"
          endIcon={<AddIcon />}
        >
          Find a Dish
        </Button>
        <FormDialog
          open={open}
          close={handleDishForm}
          notificationPosition={notificationPosition}
        />
        <MainTable notificationPosition={notificationPosition} />
        <FindDish open={openFindDish} handleFindDish={handleFindDish} />
      </div>
    </div>
  );
}

export default App;
