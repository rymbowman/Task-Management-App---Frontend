import { Box, styled, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import PrimaryBtn from "../components/PrimaryBtn";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "75px",
  height: "100vh",
  textAlign: "center",
  background: "linear-gradient(135deg, #e0f7fa 0%, #f5f5f5 100%)", // Gradient background
});

const HeaderBox = styled(Box)({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Logo = styled(Box)({
  display: "flex",
  alignItems: "center",
  color: "#8FBC8F",
  marginBottom: "40px",
});

const SubHeadline = styled(Typography)({
  color: "#1A3B5D",
  fontSize: "28px",
  fontWeight: "600",
});

const ButtonContainer = styled(Box)({
  display: "flex",
  gap: "20px",
  marginTop: "20px",
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
    <Container>
      <HeaderBox>
        <Logo>
          <CheckIcon sx={{ fontSize: 100 }} />
          <Typography variant="h1">Checkbox</Typography>
        </Logo>
        <SubHeadline variant="h5">
          Achieve More with Every Checkmark
        </SubHeadline>
      </HeaderBox>
      <ButtonContainer>
        <PrimaryBtn
          value={"register"}
          buttonText="Register"
          onClick={handleClick}
        />
        <PrimaryBtn value={"login"} buttonText="Login" onClick={handleClick} />
      </ButtonContainer>
    </Container>
  );
};

export default Landing;
