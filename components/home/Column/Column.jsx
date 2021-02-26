/** @format */
import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

// MUI Icons
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

// Misc
import Task from "../Task";
import useNewTaskModal from "./useNewTaskModal";
import useDeleteListModal from "./useDeleteListModal";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "760px",
    width: "250px",
    backgroundColor: "#fff",
    position: "relative",
  },
  header: {
    postion: "relative",
  },
  title: {
    padding: "8px",
  },
  deleteBox: {
    position: "absolute",
    left: theme.spacing(0.75),
    top: theme.spacing(0.25),
  },
  deleteBtn: {
    padding: theme.spacing(1),
  },
  taskContainer: {
    padding: "0px 0px 32px",
    overflowY: "scroll",
    maxHeight: "694px",
  },
  newTask: {
    width: "100%",
    position: "absolute",
    bottom: "0px",
  },
}));

function Column({ column, refetch }) {
  const classes = useStyles();

  const newTaskModal = useNewTaskModal({
    columnId: column.id,
    refetch,
  });

  const deleteListModal = useDeleteListModal({
    column,
    refetch,
  });

  return (
    <>
      <newTaskModal.Modal />
      <deleteListModal.Modal />
      <Paper className={classes.root} elevation={0} variant="outlined">
        <Box className={classes.header}>
          <Typography className={classes.title}>{column.name}</Typography>
          <Box className={classes.deleteBox}>
            <IconButton
              aria-label="delete"
              className={classes.deleteBtn}
              onClick={() => deleteListModal.open()}
            >
              <DeleteRoundedIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Divider className={classes.divider} />
        <Box className={classes.taskContainer}>
          {column.tasks.map((task, i) => (
            <Box key={`task-${i}`}>
              {task.id ? <Task task={task} refetch={refetch} /> : ""}
            </Box>
          ))}
        </Box>
        <Button
          className={classes.newTask}
          variant="contained"
          color="secondary"
          onClick={() => newTaskModal.open()}
        >
          تسک جدید
        </Button>
      </Paper>
    </>
  );
}

export default Column;
