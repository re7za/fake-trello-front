/** @format */
import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

// MUI Icons
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

const useStyles = makeStyles((theme) => ({
  comment: {
    borderBottom: "1px solid #0002",
  },
}));

function Comments({ comments, setComments }) {
  const classes = useStyles();

  const handleDelete = (commentId) => {
    const tempComment = comments;
    setComments(tempComment.filter((cl, i) => i !== commentId));
  };

  return (
    <>
      {comments.map((comment, i) => (
        <Box
          key={`comment-${i}`}
          className={classes.comment}
          display="flex"
          gridGap={2}
          alignItems="center"
        >
          <Box>
            <IconButton variant="contained" onClick={() => handleDelete(i)}>
              <DeleteRoundedIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box>{comment}</Box>
        </Box>
      ))}
    </>
  );
}

export default Comments;
