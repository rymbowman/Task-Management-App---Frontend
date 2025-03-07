import { Box, Fab, Modal, styled, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import CreateTask from "./CreateTask";

const ModalMainContainer = styled(Modal)({
  position: "fixed",
  margin: "auto",
  width: "50%",
  height: "90%",
  borderRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
});

const ModalContentContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  alignItems: "center",
  overflow: "auto",
  borderRadius: "10px",
  gap: "15px",
});
const TaskModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip title="Add Task">
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <ModalMainContainer open={open} onClose={handleClose}>
        <ModalContentContainer>
          <CreateTask handleClose={handleClose} />
        </ModalContentContainer>
      </ModalMainContainer>
    </>
  );
};

export default TaskModal;
