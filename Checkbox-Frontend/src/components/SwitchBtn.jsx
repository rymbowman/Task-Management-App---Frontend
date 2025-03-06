import { Box, styled, Switch, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { handleSwitchToggle } from "./taskHelpers";

const SwitchItem = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  margin: "0",
  padding: "2.5px 15px",
});

const LabelBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
});

const SwitchBtn = ({ name, icon, labelText, openInput, setOpenInput }) => {
  const [checked, setChecked] = useState(false);
  return (
    <SwitchItem>
      <LabelBox display="flex">
        {icon}
        <Typography variant="body1">{labelText}</Typography>
      </LabelBox>
      <Switch
        name={name}
        checked={checked}
        onChange={(e) =>
          handleSwitchToggle(e, setChecked, openInput, setOpenInput)
        }
      />
    </SwitchItem>
  );
};

SwitchBtn.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  labelText: PropTypes.string.isRequired,
  openInput: PropTypes.bool.isRequired,
  setOpenInput: PropTypes.func.isRequired,
};
export default SwitchBtn;
