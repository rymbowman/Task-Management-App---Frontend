import { Box, styled } from "@mui/material";

const DashboardContainer = styled(Box)({
  display: "flex",
  height: "100vh",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #e0f7fa 0%, #f5f5f5 100%)",
});

const Dashboard = () => {
  return <DashboardContainer></DashboardContainer>;
};

export default Dashboard;
