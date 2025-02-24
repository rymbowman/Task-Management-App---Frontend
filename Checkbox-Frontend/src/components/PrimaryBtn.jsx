import { Button, styled } from "@mui/material";
import PropTypes from "prop-types";

const MainButton = styled(Button)({
  backgroundColor: "#8FBC8F", // Mint green color
  color: "#fff",
  "&:hover": {
    backgroundColor: "#76c776", // Darker mint green on hover
  },
  padding: "10px 20px",
  fontSize: "16px",
  width: "150px",
  borderRadius: "8px",
  textTransform: "none",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
  border: "none",
});

const PrimaryBtn = ({ buttonText, value, onClick }) => {
  return (
    <MainButton variant="outlined" value={value} onClick={onClick}>
      {buttonText}
    </MainButton>
  );
};

PrimaryBtn.propTypes = {
  buttonText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default PrimaryBtn;
