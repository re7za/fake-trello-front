/** @format */
import React from "react";

import Link from "next/link";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "url('images/background.jpg')",
  },
  header: {
    padding: theme.spacing(2),
    background: "#fffc",
  },
  headersBtns: {
    display: "flex",
    justifyContent: "flex-start",
    gap: `${theme.spacing(1)}px`,
  },
  logo: {
    textAlign: "left",
    fontSize: "2rem",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  main: {
    textAlign: "center",
    transform: "translateY(380px)",
  },
  mainText: {
    fontSize: "2.8rem",
    color: theme.palette.primary.main,
    marginBottom: "32px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <Box className={classes.headersBtns}>
              <Button size="large" variant="contained" color="primary">
                <Link href="/signup">ثبت نام</Link>
              </Button>
              <Button size="large" variant="outlined" color="primary">
                <Link href="/login">ورود</Link>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Typography className={classes.logo}>Trello</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.main}>
        <Typography className={classes.mainText}>
          موفقیت برنامه میخواهد..
        </Typography>
        <Button size="large" variant="contained" color="primary">
          <Link href="/signup">همین حالا رایگان ثبت نام کن!</Link>
        </Button>
      </Box>
    </Box>
  );
}
