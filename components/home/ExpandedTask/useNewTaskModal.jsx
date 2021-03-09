/** @format */
import React from "react";

// Services
import createTask from "services/task/createTask";

// MUI
// import { makeStyles } from "@material-ui/core/styles";

// MUI Icons
import AssignmentIcon from "@material-ui/icons/Assignment";

// Lib
import useModal from "lib/view-comps/useModal";

// Misc
import ExpandedTask from "../ExpandedTask";

function useNewTaskModal({ columnId, refetch }) {
  const handleNewTask = async (task) => {
    if (!task.name) return;
    const res = await createTask(task, columnId);
    if (res.status >= 200 && res.status < 300) {
      console.log(res);
      refetch();
    }
  };

  const newTaskModal = useModal({
    title: "تسک جدید",
    variant: "primary",
    buttons: [
      {
        label: "بستن",
      },
    ],
    icon: AssignmentIcon,
  });

  return {
    open: () => {
      newTaskModal.open();
    },
    close: () => newTaskModal.close(),
    Modal: () => (
      <newTaskModal.Modal>
        <ExpandedTask
          onNewTask={handleNewTask}
          close={newTaskModal.close}
          refetch={refetch}
        />
      </newTaskModal.Modal>
    ),
  };
}

export default useNewTaskModal;
