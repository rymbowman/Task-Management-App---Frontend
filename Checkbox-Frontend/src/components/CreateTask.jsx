import { Box, Collapse, IconButton, styled, Typography } from "@mui/material";
import InputBox from "./InputBox";
import PrimaryBtn from "./PrimaryBtn";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import dayjs from "dayjs";

const TaskCreationContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  width: "40%",
  padding: "20px",
  background: "linear-gradient(135deg, #e0f7fa 0%, #f5f5f5 100%)",
  borderRadius: "8px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
});

const CreateTask = () => {
  const [validInput, setValidInput] = useState(true);
  const [createTaskValues, setCreateTaskValues] = useState({
    title: "",
    description: "",
    category: "",
    dueDate: null,
    priority: "",
    steps: [],
    notes: "",
    reminder: null,
  });
  const [openTaskDetails, setOpenTaskDetails] = useState(false);

  return (
    <TaskCreationContainer>
      <Typography variant="h4">Create Task</Typography>
      <InputBox
        label={"Task Name"}
        name="title"
        value={createTaskValues.title}
        type="text"
        onChange={handleChange}
        isValid={validInput}
      />
      <InputBox
        label={"Task Description"}
        name="description"
        value={createTaskValues.description}
        type="text"
        onChange={handleChange}
        isValid={validInput}
        multiline={true}
        rows={2}
      />
      <IconButton onClick={() => setOpenTaskDetails(!openTaskDetails)}>
        <MoreVertIcon />
      </IconButton>
      <Collapse in={openTaskDetails} timeout="auto"></Collapse>
      <PrimaryBtn buttonText={"Create Task"} onClick={handleSubmit} />
    </TaskCreationContainer>
  );
};

export default CreateTask;
