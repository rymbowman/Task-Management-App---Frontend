import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { handleCompletedTask, handleOpenDetails } from "./taskContainerHelpers";
import PropTypes from "prop-types";
import TaskDetailsDropdown from "./TaskDetailsDropdown";
import DueDateProgress from "./DueDateProgress";

const IndividualTask = ({
  task,
  completedTasks,
  setCompletedTasks,
  completedSteps,
  setCompletedSteps,
  openTasks,
  setOpenTasks,
}) => {
  const currentDate = new Date().toISOString().split("T")[0];
  return (
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
      <ListItemButton value={task.id} sx={{ width: "100%" }} disableRipple>
        <Checkbox
          title="Task Completed?"
          value={task.id}
          checked={completedTasks.includes(task.id) ? true : false}
          onChange={(e) =>
            handleCompletedTask(e, completedTasks, setCompletedTasks)
          }
        />

        <ListItemText primary={task.title} />
        <DueDateProgress task={task} completedSteps={completedSteps} />
        {openTasks.includes(task.id) ? (
          <IconButton
            onClick={() => handleOpenDetails(task.id, openTasks, setOpenTasks)}
          >
            <ExpandLess />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => handleOpenDetails(task.id, openTasks, setOpenTasks)}
            value={task.id}
          >
            <ExpandMore />
          </IconButton>
        )}
      </ListItemButton>
      <TaskDetailsDropdown
        task={task}
        openTasks={openTasks}
        completedSteps={completedSteps}
        setCompletedSteps={setCompletedSteps}
      />
    </ListItem>
  );
};

IndividualTask.propTypes = {
  task: PropTypes.object.isRequired,
  completedTasks: PropTypes.array.isRequired,
  setCompletedTasks: PropTypes.func.isRequired,
  completedSteps: PropTypes.object.isRequired,
  setCompletedSteps: PropTypes.func.isRequired,
  openTasks: PropTypes.array.isRequired,
  setOpenTasks: PropTypes.func.isRequired,
};

export default IndividualTask;
