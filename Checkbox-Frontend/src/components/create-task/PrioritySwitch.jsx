import { Box, Collapse, styled } from "@mui/material";
import InputBox from "../InputBox";
import SwitchBtn from "./SwitchBtn";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { useState } from "react";
import PropTypes from "prop-types";
import { handleChange } from "./taskHelpers";

const InputContainer = styled(Collapse)({
  width: "90%",
  margin: "auto",
});

const PrioritySwitch = ({ createTaskValues, setCreateTaskValues }) => {
  const [openPriorityInput, setOpenPriorityInput] = useState(false);

  return (
    <Box>
      <SwitchBtn
        name="priority"
        icon={<PriorityHighIcon />}
        labelText="Priority"
        openInput={openPriorityInput}
        setOpenInput={setOpenPriorityInput}
      />
      <InputContainer in={openPriorityInput} timeout="auto">
        <InputBox
          label="Priority(0 Lowest - 5 Highest)"
          name="priority"
          value={createTaskValues.priority}
          type="number"
          onChange={(e) => handleChange(e, setCreateTaskValues)}
          slotProps={{
            input: { min: 0, max: 5 },
          }}
        />
      </InputContainer>
    </Box>
  );
};

PrioritySwitch.propTypes = {
  createTaskValues: PropTypes.object.isRequired,
  setCreateTaskValues: PropTypes.func.isRequired,
};

export default PrioritySwitch;
