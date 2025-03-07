import { Box, styled, Typography } from "@mui/material";
import InputBox from "../InputBox";
import PrimaryBtn from "../PrimaryBtn";
import { useState } from "react";
import { handleChange, handleSubmit } from "./taskHelpers";
import SwitchContainer from "./SwitchContainer";
import PropTypes from "prop-types";

const TaskCreationContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
  background: "linear-gradient(135deg, #e0f7fa 0%, #f5f5f5 100%)",
  overflow: "auto",
  height: "100%",
  width: "100%",
  scrollbarWidth: "thin",
  overflowY: "scroll",
});

const MainInfoContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "75%",
});

const CreateTask = ({ handleClose }) => {
  const [validInput, setValidInput] = useState(true);
  const [createTaskValues, setCreateTaskValues] = useState({
    title: "",
    description: "",
    category: "",
    dueDate: null,
    priority: "",
    steps: [],
    notes: "",
    reminder: null,
  });

  return (
    <TaskCreationContainer>
      <Typography variant="h4" style={{ color: "#8FBC8F" }}>
        Create Task
      </Typography>
      <MainInfoContainer>
        <InputBox
          label={"Task Name"}
          name="title"
          value={createTaskValues.title}
          type="text"
          onChange={(e) => handleChange(e, setCreateTaskValues)}
          isValid={validInput}
        />
        <InputBox
          label={"Task Description"}
          name="description"
          value={createTaskValues.description}
          type="text"
          onChange={(e) => handleChange(e, setCreateTaskValues)}
          isValid={validInput}
          multiline={true}
          rows={2}
        />
      </MainInfoContainer>
      <SwitchContainer
        createTaskValues={createTaskValues}
        setCreateTaskValues={setCreateTaskValues}
      />
      <Box>
        <PrimaryBtn
          buttonText={"Create Task"}
          onClick={() => {
            handleSubmit(createTaskValues, setValidInput, setCreateTaskValues);
            handleClose();
          }}
        />
      </Box>
    </TaskCreationContainer>
  );
};

CreateTask.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
export default CreateTask;
