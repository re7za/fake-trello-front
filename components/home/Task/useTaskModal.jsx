/** @format */
import React from "react";

// Services
import updateTask from "services/task/updateTask";

// MUI Icons
import AssignmentIcon from "@material-ui/icons/Assignment";

// Lib
import useModal from "lib/view-comps/useModal";

// Misc
import ExpandedTask from "../ExpandedTask";

function useTaskModal({ taskId, refetch }) {
  const handleUpdateTask = async (task) => {
    if (!task.name) return;
    const res = await updateTask(taskId, task);
    if (res.status >= 200 && res.status < 300) {
      refetch();
    }
  };

  const TaskModal = useModal({
    title: "ویرایش تسک",
    variant: "primary",
    buttons: [
      {
        label: "بستن",
      },
    ],
    icon: AssignmentIcon,
  });

  return {
    open: () => TaskModal.open(),
    close: () => TaskModal.close(),
    Modal: () => (
      <TaskModal.Modal>
        <ExpandedTask
          onUpdateTask={handleUpdateTask}
          close={TaskModal.close}
          taskId={taskId}
          refetch={refetch}
        />
      </TaskModal.Modal>
    ),
  };
}

export default useTaskModal;
