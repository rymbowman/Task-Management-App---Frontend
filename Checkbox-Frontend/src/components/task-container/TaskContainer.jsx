import { Box } from "@mui/material";
import { useState } from "react";
import ChipContainer from "./ChipContainer";
import { groupByCategory, resetFilter } from "./taskContainerHelpers";
import TaskList from "./TaskList";

const tasks = [
  {
    id: 1,
    title: "Walk the dog",
    details: {
      description: "Take the dog for a walk around the block",
      category: "Personal",
      dueDate: "2026-12-01",
      priority: "4",
      steps: ["Put on shoes", "Grab leash", "Walk dog"],
      notes: "Make sure to bring water for the dog",
      reminder: "2021-12-01",
    },
  },
  {
    id: 2,
    title: "Cut the grass",
    details: {
      description: "Mow the lawn",
      category: "Home",
      dueDate: "2021-12-01",
      priority: "3",
      steps: ["Get lawnmower", "Mow lawn"],
      notes: "Make sure to wear sunscreen",
      reminder: "2021-12-01",
    },
  },
  {
    id: 3,
    title: "Go to the store",
    details: {
      description: "Buy groceries",
      category: "Personal",
      dueDate: "2026-12-01",
      priority: "2",
      steps: ["Make a list", "Drive to store", "Buy groceries"],
      notes: "Don't forget the milk",
      reminder: "2021-12-01",
    },
  },
  {
    id: 4,
    title: "Do laundry",
    details: {
      description: "Wash clothes",
      category: "Home",
      dueDate: "2021-12-01",
      priority: "1",
      steps: ["Sort clothes", "Wash clothes", "Dry clothes"],
      notes: "Don't mix colors",
      reminder: "2021-12-01",
    },
  },
  {
    id: 5,
    title: "Clean the house",
    details: {
      description: "Dust and vacuum",
      category: "Home",
      dueDate: "2021-12-01",
      priority: "4",
      steps: ["Dust furniture", "Vacuum floors"],
      notes: "Don't forget to clean the bathroom",
      reminder: "2021-12-01",
    },
  },
];

const TaskContainer = () => {
  const [openTasks, setOpenTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [activeChip, setActiveChip] = useState("All");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [completedSteps, setCompletedSteps] = useState({});

  const uniqueCategories = [
    ...new Set(tasks.map((task) => task.details.category)),
  ];

  return (
    <Box
      sx={{
        border: "1px solid black",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ChipContainer
        resetFilter={resetFilter}
        groupByCategory={groupByCategory}
        tasks={tasks}
        activeChip={activeChip}
        uniqueCategories={uniqueCategories}
        setFilteredTasks={setFilteredTasks}
        setActiveChip={setActiveChip}
      />
      <TaskList
        filteredTasks={filteredTasks}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
        completedSteps={completedSteps}
        setCompletedSteps={setCompletedSteps}
        openTasks={openTasks}
        setOpenTasks={setOpenTasks}
      />
    </Box>
  );
};

export default TaskContainer;
