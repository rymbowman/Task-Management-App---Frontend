import { Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";

const ProfileMenu = ({ anchorEl, handleClose }) => {
  const open = Boolean(anchorEl);

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  );
};

ProfileMenu.propTypes = {
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func,
};
export default ProfileMenu;
