import { Button } from "@mui/material";
import PropTypes from "prop-types";

const PrimaryBtn = ({ buttonText, value, onClick }) => {
  return (
    <Button variant="outlined" value={value} onClick={onClick}>
      {buttonText}
    </Button>
  );
};

PrimaryBtn.propTypes = {
  buttonText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default PrimaryBtn;
