import { Box, styled } from "@mui/material";
import TaskModal from "../components/create-task/TaskModal";
import Grid from "@mui/material/Grid2";
import Navbar from "../layouts/Navbar";

const DashboardContainer = styled(Grid)({
  height: "100vh",
  width: "100%",
  background: "linear-gradient(135deg, #e0f7fa 0%, #f5f5f5 100%)",
});

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, border: "1px solid black" }}>
      <Navbar />
      <DashboardContainer container spacing={2}>
        <Grid size={10} sx={{ border: "1px solid black" }}>
          <Box>Content for the main area</Box>
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
          <Box>More content for the main area</Box>
        </Grid>
      </DashboardContainer>
    </Box>
  );
};

export default Dashboard;
