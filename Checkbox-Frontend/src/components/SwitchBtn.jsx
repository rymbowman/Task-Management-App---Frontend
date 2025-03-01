import {
  Box,
  FormControlLabel,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const SwitchItem = styled(FormControlLabel)({
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

const SwitchBtn = ({ name, value, onChange, icon, labelText }) => {
  return (
    <SwitchItem
      control={<Switch />}
      labelPlacement="start"
      name={name}
      value={value}
      onChange={onChange}
      label={
        <LabelBox display="flex">
          {icon}
          <Typography variant="body1">{labelText}</Typography>
        </LabelBox>
      }
    />
  );
};

SwitchBtn.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
  labelText: PropTypes.string.isRequired,
};
export default SwitchBtn;
