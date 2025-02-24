import { TextField } from "@mui/material";
import PropTypes from "prop-types";
const InputBox = ({ label, name, value, onChange }) => {
  return (
    <>
      <TextField
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        variant="outlined"
      />
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputBox;
