import { makeStyles } from "@material-ui/core/styles";

// MUI Colors
import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";

export const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    "& .MuiTypography-root.MuiTypography-h6": {
      display: "flex",
      alignItems: "center",
      gap: `${theme.spacing(1.5)}px`,
      "& .MuiSvgIcon-root": {
        fontSize: "2.5rem",
      },
    },
  },
  description: {
    color: "rgba(0, 0, 0, 0.70)",
  },
  buttons: {
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
    justifyContent: "flex-start",
  },
  primaryColor: {
    color: theme.palette.primary.main,
  },
  secondaryColor: {
    color: theme.palette.secondary.main,
  },
  successColor: {
    color: green["700"],
  },
  warningColor: {
    color: orange["500"],
  },
  dangerColor: {
    color: red["900"],
  },
  infoColor: {
    color: blue["500"],
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    transition: "300ms",
  },
  defaultBackdrop: {
    background: "#00000001",
  },
  warningBackdrop: {
    background:
      "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(255,167,38,0.60) 100%)",
  },
  dangerBackdrop: {
    background:
      "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(255,67,54,0.60) 100%)",
  },
}));
