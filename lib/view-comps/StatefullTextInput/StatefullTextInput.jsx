import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
  },
}));

export default function BasicTextFields({ onChange, label, rtl, multiline }) {
  const classes = useStyles();

  return (
    <TextField
      dir={rtl ? "rtl" : "ltr"}
      multiline={multiline}
      rows={3}
      rowsMax={6}
      className={classes.root}
      label={label ? label : "username"}
      onChange={onChange}
    />
  );
}
