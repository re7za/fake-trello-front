/** @format */

import React from "react";
import PropTypes from "prop-types";

import Head from "next/head";

// MUI
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// Misc
import theme from "lib/theme";
import "styles/globals.css";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0px",
      height: "0px",
      borderRadius: "5px",
      [theme.breakpoints.up("sm")]: {
        width: "0px",
        height: "0px",
      },
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      borderRadius: "5px",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#bbb",
      outline: "0px solid #444",
      borderRadius: "5px",
    },
  },
}));

export default function MyApp(props) {
  const { Component, pageProps } = props;
  /* eslint-disable */
  const classes = useStyles();
  /* eslint-enable */

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Trello</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} dir="rtl" />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
