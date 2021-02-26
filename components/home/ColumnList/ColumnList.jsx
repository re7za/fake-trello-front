/** @format */
import React, { useState, useRef, useEffect } from "react";

// Services
import createList from "services/list/createList";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// MUI Icons
import ListIcon from "@material-ui/icons/List";

// Misc
import Column from "components/home/Column";
import useModal from "lib/view-comps/useModal";
import TextInput from "lib/view-comps/TextInput";

// Services
import request from "services/request";

const useStyles = makeStyles((theme) => ({
  container: {
    overflowX: "scroll",
    flexWrap: "nowrap",
    padding: "8px 0px",
    height: "91vh",
    width: "unset",
    margin: "unset",
  },
  newTask: {
    width: "248px",
    margin: "8px",
  },
}));

function ColumnList() {
  const classes = useStyles();

  const [columns, setColumns] = useState([]);
  const newTaskNameRef = useRef("");

  const initialFetch = async () => {
    let res = await request("/list");
    res = await res.json();
    setColumns(res.lists);
  };

  const handleNewList = async () => {
    if (newTaskNameRef.current === "") return;
    const res = await createList(newTaskNameRef.current);
    if (res.status >= 200 && res.status < 300) {
      initialFetch();
    }
  };

  const newListModal = useModal({
    title: "لیست جدید",
    variant: "primary",
    buttons: [
      {
        label: "ساختن",
        variant: "contained",
        onClick: handleNewList,
      },
      {
        label: "لغو",
      },
    ],
    icon: ListIcon,
  });

  useEffect(() => {
    initialFetch();
  }, []);

  return (
    <>
      <newListModal.Modal>
        <newListModal.Description>
          نام لیست جدید را وارد کنید.
        </newListModal.Description>
        <Box>
          <form autoComplete="off">
            <TextInput valueRef={newTaskNameRef} label="نام لیست" rtl />
          </form>
        </Box>
      </newListModal.Modal>
      {columns ? (
        <Grid
          container
          className={classes.container}
          spacing={2}
          direction="row-reverse"
        >
          {columns.map((col, i) => (
            <Grid key={`col-${i}`} item>
              <Column column={col} refetch={initialFetch} />
            </Grid>
          ))}
          <Grid>
            <Button
              className={classes.newTask}
              variant="contained"
              color="secondary"
              onClick={() => newListModal.open()}
            >
              ستون جدید
            </Button>
          </Grid>
        </Grid>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default ColumnList;
