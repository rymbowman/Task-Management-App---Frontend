import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import "../styles/App.css";

const InputBox = ({ label, name, value, onChange, isValid }) => {
  return (
    <>
      <TextField
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        variant="outlined"
        sx={{
          width: "350px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: isValid ? "" : "2px solid red",
            },
          },
        }}
      />
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
};
export default InputBox;
