import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import "../styles/App.css";

const InputBox = ({
  label,
  name,
  value,
  type,
  inputProps,
  onChange,
  isValid,
  multiline,
  rows,
}) => {
  return (
    <>
      <TextField
        label={label}
        name={name}
        value={value}
        type={type}
        inputProps={inputProps}
        onChange={onChange}
        variant="outlined"
        multiline={multiline}
        rows={rows}
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
  type: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};
export default InputBox;
