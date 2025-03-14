import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PropTypes from "prop-types";
import theme from "../../theme/theme";

const sampleCategories = ["Work", "Personal", "Shopping", "Others"];
const taskOptions = ["All Tasks", "Completed", "Overdue", "Archived"];

const drawerWidth = 240;

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Sidebar = ({ handleSidebar, sidebarOpen }) => {
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
        anchor="left"
        open={sidebarOpen}
        variant="persistent"
      >
        <DrawerHeader>
          <IconButton onClick={handleSidebar}>
            {sidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sampleCategories.map((category) => (
            <ListItem key={category} disablePadding>
              <ListItemButton>
                <ListItemText primary={category} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {taskOptions.map((option) => (
            <ListItem key={option} disablePadding>
              <ListItemButton>
                <ListItemText primary={option} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {
  handleSidebar: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
};
export default Sidebar;
