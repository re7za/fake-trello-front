/** @format */
import React from "react";

// import Link from "next/link";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "200px",
    maxHeight: "760px",
    width: "250px",
    backgroundColor: "#fff",
    position: "relative",
  },
  title: {
    padding: "8px",
  },
  taskContainer: {
    padding: "8px 0px 16px",
    overflowY: "scroll",
    maxHeight: "694px",
  },
  newTask: {
    width: "100%",
    position: "absolute",
    bottom: "0px",
  },
}));

function Column({ column }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0} variant="outlined">
      <Typography className={classes.title}>{column.title}</Typography>
      <Divider className={classes.divider} />
      <Box className={classes.taskContainer}>
        {column.tasks.map((task, i) => (
          <Box key={`task-${i}`}>{task.title}</Box>
        ))}
      </Box>
      <Button className={classes.newTask} variant="contained" color="secondary">
        تسک جدید
      </Button>
      <div>hello</div>
    </Paper>
  );
}

export default Column;
