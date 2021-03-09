/** @format */
import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

// MUI Icons
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

const useStyles = makeStyles((theme) => ({
  checklist: {
    borderBottom: "1px solid #0002",
  },
}));

function Checklists({ checklists, setChecklists }) {
  const classes = useStyles();

  const handleDelete = (clIndex) => {
    const tempCl = checklists;
    setChecklists(tempCl.filter((cl, i) => i !== clIndex));
  };

  return (
    <>
      {checklists.map((cl, i) => (
        <Box
          key={`cl-${i}`}
          className={classes.checklist}
          display="flex"
          gridGap={2}
          alignItems="center"
        >
          <Box>
            <IconButton variant="contained" onClick={() => handleDelete(i)}>
              <DeleteRoundedIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box>{cl}</Box>
        </Box>
      ))}
    </>
  );
}

export default Checklists;
