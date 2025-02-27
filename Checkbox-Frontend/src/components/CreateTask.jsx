import {
  Box,
  Button,
  FormControlLabel,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import InputBox from "./InputBox";
import PrimaryBtn from "./PrimaryBtn";
import { useState } from "react";

const TaskCreationContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  width: "30%",
  justifyContent: "center",
  background: "linear-gradient(135deg, #e0f7fa 0%, #f5f5f5 100%)",
  border: "1px solid black",
});

const CreateTask = () => {
  const [createTaskValues, setCreateTaskValues] = useState({
    title: "",
    description: "",
    category: "",
    dueDate: "",
    priority: "",
    steps: "",
    notes: "",
    reminder: "",
    collaborators: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateTaskValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <TaskCreationContainer>
      <Typography variant="h4">Create Task</Typography>
      <InputBox
        label={"Task Name"}
        name="taskName"
        value={createTaskValues.title}
        onChange={handleChange}
      />
      <InputBox
        label={"Task Description"}
        name="taskDescription"
        value={createTaskValues.description}
        onChange={handleChange}
      />
      <FormControlLabel control={<Switch />} label="Category" />
      <FormControlLabel control={<Switch />} label="Priority" />
      <FormControlLabel control={<Switch />} label="Deadline" />
      <FormControlLabel control={<Switch />} label="Steps" />
      <FormControlLabel control={<Switch />} label="Notes" />
      <FormControlLabel control={<Switch />} label="Reminder" />
      <FormControlLabel control={<Switch />} label="Collaborators" />
      <PrimaryBtn buttonText={"Create Task"} />
    </TaskCreationContainer>
  );
};

export default CreateTask;
