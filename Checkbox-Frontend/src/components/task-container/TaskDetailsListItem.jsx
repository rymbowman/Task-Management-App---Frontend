import { ListItemText } from "@mui/material";
import PropTypes from "prop-types";

const TaskDetailsListItem = ({
  primaryText,
  secondaryText,
  isStep,
  completedSteps,
  task,
  step,
}) => {
  const stepItem = isStep;
  return (
    <>
      {stepItem ? (
        <ListItemText
          primary={primaryText}
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
      ) : (
        <ListItemText
          primary={primaryText}
          secondary={secondaryText}
          slotProps={{
            primary: {
              sx: {
                fontWeight: "bold",
                fontSize: "1rem",
              },
            },
            secondary: {
              sx: {
                fontSize: "0.875rem",
                color: "text.secondary",
              },
            },
          }}
        />
      )}
    </>
  );
};

TaskDetailsListItem.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.obj,
  isStep: PropTypes.bool.isRequired,
  completedSteps: PropTypes.obj,
  task: PropTypes.obj,
  step: PropTypes.number,
};
export default TaskDetailsListItem;
