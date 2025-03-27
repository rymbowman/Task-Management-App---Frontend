import { PieChart } from "@mui/x-charts/PieChart";
import theme from "../../theme/theme";
import { Box, Typography } from "@mui/material";
import PieChartToggleBtn from "./PieChartToggleBtn";
import { useState } from "react";

const data = [
  {
    id: 0,
    value: 30,
    label: "Completed",
    color: theme.palette.primary.main,
    date: "2021-10-01",
  },
  {
    id: 1,
    value: 20,
    label: "In progress",
    color: theme.palette.info.main,
    date: "2025-02-15",
  },
  {
    id: 2,
    value: 30,
    label: "Incomplete",
    color: theme.palette.error.main,
    date: "2021-10-01",
  },
];

const PieChartStats = () => {
  const [dateRange, setDateRange] = useState("all");
  const [filteredPieChart, setFilteredPieChart] = useState(data);

  const filterDataByDateRange = () => {
    const now = new Date();
    let filteredData;

    if (dateRange === "week") {
      filteredData = data.filter((item) => {
        const itemDate = new Date(item.date);
        const oneWeekAgo = new Date(now);
        oneWeekAgo.setDate(now.getDate() - 7);
        return itemDate >= oneWeekAgo;
      });
    } else if (dateRange === "month") {
      filteredData = data.filter((item) => {
        const itemDate = new Date(item.date);
        const oneMonthAgo = new Date(now);
        oneMonthAgo.setMonth(now.getMonth() - 1);
        return itemDate >= oneMonthAgo;
      });
    } else if (dateRange === "sixMonths") {
      filteredData = data.filter((item) => {
        const itemDate = new Date(item.date);
        const sixMonthsAgo = new Date(now);
        sixMonthsAgo.setMonth(now.getMonth() - 6);
        return itemDate >= sixMonthsAgo;
      });
    } else if (dateRange === "year") {
      filteredData = data.filter((item) => {
        const itemDate = new Date(item.date);
        const oneYearAgo = new Date(now);
        oneYearAgo.setFullYear(now.getFullYear() - 1);
        return itemDate >= oneYearAgo;
      });
    } else {
      filteredData = data;
    }
    return filteredData;
  };

  const handlePieChartChange = (newRange) => {
    setDateRange(newRange);
    const filteredData = filterDataByDateRange(newRange);
    setFilteredPieChart(filteredData);
  };

  const totalValue = filteredPieChart.reduce(
    (acc, curr) => acc + curr.value,
    0
  );

  const chartData = filteredPieChart.map((item) => ({
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
      <PieChartToggleBtn handlePieChartChange={handlePieChartChange} />
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
