/** @format */
import React, { useRef } from "react";

// Services
import createTask from "services/task/createTask";
import deleteList from "services/list/deleteList";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

// MUI Icons
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import AssignmentIcon from "@material-ui/icons/Assignment";

// Misc
import Task from "../Task";
import useModal from "../useModal";
import TextInput from "../TextInput";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "760px",
    width: "250px",
    backgroundColor: "#fff",
    position: "relative",
  },
  header: {
    postion: "relative",
  },
  title: {
    padding: "8px",
  },
  deleteBox: {
    position: "absolute",
    left: theme.spacing(0.75),
    top: theme.spacing(0.25),
  },
  deleteBtn: {
    padding: theme.spacing(1),
  },
  taskContainer: {
    padding: "0px 0px 32px",
    overflowY: "scroll",
    maxHeight: "694px",
  },
  newTask: {
    width: "100%",
    position: "absolute",
    bottom: "0px",
  },
  formBox: {
    maxWidth: "315px",
  },
}));

function Column({ column, refetch }) {
  const classes = useStyles();

  const newTaskNameRef = useRef("");
  const newTaskDescriptionRef = useRef("");

  const handleNewTask = async () => {
    if (newTaskNameRef.current === "") return;
    const res = await createTask(
      newTaskNameRef.current,
      newTaskDescriptionRef.current,
      column.id
    );
    if (res.status >= 200 && res.status < 300) {
      refetch();
    }
  };

  const handleDeleteList = async () => {
    const res = await deleteList(column.id);
    if (res.status >= 200 && res.status < 300) refetch();
  };

  const newTaskModal = useModal({
    title: "تسک جدید",
    variant: "primary",
    buttons: [
      {
        label: "ساختن",
        variant: "contained",
        onClick: handleNewTask,
      },
      {
        label: "لغو",
      },
    ],
    icon: AssignmentIcon,
  });

  const deleteListModal = useModal({
    title: "حذف لیست",
    variant: "danger",
    buttons: [
      {
        label: "حذف",
        variant: "contained",
        onClick: handleDeleteList,
      },
      {
        label: "لغو",
      },
    ],
    icon: DeleteRoundedIcon,
  });

  return (
    <>
      <newTaskModal.Modal>
        <newTaskModal.Description>
          نام تسک جدید را وارد کنید.
        </newTaskModal.Description>
        <Box className={classes.formBox}>
          <form autoComplete="off">
            <TextInput valueRef={newTaskNameRef} label="نام تسک" rtl />
            <TextInput
              valueRef={newTaskDescriptionRef}
              label="توضیحات تسک"
              rtl
            />
          </form>
        </Box>
      </newTaskModal.Modal>
      <deleteListModal.Modal>
        <deleteListModal.Description>
          آیا از حذف لیست {column.name} مطمئن هستید؟
        </deleteListModal.Description>
        {column.tasks.length && (
          <>
            <deleteListModal.List items={["همه تسک های زیر حذف میشوند!"]} />
            <deleteListModal.Box
              title="تسک های عضو این لیست"
              items={column.tasks.map((task) => task.name)}
            />
          </>
        )}
      </deleteListModal.Modal>
      <Paper className={classes.root} elevation={0} variant="outlined">
        <Box className={classes.header}>
          <Typography className={classes.title}>{column.name}</Typography>
          <Box className={classes.deleteBox}>
            <IconButton
              aria-label="delete"
              className={classes.deleteBtn}
              onClick={() => deleteListModal.open()}
            >
              <DeleteRoundedIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Divider className={classes.divider} />
        <Box className={classes.taskContainer}>
          {column.tasks.map((task, i) => (
            <Box key={`task-${i}`}>
              {task.id ? <Task task={task} refetch={refetch} /> : ""}
            </Box>
          ))}
        </Box>
        <Button
          className={classes.newTask}
          variant="contained"
          color="secondary"
          onClick={() => newTaskModal.open()}
        >
          تسک جدید
        </Button>
      </Paper>
    </>
  );
}

export default Column;
