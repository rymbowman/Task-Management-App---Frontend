import {
  Box,
  FormControlLabel,
  FormGroup,
  IconButton,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import InputBox from "./InputBox";
import PrimaryBtn from "./PrimaryBtn";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CategoryIcon from "@mui/icons-material/Category";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChecklistIcon from "@mui/icons-material/Checklist";
import NotesIcon from "@mui/icons-material/Notes";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import GroupsIcon from "@mui/icons-material/Groups";

const TaskCreationContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  width: "30%",
  background: "linear-gradient(135deg, #e0f7fa 0%, #f5f5f5 100%)",
  border: "1px solid black",
});

const SwitchContainer = styled(FormGroup)({
  width: "65%",
});
const SwitchItem = styled(FormControlLabel)({
  display: "flex",
  justifyContent: "space-between",
  margin: "0",
  padding: "2.5px 15px",
});

const LabelBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
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
      <IconButton onClick={() => console.log("More options")}>
        <MoreVertIcon />
      </IconButton>
      <SwitchContainer>
        <SwitchItem
          control={<Switch />}
          labelPlacement="start"
          name="category"
          value={createTaskValues.category}
          onChange={handleChange}
          label={
            <LabelBox>
              <CategoryIcon />
              <Typography variant="body1">Category</Typography>
            </LabelBox>
          }
        />
        <SwitchItem
          control={<Switch />}
          labelPlacement="start"
          name="priority"
          value={createTaskValues.priority}
          onChange={handleChange}
          label={
            <LabelBox display="flex">
              <PriorityHighIcon />
              <Typography variant="body1">Priority</Typography>
            </LabelBox>
          }
        />
        <SwitchItem
          control={<Switch />}
          labelPlacement="start"
          name="dueDate"
          value={createTaskValues.dueDate}
          onChange={handleChange}
          label={
            <LabelBox display="flex">
              <CalendarMonthIcon />
              <Typography variant="body1">Deadline</Typography>
            </LabelBox>
          }
        />
        <SwitchItem
          control={<Switch />}
          labelPlacement="start"
          name="steps"
          value={createTaskValues.steps}
          onChange={handleChange}
          label={
            <LabelBox display="flex">
              <ChecklistIcon />
              <Typography variant="body1">Steps</Typography>
            </LabelBox>
          }
        />
        <SwitchItem
          control={<Switch />}
          labelPlacement="start"
          name="notes"
          value={createTaskValues.notes}
          onChange={handleChange}
          label={
            <LabelBox display="flex">
              <NotesIcon />
              <Typography variant="body1">Notes</Typography>
            </LabelBox>
          }
        />
        <SwitchItem
          control={<Switch />}
          labelPlacement="start"
          name="reminder"
          value={createTaskValues.reminder}
          onChange={handleChange}
          label={
            <LabelBox display="flex">
              <NotificationAddIcon />
              <Typography variant="body1">Reminder</Typography>
            </LabelBox>
          }
        />
        <SwitchItem
          control={<Switch />}
          labelPlacement="start"
          name="collaborators"
          value={createTaskValues.collaborators}
          onChange={handleChange}
          label={
            <LabelBox display="flex">
              <GroupsIcon />
              <Typography variant="body1">Collaborators</Typography>
            </LabelBox>
          }
        />
      </SwitchContainer>
      <PrimaryBtn buttonText={"Create Task"} />
    </TaskCreationContainer>
  );
};

export default CreateTask;
