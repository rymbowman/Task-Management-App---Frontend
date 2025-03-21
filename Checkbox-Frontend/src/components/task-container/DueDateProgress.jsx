import { Box, ListItemText, MobileStepper } from "@mui/material";
import PropTypes from "prop-types";

const DueDateProgress = ({ task, completedSteps }) => {
  return (
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
  );
};

DueDateProgress.propTypes = {
  task: PropTypes.object.isRequired,
  completedSteps: PropTypes.object.isRequired,
};
export default DueDateProgress;
