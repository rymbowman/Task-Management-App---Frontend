import { Checkbox, Tooltip } from "@mui/material";
import PropTypes from "prop-types";

const CheckBox = ({ title, value, checked, onChange }) => {
  return (
    <Tooltip title={title} placement="bottom">
      <Checkbox
        edge="start"
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </Tooltip>
  );
};

CheckBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
