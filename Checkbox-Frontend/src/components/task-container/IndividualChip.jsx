import { Chip } from "@mui/material";
import PropTypes from "prop-types";

const IndividualChip = ({ label, onClick, activeChip }) => {
  const isActive = activeChip === label;

  return (
    <Chip
      label={label}
      variant="outlined"
      clickable
      onClick={onClick}
      sx={{
        margin: 0.5,
        cursor: "pointer",
        color: isActive ? "primary.main" : "text.primary",
        backgroundColor: isActive ? "rgba(0, 0, 0, 0.1)" : "inherit",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          color: "primary.main",
        },
      }}
    />
  );
};

IndividualChip.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  activeChip: PropTypes.string.isRequired,
};

export default IndividualChip;
