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
import InputBox from "./InputBox";
import SwitchBtn from "./SwitchBtn";
import { useState } from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import { handleAddStep, handleDeleteStep } from "./taskHelpers";

const AddStep = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
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
      <Collapse in={openStepsInput} timeout="auto">
        <List
          sx={{
            width: "100%",
          }}
        >
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
          <Button onClick={handleAddStep} variant="contained" color="primary">
            Add
          </Button>
        </AddStep>
      </Collapse>
    </>
  );
};

StepsSwitch.propTypes = {
  createTaskValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setCreateTaskValues: PropTypes.func.isRequired,
};
export default StepsSwitch;
