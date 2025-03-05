import { Collapse } from "@mui/material";
import InputBox from "./InputBox";
import SwitchBtn from "./SwitchBtn";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { useState } from "react";

const PrioritySwitch = (createTaskValues, handleChange) => {
  const [openPriorityInput, setOpenPriorityInput] = useState(false);

  return (
    <>
      <SwitchBtn
        name="priority"
        value={createTaskValues.priority}
        onChange={handleChange}
        icon={<PriorityHighIcon />}
        labelText="Priority"
        onClick={() => setOpenPriorityInput(!openPriorityInput)}
      />
      <Collapse in={openPriorityInput} timeout="auto">
        <InputBox
          label="Priority"
          name="priority"
          value={createTaskValues.priority}
          type="number"
          onChange={handleChange}
          slotProps={{
            input: { min: 0, max: 5 },
          }}
        />
      </Collapse>
    </>
  );
};

export default PrioritySwitch;
