import { styled, ToggleButton, ToggleButtonGroup } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const ToggleBtn = styled(ToggleButton)(({ theme }) => ({
  padding: "8px 16px",
  borderRadius: "8px",
  fontSize: "0.875rem",
  fontWeight: 500,
  textTransform: "none",
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const PieChartToggleBtn = ({ handlePieChartChange }) => {
  const [selected, setSelected] = useState("all");

  const handleSelection = (e) => {
    const selection = e.target.value;
    setSelected(selection);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={selected}
      exclusive
      onChange={handleSelection}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <ToggleBtn value="week" variant="outlined" onClick={handlePieChartChange}>
        Week
      </ToggleBtn>
      <ToggleBtn
        value="month"
        variant="outlined"
        onClick={handlePieChartChange}
      >
        Month
      </ToggleBtn>
      <ToggleBtn
        value="sixMonths"
        variant="outlined"
        onClick={handlePieChartChange}
      >
        6 Months
      </ToggleBtn>
      <ToggleBtn value="year" variant="outlined" onClick={handlePieChartChange}>
        Year
      </ToggleBtn>
      <ToggleBtn value="all" variant="outlined" onClick={handlePieChartChange}>
        All Time
      </ToggleBtn>
    </ToggleButtonGroup>
  );
};

PieChartToggleBtn.propTypes = {
  handlePieChartChange: PropTypes.func.isRequired,
};
export default PieChartToggleBtn;
