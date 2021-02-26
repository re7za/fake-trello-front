import React from "react";

// MUI
import Typography from "@material-ui/core/Typography";

// Misc
import { publicStyle } from "./publicStyle";

const Description = ({ children }) => {
  const publicClasses = publicStyle();

  return (
    <Typography className={publicClasses.description}>{children}</Typography>
  );
};

export default Description;
