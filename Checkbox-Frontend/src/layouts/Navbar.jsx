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
import Sidebar from "../components/nav/Sidebar";
import PropTypes from "prop-types";

const Nav = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "none",
});

const NavToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 20px",
});

const Logo = styled(Box)({
  display: "flex",
  alignItems: "center",
  color: "#8FBC8F",
  gap: "5px",
});

const IconBtn = styled(IconButton)({
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const MenuBtn = styled(MenuIcon)({
  fontSize: 30,
  color: "#8FBC8F",
  "&:hover": {
    color: "#2E8B57",
  },
});

const ProfileAvatar = styled(Avatar)({
  backgroundColor: "#8FBC8F",
  "&:hover": {
    backgroundColor: "#2E8B57",
  },
});

const Navbar = ({ handleSidebar, sidebarOpen }) => {
  return (
    <>
      <Nav position="static">
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
          <IconBtn>
            <ProfileAvatar></ProfileAvatar>
          </IconBtn>
        </NavToolbar>
      </Nav>
      <Sidebar sidebarOpen={sidebarOpen} handleSidebar={handleSidebar} />
    </>
  );
};

Navbar.propTypes = {
  handleSidebar: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
};
export default Navbar;
