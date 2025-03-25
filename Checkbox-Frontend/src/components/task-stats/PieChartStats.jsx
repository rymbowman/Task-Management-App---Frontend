import { PieChart } from "@mui/x-charts/PieChart";
import theme from "../../theme/theme";
import { Box, Typography } from "@mui/material";

const data = [
  { id: 0, value: 30, label: "Completed", color: theme.palette.primary.main },
  { id: 1, value: 20, label: "In progress", color: theme.palette.info.main },
  { id: 2, value: 30, label: "Incomplete", color: theme.palette.error.main },
];

const PieChartStats = () => {
  const totalValue = data.reduce((acc, curr) => acc + curr.value, 0);

  const chartData = data.map((item) => ({
    ...item,
    percentage: (item.value / totalValue) * 100,
    color: item.color,
    label: item.label,
  }));
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Task Completion Breakdown
      </Typography>
      <PieChart
        series={[
          {
            data: chartData,
            highlightScope: { fade: "none", highlight: "item" },
            faded: {
              innerRadius: 5,
              additionalRadius: -5,
              color: "rgba(0, 0, 0, 0.1)",
            },
            valueFormatter: (context) => {
              // Calculate the percentage for the hovered slice
              const percentage = chartData[context.index].percentage;
              return `${percentage.toFixed(1)}%`; // Format as percentage with 1 decimal place
            },
          },
        ]}
        width={350}
        height={175}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      />
    </Box>
  );
};

export default PieChartStats;
