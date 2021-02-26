/** @format */
import React, { useState, useEffect } from "react";

// Next
import Head from "next/head";
// import Link from "next/link";

// Services
import request from "services/request";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// MUI Colors
import lightBlue from "@material-ui/core/colors/lightBlue";

// Misc
import ColumnList from "components/home/ColumnList";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: lightBlue["200"],
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
  username: {
    fontSize: "1rem",
    textAlign: "right",
    color: "#000",
  },
}));

function Home() {
  const classes = useStyles();

  const [username, setUsername] = useState("");

  const initialFetch = async () => {
    let whoAmI = await request("/whoami");
    whoAmI = await whoAmI.json();
    setUsername(whoAmI.username);
  };

  useEffect(() => {
    initialFetch();
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box className={classes.root}>
        <Box className={classes.header}>
          <Grid container alignItems="center">
            <Grid item xs={3}>
              <Box className={classes.headersBtns}>
                <Typography className={classes.username}>{username}</Typography>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Typography className={classes.logo}>Trello</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.main}>
          <ColumnList />
        </Box>
      </Box>
    </>
  );
}

export default Home;
