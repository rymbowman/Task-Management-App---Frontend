import { Box, Checkbox, Collapse, List, ListItem, styled } from "@mui/material";
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
  padding: "8px 0",
  backgroundColor: "transparent",
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
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <TaskDetailsListItem
          primaryText="Description"
          secondaryText={task.details.description}
          isStep={false}
        />
        <TaskDetailsListItem
          primaryText="Priority"
          secondaryText={task.details.priority}
          isStep={false}
        />
        <TaskDetailsListItem
          primaryText="Notes"
          secondaryText={task.details.notes}
          isStep={false}
        />
        <StepsContainer>
          <TaskDetailsListItem primaryText="Steps" isStep={false} />
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
                  title="Step Complete?"
                  checked={completedSteps[task.id]?.includes(step) || false}
                  onChange={() =>
                    handleTaskProgress(task.id, step, setCompletedSteps)
                  }
                />
                <TaskDetailsListItem
                  primaryText={step}
                  isStep={true}
                  completedSteps={completedSteps}
                  task={task}
                  step={step}
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
