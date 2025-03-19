import {
  Box,
  Checkbox,
  Chip,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Tooltip,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const tasks = [
  {
    id: 1,
    title: "Walk the dog",
    details: {
      description: "Take the dog for a walk around the block",
      category: "Personal",
      dueDate: "2021-12-01",
      priority: "4",
      steps: ["Put on shoes", "Grab leash", "Walk dog"],
      notes: "Make sure to bring water for the dog",
      reminder: "2021-12-01",
    },
  },
  {
    id: 2,
    title: "Cut the grass",
    details: {
      description: "Mow the lawn",
      category: "Home",
      dueDate: "2021-12-01",
      priority: "3",
      steps: ["Get lawnmower", "Mow lawn"],
      notes: "Make sure to wear sunscreen",
      reminder: "2021-12-01",
    },
  },
  {
    id: 3,
    title: "Go to the store",
    details: {
      description: "Buy groceries",
      category: "Personal",
      dueDate: "2021-12-01",
      priority: "2",
      steps: ["Make a list", "Drive to store", "Buy groceries"],
      notes: "Don't forget the milk",
      reminder: "2021-12-01",
    },
  },
  {
    id: 4,
    title: "Do laundry",
    details: {
      description: "Wash clothes",
      category: "Home",
      dueDate: "2021-12-01",
      priority: "1",
      steps: ["Sort clothes", "Wash clothes", "Dry clothes"],
      notes: "Don't mix colors",
      reminder: "2021-12-01",
    },
  },
  {
    id: 5,
    title: "Clean the house",
    details: {
      description: "Dust and vacuum",
      category: "Home",
      dueDate: "2021-12-01",
      priority: "4",
      steps: ["Dust furniture", "Vacuum floors"],
      notes: "Don't forget to clean the bathroom",
      reminder: "2021-12-01",
    },
  },
];
const TaskContainer = () => {
  const [openTasks, setOpenTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [activeChip, setActiveChip] = useState("All");

  const uniqueCategories = [
    ...new Set(tasks.map((task) => task.details.category)),
  ];

  const handleOpenDetails = (taskId) => {
    if (openTasks.includes(taskId)) {
      setOpenTasks(openTasks.filter((task) => task !== taskId));
    } else {
      setOpenTasks([...openTasks, taskId]);
    }
  };

  const groupByCategory = (category) => {
    const filtered = tasks.filter((task) => task.details.category === category);
    setFilteredTasks(filtered);
    setActiveChip(category);
  };

  const resetFilter = () => {
    setFilteredTasks(tasks);
    setActiveChip("All");
  };

  return (
    <Box
      sx={{
        border: "1px solid black",
        width: "100%",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        component="ul"
      >
        <Chip
          label="All"
          value="All"
          variant="outlined"
          clickable
          onClick={resetFilter}
          sx={{
            margin: 0.5,
            cursor: "pointer",
            color: activeChip === "All" ? "primary.main" : "text.primary",
            backgroundColor:
              activeChip === "All" ? "rgba(0, 0, 0, 0.1)" : "inherit",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              color: "primary.main",
            },
          }}
        />
        {uniqueCategories.map((category, index) => (
          <Chip
            key={index}
            variant="outlined"
            label={category}
            value={category}
            clickable
            onClick={() => groupByCategory(category)}
            sx={{
              margin: 0.5,
              cursor: "pointer",
              color: activeChip === category ? "primary.main" : "text.primary",
              backgroundColor:
                activeChip === category ? "rgba(0, 0, 0, 0.1)" : "inherit",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                color: "primary.main",
              },
            }}
          />
        ))}
      </Paper>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          height: "350px",
          overflowY: "auto",
        }}
        component="nav"
      >
        {filteredTasks.map((task) => (
          <ListItem
            key={task.id}
            disablePadding
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ListItemButton value={task.id} sx={{ width: "100%" }}>
              <Tooltip title="Task Completed?" placement="bottom">
                <Checkbox edge="start" tabIndex={-1} disableRipple />
              </Tooltip>
              <ListItemText primary={task.title} />
              {openTasks.includes(task.id) ? (
                <IconButton onClick={() => handleOpenDetails(task.id)}>
                  <ExpandLess />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => handleOpenDetails(task.id)}
                  value={task.id}
                >
                  <ExpandMore />
                </IconButton>
              )}
            </ListItemButton>
            <Collapse
              in={openTasks.includes(task.id)}
              timeout="auto"
              unmountOnExit
              sx={{
                width: "100%",
              }}
            >
              <List
                component="div"
                disablePadding
                sx={{
                  width: "60%",
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ListItemText
                  primary={`Description: ${task.details.description}`}
                />
                <ListItemText primary={`Category: ${task.details.category}`} />
                <ListItemText primary={`Due Date: ${task.details.dueDate}`} />
                <ListItemText primary={`Priority: ${task.details.priority}`} />
                <ListItemText
                  primary={`Steps: ${task.details.steps.join(", ")}`}
                />
                <ListItemText primary={`Notes: ${task.details.notes}`} />
                <ListItemText primary={`Reminder: ${task.details.reminder}`} />
              </List>
            </Collapse>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskContainer;
