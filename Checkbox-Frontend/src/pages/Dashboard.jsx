import { Box, styled } from "@mui/material";
import TaskModal from "../components/create-task/TaskModal";
import Grid from "@mui/material/Grid2";
import Navbar from "../layouts/Navbar";
import { useState } from "react";
import Sidebar from "../components/nav/Sidebar";
import TaskContainer from "../components/task-container/TaskContainer";
import TaskStats from "../components/task-stats/TaskStats";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,
    }),
  })
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen ? "closing sidebar" : "opening sidebar");
  };

  return (
    <Box
      sx={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <Main open={sidebarOpen}>
        <Grid container spacing={2}>
          <Grid
            size={10}
            sx={{
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TaskContainer />
          </Grid>
          <Grid
            size={2}
            sx={{
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TaskModal />
          </Grid>
          <Grid size={4} sx={{ border: "1px solid black" }}>
            <Box>Additional content or widgets</Box>
          </Grid>
          <Grid size={8} sx={{ border: "1px solid black" }}>
            <TaskStats />
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
};

export default Dashboard;
