import { IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PropTypes from "prop-types";
import { useState } from "react";

const TableFilter = ({ filteredCategory, uniqueCategories }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
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
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClick={handleMenuClose}
          onClose={handleMenuClose}
        >
          {uniqueCategories.map((category) => (
            <MenuItem key={category} onClick={handleMenuClose}>
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
  uniqueCategories: PropTypes.array.isRequired,
};

export default TableFilter;
