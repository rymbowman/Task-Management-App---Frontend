import { Paper, styled } from "@mui/material";
import PropTypes from "prop-types";
import IndividualChip from "./IndividualChip";

const ChipBag = styled(Paper)({
  maxWidth: "50%",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "0.5rem",
  borderRadius: "8px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
});

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
    <ChipBag elevation={2} component="div">
      <IndividualChip
        label="All"
        onClick={() => resetFilter(tasks, setFilteredTasks, setActiveChip)}
        activeChip={activeChip}
      />
      {uniqueCategories.map((category, index) => (
        <IndividualChip
          key={index}
          label={category}
          onClick={() =>
            groupByCategory(tasks, category, setFilteredTasks, setActiveChip)
          }
          activeChip={activeChip}
        />
      ))}
    </ChipBag>
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
