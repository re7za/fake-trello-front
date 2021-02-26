// MUI
import { makeStyles } from "@material-ui/core/styles";

export const publicStyle = makeStyles((theme) => ({
  description: {
    color: "#000b",
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  ul: {
    padding: `0px ${theme.spacing(2)}px`,
  },
  li: {
    margin: `${theme.spacing(1)}px 0px`,
    color: "#000a",
    fontSize: "0.85rem",
  },
}));
