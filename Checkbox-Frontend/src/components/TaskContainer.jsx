import {
  Checkbox,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
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

  const handleOpenDetails = (taskId) => {
    if (openTasks.includes(taskId)) {
      setOpenTasks(openTasks.filter((task) => task !== taskId));
    } else {
      setOpenTasks([...openTasks, taskId]);
    }
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      subheader={<ListSubheader>Tasks</ListSubheader>}
    >
      {tasks.map((task, index) => (
        <>
          <ListItemButton key={index} value={task.id}>
            <Checkbox edge="start" tabIndex={-1} disableRipple />
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
          >
            <List component="div" disablePadding>
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
        </>
      ))}
    </List>
  );
};

export default TaskContainer;
