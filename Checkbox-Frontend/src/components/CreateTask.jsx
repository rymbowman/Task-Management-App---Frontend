import {
  Box,
  Button,
  Collapse,
  FormGroup,
  IconButton,
  List,
  ListItem,
  ListItemText,
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
import DeleteIcon from "@mui/icons-material/Delete";
import SwitchBtn from "./SwitchBtn";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
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

const SwitchContainer = styled(FormGroup)({
  width: "100%",
  padding: "10px",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
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
  const [openCategoryInput, setOpenCategoryInput] = useState(false);
  const [openPriorityInput, setOpenPriorityInput] = useState(false);
  const [openDueDateInput, setOpenDueDateInput] = useState(false);
  const [openStepsInput, setOpenStepsInput] = useState(false);
  const [openNotesInput, setOpenNotesInput] = useState(false);
  const [openReminderInput, setOpenReminderInput] = useState(false);
  const [newStep, setNewStep] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "priority") {
      const priorityValue = Math.max(0, Math.min(5, Number(value)));
      setCreateTaskValues((prevValues) => ({
        ...prevValues,
        [name]: priorityValue,
      }));
    } else {
      setCreateTaskValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleDateChange = (name, date) => {
    setCreateTaskValues((prevValues) => ({
      ...prevValues,
      [name]: date ? dayjs(date).format("YYYY-MM-DD") : null,
    }));
  };

  const handleAddStep = () => {
    if (newStep.trim() !== "") {
      setCreateTaskValues((prevValues) => ({
        ...prevValues,
        steps: [...prevValues.steps, newStep],
      }));
      console.log("New step added:", createTaskValues.steps);
      setNewStep("");
    }
  };

  const handleDeleteStep = (index) => {
    setCreateTaskValues((prevValues) => ({
      ...prevValues,
      steps: prevValues.steps.filter((_, i) => i !== index),
    }));
    console.log("Step deleted:", createTaskValues.steps);
  };

  const handleSubmit = () => {
    if (createTaskValues.title.trim() === "") {
      setValidInput(false);
    } else {
      console.log("Task created:", createTaskValues);
      setCreateTaskValues({
        title: "",
        description: "",
        category: "",
        dueDate: null,
        priority: "",
        steps: [],
        notes: "",
        reminder: null,
      });
    }
  };
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
      <Collapse in={openTaskDetails} timeout="auto">
        <SwitchContainer
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <SwitchBtn
            name="category"
            value={createTaskValues.category}
            onChange={handleChange}
            icon={<CategoryIcon />}
            labelText="Category"
            onClick={() => setOpenCategoryInput(!openCategoryInput)}
          />
          <Collapse in={openCategoryInput} timeout="auto">
            <InputBox
              label="Category"
              name="category"
              value={createTaskValues.category}
              type="text"
              onChange={handleChange}
            />
          </Collapse>
          <SwitchBtn
            name="priority"
            value={createTaskValues.priority}
            onChange={handleChange}
            icon={<PriorityHighIcon />}
            labelText="Priority"
            onClick={() => setOpenPriorityInput(!openPriorityInput)}
          />
          <Collapse in={openPriorityInput} timeout="auto">
            <InputBox
              label="Priority"
              name="priority"
              value={createTaskValues.priority}
              type="number"
              onChange={handleChange}
              slotProps={{
                input: { min: 0, max: 5 },
              }}
            />
          </Collapse>
          <SwitchBtn
            name="dueDate"
            value={createTaskValues.dueDate ? createTaskValues.dueDate : ""}
            onChange={handleChange}
            icon={<CalendarMonthIcon />}
            labelText="Deadline"
            onClick={() => setOpenDueDateInput(!openDueDateInput)}
          />
          <Collapse in={openDueDateInput} timeout="auto">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box components={["DateField"]}>
                <DateField
                  label="Due by"
                  value={
                    createTaskValues.dueDate
                      ? dayjs(createTaskValues.dueDate)
                      : null
                  }
                  onChange={(date) => handleDateChange("dueDate", date)}
                />
              </Box>
            </LocalizationProvider>
          </Collapse>
          <SwitchBtn
            name="steps"
            value={createTaskValues.steps}
            onChange={handleChange}
            icon={<ChecklistIcon />}
            labelText="Steps"
            onClick={() => setOpenStepsInput(!openStepsInput)}
          />
          <Collapse in={openStepsInput} timeout="auto">
            <List
              sx={{
                width: "100%",
              }}
            >
              {Array.isArray(createTaskValues.steps) &&
              createTaskValues.steps.length > 0 ? (
                createTaskValues.steps.map((step, index) => (
                  <ListItem
                    key={index}
                    secondaryAction={
                      <IconButton
                        onClick={() => handleDeleteStep(index)}
                        color="primary"
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                    sx={{
                      display: "flex",

                      alignItems: "center",
                    }}
                  >
                    <ListItemText primary={`- ${step}`} />
                  </ListItem>
                ))
              ) : (
                <Typography variant="body2" color="textSecondary">
                  No steps added
                </Typography>
              )}
            </List>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <InputBox
                label="New Step"
                value={newStep}
                onChange={(e) => setNewStep(e.target.value)}
              />
              <Button
                onClick={handleAddStep}
                variant="contained"
                color="primary"
              >
                Add
              </Button>
            </Box>
          </Collapse>
          <SwitchBtn
            name="notes"
            value={createTaskValues.notes}
            onChange={handleChange}
            icon={<NotesIcon />}
            labelText="Notes"
            onClick={() => setOpenNotesInput(!openNotesInput)}
          />
          <Collapse in={openNotesInput} timeout="auto">
            <InputBox
              label="Notes"
              name="notes"
              value={createTaskValues.notes}
              type="text"
              onChange={handleChange}
              multiline={true}
              rows={4}
            />
          </Collapse>
          <SwitchBtn
            name="reminder"
            value={createTaskValues.reminder ? createTaskValues.reminder : ""}
            onChange={handleChange}
            icon={<NotificationAddIcon />}
            labelText="Reminder"
            onClick={() => setOpenReminderInput(!openReminderInput)}
          />
          <Collapse in={openReminderInput} timeout="auto">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box components={["DateField"]}>
                <DateField
                  label="Set Reminder"
                  value={
                    createTaskValues.reminder
                      ? dayjs(createTaskValues.reminder)
                      : null
                  }
                  onChange={(date) => handleDateChange("reminder", date)}
                />
              </Box>
            </LocalizationProvider>
          </Collapse>
        </SwitchContainer>
      </Collapse>
      <PrimaryBtn buttonText={"Create Task"} onClick={handleSubmit} />
    </TaskCreationContainer>
  );
};

export default CreateTask;
