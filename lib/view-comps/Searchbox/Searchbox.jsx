/** @format */

import React, { useState } from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  searchInput: {
    width: "calc(100% - 16px)",
    backgroundColor: "#f1f1f1",
    outline: "none",
    padding: "7px 15px",
    paddingRight: "45px",
    fontSize: "0.97rem",
    color: "#333",
    border: `2px solid ${theme.pallete.primary.main}`,
    borderRadius: "4px",
    margin: "8px",
    transition: "200ms",
    "&:focus": {
      border: "2px solid #e91e63aa",
      backgroundColor: "#ffffff",
    },
  },
}));

const TYPING_DONE_TIME = 700;

function Searchbox({
  placeholder = "",
  onClick,
  setValue,
  inputClass,
  btnClass,
  iconClass,
  valueRef,
}) {
  const classes = useStyles();

  const [immidiateValue, setImmidiateValue] = useState("");
  const [valueTimeout, setValueTimeout] = useState();
  ////// ***************************
  // check if input value work with useRef instead of useState
  ////// ***************************

  const handleChange = (e) => {
    clearTimeout(valueTimeout);

    const trimedText = e.target.value.trim();
    setImmidiateValue(trimedText);

    setValueTimeout(
      setTimeout(() => {
        setValue(trimedText);
        valueRef.current = trimedText;
      }, TYPING_DONE_TIME)
    );
  };

  return (
    <div className={classes.root}>
      <input
        className={inputClass ? inputClass : classes.searchInput}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <span className={btnClass ? btnClass : classes.brnContainer}>
        <IconButton
          className={iconClass ? iconClass : classes.icon}
          onClick={() => onClick(immidiateValue)}
        >
          <SearchRoundedIcon />
        </IconButton>
      </span>
    </div>
  );
}

export default Searchbox;
