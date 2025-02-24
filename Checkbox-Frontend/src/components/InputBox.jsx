import { TextField } from "@mui/material";
import PropTypes from "prop-types";
const InputBox = ({ label, value, onChange }) => {
  return (
    <>
      <TextField
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputBox;
