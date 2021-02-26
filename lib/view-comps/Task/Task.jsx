/** @format */
import React from "react";

// Services
import deleteTask from "services/task/deleteTask";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

// MUI Icons
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "1px solid #eee",
    transition: "200ms",
    padding: theme.spacing(1),
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#eee",
    },
  },
  description: {
    fontSize: "0.8rem",
    color: "#000a",
  },
  deleteBox: {
    position: "absolute",
    left: theme.spacing(0.25),
    top: theme.spacing(1),
  },
}));

function Task({ task, refetch }) {
  const classes = useStyles();

  const handleDeleteTask = async () => {
    const res = await deleteTask(task.id);
    if (res.status >= 200 && res.status < 300) refetch();
  };

  return (
    <Paper className={classes.root} elevation={0} square>
      <Box pb={0.5}>
        <Typography variant="subtitle2">{task.name}</Typography>
      </Box>
      <Box>
        <Typography className={classes.description}>
          {task.description}
        </Typography>
      </Box>
      <Box className={classes.deleteBox}>
        <IconButton aria-label="delete" onClick={handleDeleteTask}>
          <DeleteRoundedIcon fontSize="small" />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default Task;
