import {
  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import SwitchBtn from "./SwitchBtn";
import { useState } from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import { handleAddStep, handleDeleteStep } from "./taskHelpers";
import InputBox from "../InputBox";

const InputContainer = styled(Collapse)({
  width: "90%",
  margin: "auto",
});

const AddStep = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const AddBtn = styled(Button)({
  padding: "5px 10px",
  color: "blue",
  backgroundColor: "white",
  border: "1px solid blue",
  "&:hover": {
    backgroundColor: "blue",
    color: "white",
    transition: ".6s",
  },
});

const StepsSwitch = ({ createTaskValues, setCreateTaskValues }) => {
  const [openStepsInput, setOpenStepsInput] = useState(false);
  const [newStep, setNewStep] = useState("");

  return (
    <>
      <SwitchBtn
        name="steps"
        icon={<ChecklistIcon />}
        labelText="Steps"
        openInput={openStepsInput}
        setOpenInput={setOpenStepsInput}
      />
      <InputContainer in={openStepsInput} timeout="auto">
        <List>
          {Array.isArray(createTaskValues.steps) &&
          createTaskValues.steps.length > 0 ? (
            createTaskValues.steps.map((step, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton
                    onClick={() =>
                      handleDeleteStep(
                        index,
                        createTaskValues,
                        setCreateTaskValues
                      )
                    }
                    color="primary"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ListItemText primary={`- ${step}`} />
              </ListItem>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              No steps added
            </Typography>
          )}
        </List>
        <AddStep>
          <InputBox
            label="New Step"
            value={newStep}
            onChange={(e) => setNewStep(e.target.value)}
          />
          <AddBtn onClick={handleAddStep} variant="contained">
            Add
          </AddBtn>
        </AddStep>
      </InputContainer>
    </>
  );
};

StepsSwitch.propTypes = {
  createTaskValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setCreateTaskValues: PropTypes.func.isRequired,
};
export default StepsSwitch;
