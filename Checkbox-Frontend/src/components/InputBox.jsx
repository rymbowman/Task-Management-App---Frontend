import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import "../styles/App.css";

const InputBox = ({
  label,
  name,
  value,
  type,
  slotProps,
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
        slotProps={slotProps}
        onChange={onChange}
        variant="outlined"
        multiline={multiline}
        rows={rows}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border:
                isValid === undefined ? "" : isValid ? "" : "2px solid red",
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
  slotProps: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};
export default InputBox;
