import {
  Box,
  Collapse,
  FormGroup,
  IconButton,
  styled,
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
import SwitchBtn from "./SwitchBtn";

const TaskCreationContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  width: "30%",
  background: "linear-gradient(135deg, #e0f7fa 0%, #f5f5f5 100%)",
});

const SwitchContainer = styled(FormGroup)({
  width: "65%",
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
  const [openTaskDetails, setOpenTaskDetails] = useState(false);

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
      <IconButton onClick={() => setOpenTaskDetails(!openTaskDetails)}>
        <MoreVertIcon />
      </IconButton>
      <Collapse in={openTaskDetails} timeout="auto">
        <SwitchContainer>
          <SwitchBtn
            name="category"
            value={createTaskValues.category}
            onChange={handleChange}
            icon={<CategoryIcon />}
            labelText="Category"
          />
          <SwitchBtn
            name="priority"
            value={createTaskValues.priority}
            onChange={handleChange}
            icon={<PriorityHighIcon />}
            labelText="Priority"
          />
          <SwitchBtn
            name="dueDate"
            value={createTaskValues.dueDate}
            onChange={handleChange}
            icon={<CalendarMonthIcon />}
            labelText="Deadline"
          />
          <SwitchBtn
            name="steps"
            value={createTaskValues.steps}
            onChange={handleChange}
            icon={<ChecklistIcon />}
            labelText="Steps"
          />
          <SwitchBtn
            name="notes"
            value={createTaskValues.notes}
            onChange={handleChange}
            icon={<NotesIcon />}
            labelText="Notes"
          />
          <SwitchBtn
            name="reminder"
            value={createTaskValues.reminder}
            onChange={handleChange}
            icon={<NotificationAddIcon />}
            labelText="Reminder"
          />
          <SwitchBtn
            name="collaborators"
            value={createTaskValues.collaborators}
            onChange={handleChange}
            icon={<GroupsIcon />}
            labelText="Collaborators"
          />
        </SwitchContainer>
      </Collapse>
      <PrimaryBtn buttonText={"Create Task"} />
    </TaskCreationContainer>
  );
};

export default CreateTask;
