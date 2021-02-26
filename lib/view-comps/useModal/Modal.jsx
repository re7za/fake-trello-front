import React, { useState, useEffect } from "react";

import clsx from "clsx";

// MUI
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

// MUI Colors
import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";

// Misc
import { useStyles } from "./style";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = (props) => {
  const classes = useStyles();

  const {
    id,
    open,
    close,
    onClose,
    title,
    Icon,
    variant,
    buttons,
    children,
  } = props;

  const [isDialogOpen, setIsDialogOpen] = useState(open);

  const titleId = "alert-dialog-slide-title" + id;

  const backdropClass =
    variant === "danger"
      ? "dangerBackdrop"
      : variant === "warning"
      ? "warningBackdrop"
      : "defaultBackdrop";

  let variantColor;
  switch (variant) {
    case "success":
      variantColor = green["700"];
      break;

    case "warning":
      variantColor = orange["500"];
      break;

    case "danger":
      variantColor = red["900"];
      break;

    case "info":
      variantColor = blue["500"];
      break;

    default:
      break;
  }

  let customTheme;
  if (variantColor) {
    customTheme = createMuiTheme({
      palette: {
        primary: {
          main: variantColor,
          contrastText: "#fff",
        },
      },
    });
  }

  const handleOnClose = () => {
    setIsDialogOpen(false);
    setTimeout(close, 100);
    if (typeof onClose !== "undefined") onClose();
  };

  const handleButtonClick = (onClick) => {
    if (typeof onClick !== "undefined") onClick();
    handleOnClose();
  };

  useEffect(() => {
    setIsDialogOpen(open);
  }, [open]);

  return (
    <Backdrop
      open={isDialogOpen}
      className={clsx(classes.backdrop, classes[backdropClass])}
    >
      <Dialog
        open={isDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleOnClose}
        aria-labelledby={titleId}
      >
        <DialogTitle
          id={titleId}
          className={clsx(classes.dialogTitle, classes[`${variant}Color`])}
        >
          {Icon && <Icon />}
          {title}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions className={classes.buttons}>
          {customTheme ? (
            <MuiThemeProvider theme={customTheme}>
              {buttons?.map((btn, i) => (
                <Button
                  key={`modalBtn${i}`}
                  {...btn}
                  color={
                    btn.color
                      ? btn.color
                      : btn.variant === "contained"
                      ? "primary"
                      : "default"
                  }
                  onClick={() => handleButtonClick(btn.onClick)}
                >
                  {btn.label}
                </Button>
              ))}
            </MuiThemeProvider>
          ) : (
            buttons?.map((btn, i) => {
              return (
                <Button
                  key={`modalBtn${i}`}
                  {...btn}
                  color={
                    btn.variant === "contained"
                      ? btn.color
                        ? btn.color
                        : variant === "secondary"
                        ? "secondary"
                        : "primary"
                      : btn.color
                      ? btn.color
                      : "default"
                  }
                  onClick={() => handleButtonClick(btn.onClick)}
                >
                  {btn.label}
                </Button>
              );
            })
          )}
        </DialogActions>
      </Dialog>
    </Backdrop>
  );
};

export default Modal;
