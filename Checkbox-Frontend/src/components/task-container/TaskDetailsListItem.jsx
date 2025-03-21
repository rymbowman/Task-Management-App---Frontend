import { ListItemText } from "@mui/material";
import PropTypes from "prop-types";

const TaskDetailsListItem = ({ primaryText, secondaryText }) => {
  return (
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
  );
};

TaskDetailsListItem.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.obj,
};
export default TaskDetailsListItem;
