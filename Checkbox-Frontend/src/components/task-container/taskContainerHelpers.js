export const handleOpenDetails = (taskId, openTasks, setOpenTasks) => {
  if (openTasks.includes(taskId)) {
    setOpenTasks(openTasks.filter((task) => task !== taskId));
  } else {
    setOpenTasks([...openTasks, taskId]);
  }
};

export const groupByCategory = (
  tasks,
  category,
  setFilteredTasks,
  setActiveChip
) => {
  const filtered = tasks.filter((task) => task.details.category === category);
  setFilteredTasks(filtered);
  setActiveChip(category);
};

export const resetFilter = (tasks, setFilteredTasks, setActiveChip) => {
  setFilteredTasks(tasks);
  setActiveChip("All");
};

export const handleCompletedTask = (e, completedTasks, setCompletedTasks) => {
  const taskId = Number(e.target.value);
  if (completedTasks.includes(taskId)) {
    setCompletedTasks(completedTasks.filter((task) => task !== taskId));
  } else {
    setCompletedTasks([...completedTasks, taskId]);
  }
};

// function to update individual progress bar on step completion
export const handleTaskProgress = (taskId, step, setCompletedSteps) => {
  setCompletedSteps((prev) => {
    const taskSteps = prev[taskId] || [];
    if (taskSteps.includes(step)) {
      return {
        ...prev,
        [taskId]: taskSteps.filter((s) => s !== step),
      };
    } else {
      return {
        ...prev,
        [taskId]: [...taskSteps, step],
      };
    }
  });
};
