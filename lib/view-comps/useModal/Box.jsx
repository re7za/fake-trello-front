import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

// Misc
import { publicStyle } from "./publicStyle";

const useStyles = makeStyles((theme) => ({
  modalBox: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      minWidth: "370px",
    },
  },
  deletingUsersList: {
    minHeight: "70px",
    maxHeight: "120px",
    overflowY: "scroll",
  },
  modalUsersList: {
    margin: 0,
    paddingLeft: theme.spacing(1),
  },
  modalUsersListItem: {
    textDecoration: "none",
    color: "#000b",
    fontSize: "0.85rem",
    margin: `${theme.spacing(1)}px 0px`,
  },
}));

const ModalBox = ({ items, title }) => {
  const classes = useStyles();
  const publicClasses = publicStyle();

  return (
    <Paper variant="outlined" elevation={0} className={classes.modalBox}>
      <Box mb={1}>
        <Typography className={publicClasses.description}>{title}</Typography>
      </Box>
      <Divider />
      <Box mt={1} className={classes.deletingUsersList}>
        <ul className={classes.modalUsersList}>
          {items.map((item, i) => (
            <li className={classes.modalUsersListItem} key={item + i}>
              {item}
            </li>
          ))}
        </ul>
      </Box>
    </Paper>
  );
};

export default ModalBox;
