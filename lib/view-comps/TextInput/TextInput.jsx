import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "300px",
  },
}));

export default function BasicTextFields({ valueRef, label, rtl }) {
  const classes = useStyles();

  return (
    <TextField
      dir={rtl ? "rtl" : "ltr"}
      className={classes.root}
      label={label ? label : "username"}
      onChange={(e) => (valueRef.current = e.target.value)}
    />
  );
}
