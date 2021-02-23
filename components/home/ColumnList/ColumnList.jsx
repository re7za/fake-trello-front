/** @format */
import React from "react";

// import Link from "next/link";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// Misc
import Column from "lib/view-comps/Column";

const useStyles = makeStyles((theme) => ({
  container: {
    overflowX: "scroll",
    flexWrap: "nowrap",
    padding: "8px 0px",
    height: "91vh",
    width: "unset",
    margin: "unset",
  },
  newTask: {
    width: "248px",
    marginTop: "8px",
  },
}));

function ColumnList() {
  const classes = useStyles();

  const tasks = [...Array(600).keys()].map((task) => ({
    title: `تسک شماره ${task}`,
  }));
  const columns = [...Array(2).keys()].map((col) => ({
    title: `ستون شماره ${col}`,
    tasks,
  }));

  return (
    <Grid
      container
      className={classes.container}
      spacing={2}
      direction="row-reverse"
    >
      {columns.map((col, i) => (
        <Grid key={`col-${i}`} item>
          <Column column={col} />
        </Grid>
      ))}
      <Grid>
        <Button
          className={classes.newTask}
          variant="contained"
          color="secondary"
        >
          ستون جدید
        </Button>
      </Grid>
    </Grid>
  );
}

export default ColumnList;
