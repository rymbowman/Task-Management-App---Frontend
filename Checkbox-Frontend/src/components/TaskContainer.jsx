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
  MobileStepper,
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
      dueDate: "2026-12-01",
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
      dueDate: "2026-12-01",
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
  const [completedTasks, setCompletedTasks] = useState([]);
  const [completedSteps, setCompletedSteps] = useState({});

  const currentDate = new Date().toISOString().split("T")[0];

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

  const handleCompletedTask = (e) => {
    const taskId = Number(e.target.value);
    if (completedTasks.includes(taskId)) {
      setCompletedTasks(completedTasks.filter((task) => task !== taskId));
    } else {
      setCompletedTasks([...completedTasks, taskId]);
    }
  };

  // function to update individual progress bar on step completion
  const handleTaskProgress = (taskId, step) => {
    setCompletedSteps((prev) => {
      const taskSteps = prev[taskId] || [];
      if (taskSteps.includes(step)) {
        return {
          ...prev,
          [taskId]: taskSteps.filter((s) => s !== step),
        };
      } else {
        return {
          ...prev,
          [taskId]: [...taskSteps, step],
        };
      }
    });
  };

  return (
    <Box
      sx={{
        border: "1px solid black",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          width: "80%",
          bgcolor: "background.paper",
          height: "350px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
          gap: "10px",
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
              borderRadius: "8px",
              border:
                task.details.dueDate < currentDate
                  ? "2px solid red"
                  : "1px solid rgba(0, 0, 0, 0.1)",
              backgroundColor:
                task.details.dueDate < currentDate
                  ? "rgba(255, 0, 0, 0.1)"
                  : "inherit",
            }}
          >
            <ListItemButton
              value={task.id}
              sx={{ width: "100%" }}
              disableRipple
            >
              <Tooltip title="Task Completed?" placement="bottom">
                <Checkbox
                  edge="start"
                  value={task.id}
                  checked={completedTasks.includes(task.id) ? true : false}
                  onChange={handleCompletedTask}
                />
              </Tooltip>
              <ListItemText primary={task.title} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ListItemText
                  primary={`Due: ${task.details.dueDate}`}
                  sx={{
                    textAlign: "right",
                    color: "gray",
                    fontSize: ".875rem",
                  }}
                />
                <MobileStepper
                  variant="progress"
                  steps={task.details.steps.length + 1}
                  position="static"
                  activeStep={completedSteps[task.id]?.length || 0}
                  sx={{ maxWidth: 200, flexGrow: 1 }}
                  slotProps={{
                    root: {
                      sx: {
                        backgroundColor: "transparent",
                        "& .MuiMobileStepper-progress": {
                          width: "100%",
                        },
                      },
                    },
                  }}
                />
              </Box>

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
                <ListItemText primary={`Priority: ${task.details.priority}`} />
                <List
                  component="ul"
                  disablePadding
                  sx={{
                    width: "60%",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "7.5px",
                  }}
                >
                  {task.details.steps.map((step, index) => (
                    <ListItem
                      key={index}
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          disableRipple
                          onChange={() => handleTaskProgress(task.id, step)}
                          checked={
                            completedSteps[task.id]?.includes(step) || false
                          }
                          value={index}
                        />
                      }
                      disablePadding
                    >
                      {step}
                    </ListItem>
                  ))}
                </List>
                <ListItemText primary={`Notes: ${task.details.notes}`} />
              </List>
            </Collapse>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskContainer;
