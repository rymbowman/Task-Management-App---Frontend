import { Menu, MenuItem } from "@mui/material";

const ProfileMenu = ({ anchorEl, handleClose }) => {
  return (
    <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
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
