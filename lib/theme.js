/** @format */

import { createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import deepOrange from "@material-ui/core/colors/deepOrange";

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: deepOrange,
  },
  shape: {
    borderRadius: "5px",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#f4f4f7",
        },
      },
    },
  },
});

export default theme;
