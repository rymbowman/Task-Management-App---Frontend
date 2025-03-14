import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import ProfileMenu from "../components/nav/ProfileMenu";
import { useState } from "react";

const drawerWidth = 240;

const Nav = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  background: "linear-gradient(135deg, #e0f7fa 0%, #f5f5f5 100%)",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NavToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2.5), // Use theme.spacing for padding
}));

const Logo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.primary.main,
  gap: theme.spacing(0.625),
}));

const IconBtn = styled(IconButton)({
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const MenuBtn = styled(MenuIcon)(({ theme }) => ({
  fontSize: 30,
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Navbar = ({ handleSidebar, sidebarOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Nav position="static" open={sidebarOpen}>
        <NavToolbar>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <IconBtn onClick={handleSidebar}>
              <MenuBtn />
            </IconBtn>
            <Logo>
              <CheckIcon sx={{ fontSize: 40 }} />
              <Typography variant="h4">Checkbox</Typography>
            </Logo>
          </Box>
          <IconBtn onClick={handleClick}>
            <ProfileAvatar></ProfileAvatar>
          </IconBtn>
          <ProfileMenu anchorEl={anchorEl} handleClose={handleClose} />
        </NavToolbar>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  handleSidebar: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
};
export default Navbar;
