/** @format */
import React, { useRef } from "react";

// Services
import createTask from "services/task/createTask";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

// MUI Icons
import AssignmentIcon from "@material-ui/icons/Assignment";

// Misc
import useModal from "lib/view-comps/useModal";
import TextInput from "lib/view-comps/TextInput";

const useStyles = makeStyles((theme) => ({
  formBox: {
    maxWidth: "315px",
  },
}));

function useNewTaskModal({ columnId, refetch }) {
  const classes = useStyles();

  const newTaskNameRef = useRef("");
  const newTaskDescriptionRef = useRef("");

  // const checklist = {};

  const handleNewTask = async () => {
    if (newTaskNameRef.current === "") return;
    const res = await createTask(
      newTaskNameRef.current,
      newTaskDescriptionRef.current,
      columnId
    );
    if (res.status >= 200 && res.status < 300) {
      refetch();
    }
  };

  const newTaskModal = useModal({
    title: "تسک جدید",
    variant: "primary",
    buttons: [
      {
        label: "ذخیره",
        variant: "contained",
        onClick: handleNewTask,
      },
      {
        label: "لغو",
      },
    ],
    icon: AssignmentIcon,
  });

  return {
    open: () => newTaskModal.open(),
    Modal: () => (
      <newTaskModal.Modal>
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
    ),
  };
}

export default useNewTaskModal;