import { IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PropTypes from "prop-types";
import { useState } from "react";

const TableFilter = ({
  filteredCategory,
  setFilteredCategory,
  uniqueCategories,
  tableRows,
  setFilteredRows,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCategorySelection = (e) => {
    setFilteredCategory(e.target.innerText);
    setFilteredRows(
      e.target.innerText === "All"
        ? tableRows
        : tableRows.filter((row) => row.category === e.target.innerText)
    );
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Toolbar variant="dense">
        <Typography>{filteredCategory}</Typography>
        <IconButton onClick={handleMenuOpen}>
          <FilterAltIcon />
        </IconButton>
      </Toolbar>
      {open && (
        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          <MenuItem onClick={handleCategorySelection}>All</MenuItem>
          {uniqueCategories.map((category) => (
            <MenuItem key={category} onClick={handleCategorySelection}>
              {category}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

TableFilter.propTypes = {
  filteredCategory: PropTypes.string.isRequired,
  setFilteredCategory: PropTypes.func.isRequired,
  uniqueCategories: PropTypes.array.isRequired,
  tableRows: PropTypes.array.isRequired,
  setFilteredRows: PropTypes.func.isRequired,
};

export default TableFilter;
