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

const SwitchBtn = ({ name, value, icon, labelText, onClick }) => {
  return (
    <SwitchItem
      control={<Switch />}
      labelPlacement="start"
      name={name}
      value={value}
      label={
        <LabelBox display="flex">
          {icon}
          <Typography variant="body1">{labelText}</Typography>
        </LabelBox>
      }
      onClick={onClick}
    />
  );
};

SwitchBtn.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  icon: PropTypes.element.isRequired,
  labelText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default SwitchBtn;
