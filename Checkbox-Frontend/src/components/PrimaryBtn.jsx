import { Button } from "@mui/material";
import PropTypes from "prop-types";

const PrimaryBtn = ({ buttonText, onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      {buttonText}
    </Button>
  );
};

PrimaryBtn.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default PrimaryBtn;
