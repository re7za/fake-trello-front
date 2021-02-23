/** @format */
import React, { useRef } from "react";

import Link from "next/link";

// Services
import signupUser from "services/signup";

// Images
// import Background from "public/images/background.jpg";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Misc
import FormControl from "lib/view-comps/PasswordInput";
import TextInput from "lib/view-comps/TextInput";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  main: {
    width: "600px",
    height: "400px",
    margin: "0px auto",
    transform: "translateY(250px)",
  },
  title: {
    fontSize: "2rem",
    textAlign: "center",
    marginTop: "30px",
    color: theme.palette.primary.main,
  },
  formContainer: {
    width: "max-content",
    margin: "30px auto",
  },
  textFieldContainer: {
    padding: theme.spacing(1.5),
  },
  buttons: {
    display: "flex",
    marginRight: "23px",
    gap: "8px",
    marginTop: "16px",
  },
  loginBtn: {
    margin: "16px",
    transform: "translateX(-8px)",
  },
}));

export default function Home() {
  const classes = useStyles();

  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const handleSignup = async () => {
    const res = await signupUser({
      username: usernameRef.current,
      password: passwordRef.current,
    });
    console.log("signup", res);
  };

  return (
    <Box className={classes.root}>
      <Paper className={classes.main} elevation={4} variant="outlined">
        <Typography className={classes.title}>ثبت نام</Typography>
        <Box className={classes.formContainer}>
          <form autoComplete="off">
            <Box className={classes.textFieldContainer}>
              <TextInput usernameRef={usernameRef} />
            </Box>
            <Box className={classes.textFieldContainer}>
              <FormControl passwordRef={passwordRef} />
            </Box>
            <Box className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSignup}
              >
                ثبت نام
              </Button>
              <Button variant="outlined" color="primary">
                <Link href="/">برگشت</Link>
              </Button>
            </Box>
          </form>
          <Box className={classes.loginBtn}>
            <Link href="/login">حساب کاربری دارم</Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
