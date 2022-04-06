import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./table.module.css";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import DeleteModal from "../dialog/DeleteModal";
import Tooltip from "@mui/material/Tooltip";

const MainTable = ({ notificationPosition }) => {
  const { dish } = useSelector((state) => state.dish);
  const [deleteModal, setDeleteModal] = useState(false);
  const [dishToDelete, setDishToDelete] = useState("");
  const onDelete = (id) => {
    setDishToDelete(id);
    deleteModal ? setDeleteModal(false) : setDeleteModal(true);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: 18 }}>Dish</TableCell>
              <TableCell style={{ fontSize: 18 }}>Ingredients</TableCell>
              <TableCell style={{ fontSize: 18 }} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dish.map((entry) => (
              <TableRow
                key={entry.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ fontSize: 16 }} component="th" scope="row">
                  {entry.name}
                </TableCell>
                <TableCell style={{ fontSize: 16 }} component="th" scope="row">
                  {entry.ingredient}
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="delete">
                    <DeleteIcon
                      onClick={() => onDelete(entry.id)}
                      sx={{ fontSize: 25 }}
                      className={styles.icon}
                    />
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteModal
        dishToDelete={dishToDelete}
        onDelete={onDelete}
        deleteModal={deleteModal}
        notificationPosition={notificationPosition}
      />
    </>
  );
};
export default MainTable;
