/** @format */
import React, { useState, useEffect } from "react";

// Services
import getTask from "services/task/getTask";
import changeTaskStatus from "services/task/changeTaskStatus";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

// Misc
import Checklists from "../Checklists";
import Comments from "../Comments";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "600px",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  textField: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  title: {
    width: "300px",
  },
  desContainer: {
    width: "550px",
  },
  description: {
    width: "540px",
  },
  saveBtn: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
  },
  statusBtn: {
    position: "absolute",
    top: "0px",
    left: "0px",
  },
}));

function ExpandedTask(props) {
  const { onUpdateTask, close, taskId, refetch } = props;
  const classes = useStyles();

  const [isDone, setIsDone] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [newChecklistTitle, setNewChecklistTitle] = useState("");
  const [newComment, setNewComment] = useState("");

  const [checklists, setChecklists] = useState([]);
  const [comments, setComments] = useState([]);

  const handleAddChecklist = () => {
    setChecklists([...checklists, newChecklistTitle]);
    setNewChecklistTitle("");
  };

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleSaveTask = () => {
    const task = {
      name: taskName,
      description: taskDescription,
      checklists,
      comments,
      isDone,
    };
    onUpdateTask(task);
    close();
  };

  const handleIsTaskDone = async () => {
    const _isDone = isDone;
    const res = await changeTaskStatus(taskId, _isDone === 0 ? 1 : 0);
    setIsDone(_isDone === 0 ? 1 : 0);
    if (res.status !== 200) {
      setIsDone(_isDone);
    } else refetch();
  };

  const fetchTask = async (taskId) => {
    const res = await getTask(taskId);
    if (res.status !== 200) return;

    setTaskName(res.data.task.name);
    setTaskDescription(res.data.task.description);
    setChecklists(res.data.checklists.map((ch) => ch.title));
    setComments(res.data.comments.map((com) => com.content));
    setIsDone(res.data.task.isDone);
  };

  useEffect(() => {
    if (taskId) {
      fetchTask(taskId);
    }
  }, []);

  return (
    <>
      <Box position="relative">
        <Box pb={2}>وضعیت: {isDone ? "تمام شده" : "در حال انجام"}</Box>
        <Button
          disabled={!taskName}
          className={classes.statusBtn}
          variant="contained"
          color="primary"
          onClick={() => handleIsTaskDone()}
        >
          {isDone ? "doing" : "done"}
        </Button>
      </Box>
      <Box className={classes.root}>
        <Box>
          <Typography variant="body1">مشخصات کلی</Typography>
          <Box display="flex" flexDirection="row" gap={2}>
            <form autoComplete="off">
              <Box className={classes.title}>
                <TextField
                  className={classes.textField}
                  dir="rtl"
                  label="نام تسک"
                  value={taskName}
                  onChange={(newVal) => setTaskName(newVal.target.value)}
                />
              </Box>
              <Box className={classes.desContainer}>
                <Box className={classes.description}>
                  <TextField
                    className={classes.textField}
                    dir="rtl"
                    multiline
                    rows={1}
                    rowsMax={3}
                    label="توضیحات تسک"
                    value={taskDescription}
                    onChange={(newVal) =>
                      setTaskDescription(newVal.target.value)
                    }
                  />
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
        <Box py={2}>
          <Divider />
        </Box>
        <Box my={3}>
          <Box my={1}>
            <Typography variant="body1">چک لیست ها</Typography>
          </Box>
          <Checklists checklists={checklists} setChecklists={setChecklists} />
          <Box
            className={classes.checklist}
            my={1}
            display="flex"
            gridGap={2}
            alignItems="center"
          >
            <Box>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                disabled={!newChecklistTitle}
                onClick={handleAddChecklist}
              >
                افزودن
              </Button>
            </Box>
            <Box width="300px">
              <form noValidate autoComplete="off">
                <TextField
                  className={classes.textField}
                  dir="rtl"
                  label="..چک لیست جدید"
                  value={newChecklistTitle}
                  onChange={(newVal) =>
                    setNewChecklistTitle(newVal.target.value)
                  }
                />
              </form>
            </Box>
          </Box>
        </Box>
        <Box py={2}>
          <Divider />
        </Box>
        <Box my={3}>
          <Box my={1}>
            <Typography variant="body1">کامنت ها</Typography>
          </Box>
          <Comments comments={comments} setComments={setComments} />
          <Box
            className={classes.comment}
            my={1}
            display="flex"
            gridGap={2}
            alignItems="center"
          >
            <Box>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                disabled={!newComment}
                onClick={handleAddComment}
              >
                ارسال
              </Button>
            </Box>
            <Box width="300px">
              <form noValidate autoComplete="off">
                <TextField
                  className={classes.textField}
                  dir="rtl"
                  multiline
                  rows={1}
                  rowsMax={3}
                  label="..نظر خود را بنویسید"
                  value={newComment}
                  onChange={(newVal) => setNewComment(newVal.target.value)}
                />
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box position="relative">
        <Button
          disabled={!taskName}
          className={classes.saveBtn}
          variant="contained"
          color="primary"
          onClick={() => handleSaveTask()}
        >
          ذخیره
        </Button>
      </Box>
    </>
  );
}

export default ExpandedTask;
