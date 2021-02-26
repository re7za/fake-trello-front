/** @format */
import React from "react";

// Services
import deleteList from "services/list/deleteList";

// MUI Icons
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

// Misc
import useModal from "../useModal";

function useDeleteListModal({ column, refetch }) {
  const handleDeleteList = async () => {
    const res = await deleteList(column.id);
    if (res.status >= 200 && res.status < 300) refetch();
  };

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

  return {
    open: () => deleteListModal.open(),
    Modal: () => (
      <deleteListModal.Modal>
        <deleteListModal.Description>
          آیا از حذف لیست {`'${column.name}'`} مطمئن هستید؟
        </deleteListModal.Description>
        {column.tasks[0].id && (
          <>
            <deleteListModal.List items={["همه تسک های زیر حذف میشوند!"]} />
            <deleteListModal.Box
              title="تسک های عضو این لیست"
              items={column.tasks.map((task) => task.name)}
            />
          </>
        )}
      </deleteListModal.Modal>
    ),
  };
}

export default useDeleteListModal;
