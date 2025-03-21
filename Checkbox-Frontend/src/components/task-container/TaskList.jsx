import { List, styled } from "@mui/material";
import IndividualTask from "./IndividualTask";
import PropTypes from "prop-types";

const TaskListContainer = styled(List)({
  width: "80%",
  bgcolor: "background.paper",
  height: "350px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  gap: "10px",
});

const TaskList = ({
  filteredTasks,
  completedTasks,
  setCompletedTasks,
  completedSteps,
  setCompletedSteps,
  openTasks,
  setOpenTasks,
}) => {
  return (
    <TaskListContainer component="nav">
      {filteredTasks.map((task) => (
        <IndividualTask
          key={task.id}
          task={task}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
          completedSteps={completedSteps}
          setCompletedSteps={setCompletedSteps}
          openTasks={openTasks}
          setOpenTasks={setOpenTasks}
        />
      ))}
    </TaskListContainer>
  );
};

TaskList.propTypes = {
  filteredTasks: PropTypes.array,
  completedTasks: PropTypes.array,
  setCompletedTasks: PropTypes.func,
  completedSteps: PropTypes.number,
  setCompletedSteps: PropTypes.func,
  openTasks: PropTypes.array,
  setOpenTasks: PropTypes.func,
};
export default TaskList;
