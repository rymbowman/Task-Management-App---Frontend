import {
  Box,
  Checkbox,
  Collapse,
  List,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";
import TaskDetailsListItem from "./TaskDetailsListItem";
import { handleTaskProgress } from "./taskContainerHelpers";
import PropTypes from "prop-types";

const DropdownContainer = styled(Collapse)({
  width: "100%",
  bgcolor: "rgba(240, 240, 240, 0.8)",
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
});
const StepsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "8px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  bgcolor: "white",
});

const TaskDetailsDropdown = ({
  task,
  openTasks,
  completedSteps,
  setCompletedSteps,
}) => {
  return (
    <DropdownContainer
      in={openTasks.includes(task.id)}
      timeout="auto"
      unmountOnExit
    >
      <List
        component="div"
        disablePadding
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <TaskDetailsListItem
          primaryText="Description"
          secondaryText={task.details.description}
        />
        <TaskDetailsListItem
          primaryText="Priority"
          secondaryText={task.details.priority}
        />
        <TaskDetailsListItem
          primaryText="Notes"
          secondaryText={task.details.notes}
        />
        <StepsContainer>
          <TaskDetailsListItem primaryText="Steps" />
          <List
            component="ul"
            disablePadding
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {task.details.steps.map((step, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Checkbox
                  edge="start"
                  disableRipple
                  onChange={() =>
                    handleTaskProgress(task.id, step, setCompletedSteps)
                  }
                  checked={completedSteps[task.id]?.includes(step) || false}
                />
                <ListItemText
                  primary={step}
                  slotProps={{
                    primary: {
                      fontSize: "0.875rem",
                      color: completedSteps[task.id]?.includes(step)
                        ? "text.disabled"
                        : "text.primary",
                      textDecoration: completedSteps[task.id]?.includes(step)
                        ? "line-through"
                        : "none",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </StepsContainer>
      </List>
    </DropdownContainer>
  );
};

TaskDetailsDropdown.propTypes = {
  task: PropTypes.object,
  openTasks: PropTypes.array,
  completedSteps: PropTypes.object,
  setCompletedSteps: PropTypes.func,
};

export default TaskDetailsDropdown;
