import { IconButton } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

const TaskExpandButton = ({ taskId, openTasks, handleOpenDetails }) => {
  const isOpen = openTasks.includes(taskId);
  return (
    <IconButton onClick={() => handleOpenDetails(taskId)}>
      {isOpen ? <ExpandLess /> : <ExpandMore />}
    </IconButton>
  );
};

TaskExpandButton.propTypes = {
  taskId: PropTypes.number.isRequired,
  openTasks: PropTypes.array.isRequired,
  handleOpenDetails: PropTypes.func.isRequired,
};

export default TaskExpandButton;
