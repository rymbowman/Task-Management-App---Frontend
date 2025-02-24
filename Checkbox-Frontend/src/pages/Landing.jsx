import { Box, styled, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import PrimaryBtn from "../components/PrimaryBtn";

const LogoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  color: "#98FF98",
});

const Landing = () => {
  const handleClick = (e) => {
    if (e.target.value === "register") {
      console.log("register button clicked");
    } else if (e.target.value === "login") {
      console.log("login button clicked");
    }
  };
  return (
    <Box>
      <LogoBox>
        <CheckIcon sx={{ fontSize: 100 }} />
        <Typography variant="h1">Checkbox</Typography>
      </LogoBox>
      <Typography variant="h5">Achieve More with Every Checkmark</Typography>
      <PrimaryBtn
        value={"register"}
        buttonText="Get Started"
        onClick={handleClick}
      />
      <PrimaryBtn value={"login"} buttonText="Login" onClick={handleClick} />
    </Box>
  );
};

export default Landing;
