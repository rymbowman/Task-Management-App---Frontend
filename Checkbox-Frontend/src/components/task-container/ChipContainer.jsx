import { Chip, Paper } from "@mui/material";
import PropTypes from "prop-types";

const ChipContainer = ({
  resetFilter,
  groupByCategory,
  tasks,
  activeChip,
  uniqueCategories,
  setFilteredTasks,
  setActiveChip,
}) => {
  return (
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
        onClick={() => resetFilter(tasks, setFilteredTasks, setActiveChip)}
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
          onClick={() =>
            groupByCategory(tasks, category, setFilteredTasks, setActiveChip)
          }
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
  );
};

ChipContainer.propTypes = {
  resetFilter: PropTypes.func.isRequired,
  groupByCategory: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  activeChip: PropTypes.string.isRequired,
  uniqueCategories: PropTypes.array.isRequired,
  setFilteredTasks: PropTypes.func.isRequired,
  setActiveChip: PropTypes.func.isRequired,
};

export default ChipContainer;
